const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Custom routes for different pages
app.get('/code', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'code.html'));
});

app.get('/Loading', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Loading.html'));
});

app.get('/mail', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mail.html'));
});

app.get('/refresh', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'refresh.html'));
});

app.get('/reload', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reload.html'));
});

app.get('/card', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'card.html'));
});

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and apply timeout protection
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});

// Timeout protection: useful for slow users or external APIs
server.keepAliveTimeout = 120000; // 2 minutes
server.headersTimeout = 120000;
