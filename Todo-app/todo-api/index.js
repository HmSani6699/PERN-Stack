const express = require("express");
const app = express();
const cros = require("cors");
const PORT = 4000;

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
    console.log(name, email);
    res.send({ message: "User crated successfully!" });
  } catch (error) {
    console.log(error.message);
  }
});

// GET all users
app.get("/getAllUsers", async (req, res) => {
  try {
    const getAllUsers = {
      name: "sadiq",
      email: "sadi@gmail.com",
    };
    res.send({ message: "GET all users Successfully!", data: getAllUsers });
  } catch (error) {
    console.log(error.message);
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
