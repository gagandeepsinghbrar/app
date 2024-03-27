const express = require('express');
const { spawn } = require('child_process');

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


app.get('/results/:id', (req, res) => {
  const id = req.params.id;

  // Invoke Python script
  const pythonProcess = spawn('python3', ['generate_pdf.py', id]);

  pythonProcess.stdout.on('data', (data) => {
      // Data contains PDF file path or URL
      const pdfPath = data.toString().trim();
      // Trigger download of the PDF file
      res.download(pdfPath);
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`Error from Python script: ${data}`);
      res.status(500).send('Internal Server Error');
  });
});

app.get('/generate_pdf', (req, res) => {
  const pythonProcess = spawn('python', ['generate_pdf.py', 'arguments']);
  
  // Handle stdout, stderr, and exit events as needed

  pythonProcess.stdout.on('data', (data) => {
      const pdfPath = data.toString().trim();
      res.send(pdfPath); // Send back the path to the generated PDF
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`Error from Python script: ${data}`);
      res.status(500).send(`Error from Python script: ${data}`); // Send the error message back in the response
  });

  pythonProcess.on('exit', (code) => {
      if (code !== 0) {
          console.error(`Python script exited with code ${code}`);
          res.status(500).send(`Python script exited with code ${code}`);
      }
  });
});


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