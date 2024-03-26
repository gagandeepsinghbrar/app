const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Pool } = require('pg');

const app = express();
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});