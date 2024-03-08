const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Todo Server is running on tha port: http://localhost:5000");
});

// Get all user
// Get a user
// Post a user
// Update a user
// Delete a user

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT} `);
});
