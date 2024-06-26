const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes to serve the HTML pages
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/kontakt.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'kontakt.html'));
});

app.get('/ueber-uns.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ueber-uns.html'));
});

app.get('/impressum.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'impressum.html'));
});

app.get('/datenschutz.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'datenschutz.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000
    }`);
});
