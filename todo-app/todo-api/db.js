const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "sani6699p",
  database: "todo-app",
});

module.exports = pool;
