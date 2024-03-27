const express = require('express');
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

app.post('/submit-quiz', async (req, res) => {
  try {
    const { results, timestamp } = req.body;
    const resultData = JSON.stringify(results); // Ensure your data is in JSON string format
    const queryText = 'INSERT INTO quiz_results(result_data) VALUES($1) RETURNING id';
    const queryParams = [resultData];
    
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