// Save as: server.js

const express = require('express');
const app = express();
const PORT = 9000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from ExpressJS Server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
