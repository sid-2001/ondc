const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World! This is the root route.');
});

// Define a custom route
app.get('/custom', (req, res) => {
  res.send('This is a custom route.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
