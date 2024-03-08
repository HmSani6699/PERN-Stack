const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

// using the middleweare
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo Server is running on tha port: http://localhost:5000");
});

// Get all user
app.get("/getAllUsers", async (req, res) => {
  try {
    res.send({ message: "Get all users" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Get a user
app.get("/getAllUsers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.send({ message: `Get a single user at:${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});
// Post a user
app.post("/getAllUsers", (req, res) => {
  try {
    const newUser = req.body;
    res.send({ message: `Added user at:${newUser?.name}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});
// Update a user
app.put("/getAllUsers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.send({ message: `Update a single user at:${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});
// Delete a user

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT} `);
});
