// Save as: nodeServer.js

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;           // Status OK
  //res.setHeader('Content-Type', 'text/plain'); // Set response type
  res.end('Hello from plain NodeJS Server!');
});

// Define a port
const PORT = 8080;

// Server listens on the port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
