// const express = require("express");
// const app = express();
// const cros = require("cors");
// const PORT = 4000;
// const pool = require("./db");

// //  middleweare
// app.use(express.json());
// app.use(cros());

// app.listen(PORT, () => {
//   console.log(`Server is running on https//localhost:${PORT}`);
// });

// // POST a single user
// app.post("/createUser", async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     const getAllUsers = await pool.query("SELECT * FROM users");
//     const filterUser = getAllUsers.rows.find((item) => item?.email === email);

//     if (filterUser) {
//       res.send({ message: "user has been already created !" });
//       return;
//     }

//     const cretedUser = await pool.query(
//       "INSERT INTO users VALUES ($1,$2) RETURNING *",
//       [name, email]
//     );

//     res.send({
//       message: "User crated successfully!",
//       data: cretedUser.rows,
//     });
//   } catch (error) {
//     res.send({
//       error: error.message,
//     });
//   }
// });

// // GET all users
// app.get("/getAllUsers", async (req, res) => {
//   try {
//     const getAllUsers = await pool.query("SELECT * FROM users");
//     res.send({
//       message: "GET all users Successfully!",
//       data: getAllUsers.rows,
//     });
//   } catch (error) {
//     res.send({
//       error: error.message,
//     });
//   }
// });

// // GET a single  user
// app.get("/getUser/:name", async (req, res) => {
//   try {
//     const { name } = req.params;

//     const getSingleUser = await pool.query(
//       "SELECT * FROM users WHERE name=$1",
//       [name]
//     );

//     res.send({
//       message: "GET single user Successfully!",
//       data: getSingleUser.rows,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// // UPDATED user
// app.put("/updateUser/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const updateUser = await pool.query(
//       "UPDATE users SET  name=$1 , email=$2 WHERE name=$3",
//       [name, email, id]
//     );

//     console.log(updateUser);

//     res.send({
//       message: "Update single user Successfully!",
//       data: updateUser.rows,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// // DELETED user
// app.put("/deleteUser/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send({ message: "Delete single user Successfully!", data: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

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
    const { name, email, phone, description } = req.body;
    const id = uuidv4();

    const getAllUsers = await pool.query("SELECT * FROM users");
    const filterUser = getAllUsers.rows.find((item) => item.email === email);

    console.log(filterUser);

    if (filterUser) {
      res.status(500).json({
        message: `User has been allready created!`,
      });
      return;
    }

    // Inserting user data in to database
    const newUser = await pool.query(
      "INSERT INTO users VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [id, name, phone, email, description]
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
    const { name, email, phone, description } = req.body;

    console.log(69, req.body);

    // updating user data in the database
    const updateUser = await pool.query(
      "UPDATE users SET name=$1, phone=$2, email=$3, description=$4 WHERE id=$5",
      [name, phone, email, description, id]
    );

    console.log(updateUser);

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
