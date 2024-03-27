const express = require('express');
const { spawn } = require('child_process');
const axios = require('axios');

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { Pool } = require('pg');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
app.use(express.json());
// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true}));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database_practice',
    password: 'mypass',
    port: 5432, // Default PostgreSQL port
});


// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve index.html
app.get('/tests', (req, res) => {
  res.sendFile(path.join(__dirname, 'results.html'));
});


app.get('/results', async (req, res) => {
  try {
    const query = 'SELECT * FROM quiz_results';
    const result = await pool.query(query);

    res.json(result.rows); // Return all entries from the quiz_results table as JSON
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const baseURL = 'http://localhost:3000'; // Define the base URL

app.get('/generate_pdf/:id', (req, res) => {
  const id = req.params.id;
  // Command to execute the Python script
  const pythonScript = 'generate_pdf.py'
  
  const args = [id]; 

  // Spawn the Python script as a child process
  const pythonProcess = spawn('python3', [pythonScript, ...args]);

  // Capture output from the Python script
  let pdfData = '';

  pythonProcess.stdout.on('data', (data) => {
      pdfData += data;
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`Error from Python script: ${data}`);
  });

  // Handle completion of the Python script
  pythonProcess.on('close', (code) => {
      console.log(`Python script exited with code ${code}`);
      
      // Assuming the Python script directly outputs PDF content
      if (code === 0 && pdfData) {
          // Send the PDF data as a response
          res.set('Content-Type', 'application/pdf');
          res.set('Content-Disposition', 'inline; filename="generated.pdf"');
          res.send(pdfData);
      } else {
          res.status(500).send('Error generating PDF');
      }
  });
});

// app.get('/generate_pdf/:id', async (req, res) => {
//   try {
//       const id = req.params.id;
//       console.log(id)
//       console.log("____")
//       // Make a request to the Flask server to generate the PDF
//       const response = await axios.get(`${baseURL}/generate_pdf/${id}`, {
//           responseType: 'arraybuffer'
//       });

//       // Send the PDF data as a response
//       res.set('Content-Type', 'application/pdf');
//       res.set('Content-Disposition', 'attachment; filename="quiz_results.pdf"');
//       res.send(response.data);
//   } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('Internal Server Error');
//   }
// });


app.post('/submit-quiz', async (req, res) => {
  try {
    const { result_data, timestamp } = req.body;
    const results = JSON.stringify(result_data); // Ensure your data is in JSON string format
    const queryText = 'INSERT INTO quiz_results(result_data) VALUES($1) RETURNING id';
    const queryParams = [results];
    
    const dbRes = await pool.query(queryText, queryParams);
    res.status(201).send({ message: 'Quiz results saved', quizResultId: dbRes.rows[0].id });
  } catch (err) {
    console.error('Error saving quiz results:', err);
    res.status(500).send({ error: 'Failed to save quiz results' });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// CREATE TABLE quiz_results (
//     id SERIAL PRIMARY KEY,
//     result_data TEXT, -- Store quiz results as a JSON string
//     taken_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );