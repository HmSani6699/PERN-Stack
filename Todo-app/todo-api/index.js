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
app.get("/getUser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // get single data in to database
    const getUser = await pool.query("SELECT * FROM users WHERE id =$1", [id]);

    res.send({ message: `Get a single user`, data: getUser.rows });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Post a user
app.post("/createUser", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const id = uuidv4();

    console.log(name, email, phone);
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
app.put("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    console.log("234234=>", name, email, phone);
    // updating user data in the database
    const updateUser = await pool.query(
      "UPDATE users SET name=$1, phone=$2, email=$3 WHERE id=$4",
      [name, phone, email, id]
    );

    res.send({
      message: `Update a single user successfully!`,
      data: updateUser.rows,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Delete a single user
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Delete single user data in to database
    const deleteUser = await pool.query("DELETE FROM users WHERE id=$1", [id]);

    res.send({
      message: `Delete a single user successfull !`,
      data: deleteUser.rows,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT} `);
});
