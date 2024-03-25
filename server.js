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

app.get('/items', async (req, res) => {
  try {
    const queryText = 'SELECT * FROM item';
    const { rows } = await pool.query(queryText);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from item table:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Handle POST request to /items
app.post('/items', async (req, res) => {
    const itemName = req.body.name; // Assuming the input field name is 'name'
    console.log("we have received ", itemName);
    try {
        // Use the pool to execute a SQL query to insert the item into the database
        const queryText = 'INSERT INTO item (name) VALUES ($1)';
        const result = await pool.query(queryText, [itemName]);
        
        // Log the success message
        console.log('Item saved to database:', itemName);
        
        // Send a success response
        res.send('Item saved to database: ' + itemName);
    } catch (error) {
        // Log and send an error response if an error occurs
        console.error('Error saving item to database:', error);
        res.status(500).send('Error saving item to database');
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});