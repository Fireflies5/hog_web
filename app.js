// npm init -y
// npm i express
// npm i nodemon
// 

const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
// Route for the about.html file
app.get('/market_place', (req, res) => {
    res.sendFile(__dirname + '/views/market_place.html');
});

// Route for the contact.html file
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:8080`);
});
