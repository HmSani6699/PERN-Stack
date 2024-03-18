const express = require("express");
const app = express();
const cros = require("cors");
const PORT = 4000;
const pool = require("./db");

//  middleweare
app.use(express.json());
app.use(cros());

app.listen(PORT, () => {
  console.log(`Server is running on https//localhost:${PORT}`);
});

// POST a single user
app.post("/createUser", async (req, res) => {
  try {
    const { name, email } = req.body;

    const getAllUsers = await pool.query("SELECT * FROM users");
    const filterUser = getAllUsers.rows.find((item) => item?.email === email);

    if (filterUser) {
      res.send({ message: "user has been already created !" });
      return;
    }

    const cretedUser = await pool.query(
      "INSERT INTO users VALUES ($1,$2) RETURNING *",
      [name, email]
    );

    res.send({
      message: "User crated successfully!",
      data: cretedUser.rows,
    });
  } catch (error) {
    res.send({
      error: error.message,
    });
  }
});

// GET all users
app.get("/getAllUsers", async (req, res) => {
  try {
    const getAllUsers = await pool.query("SELECT * FROM users");
    res.send({
      message: "GET all users Successfully!",
      data: getAllUsers.rows,
    });
  } catch (error) {
    res.send({
      error: error.message,
    });
  }
});

// GET a single  user
app.get("/getUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send({ message: "GET single user Successfully!", data: id });
  } catch (error) {
    console.log(error.message);
  }
});

// UPDATED user
app.put("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send({ message: "Update single user Successfully!", data: id });
  } catch (error) {
    console.log(error.message);
  }
});

// DELETED user
app.put("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send({ message: "Delete single user Successfully!", data: id });
  } catch (error) {
    console.log(error.message);
  }
});
