// server/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Choose your desired port

// Middleware setup, such as bodyParser, CORS, etc.

// Define routes (we'll add these later)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
