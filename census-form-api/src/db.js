require('dotenv').config();

const { Pool } = require('pg');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "newcensus",
  password: "Esteban12003",
  port: "5432"
});

module.exports = pool;