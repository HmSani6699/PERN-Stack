const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const pool = require("./db");
const { v4: uuidv4 } = require("uuid");

// using the middleweare
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo Server is running on tha port: http://localhost:5000");
});

// Get all user
app.get("/getAllUsers", async (req, res) => {
  try {
    const getAllUsers = await pool.query("SELECT * FROM users");

    res.send({ message: "Get all users", data: getAllUsers.rows });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Get a single user
app.get("/getAllUsers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.send({ message: `Get a single user at:${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Post a user
app.post("/createUser", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const id = uuidv4();
    // Inserting user data in to database
    const newUser = await pool.query(
      "INSERT INTO users VALUES ($1, $2,$3,$4) RETURNING *",
      [id, name, phone, email]
    );

    res.status(200).json({
      message: `User as created`,
      data: newUser.rows,
    });
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

// Delete a single user
app.delete("/getAllUsers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.send({ message: `Delete a single user at:${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT} `);
});
