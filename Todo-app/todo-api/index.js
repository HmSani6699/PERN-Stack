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
  } catch (error) {
    console.log(error.message);
  }
});
