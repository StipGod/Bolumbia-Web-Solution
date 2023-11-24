require('dotenv').config();

const { Pool } = require('pg');


const pool = new Pool({
  user: "vedyyssl",
  host: "bubble.db.elephantsql.com",
  database: "vedyyssl",
  password: "jySsogaolt2FjZXCjGKxLbyy9YfVueSo",
  port: "5432"
});

module.exports = pool;
