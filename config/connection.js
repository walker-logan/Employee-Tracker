const mysql = require('mysql2');
require('dotenv').config();

// Establish a secure connection to the MySQL database using environment variables
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  

// Confirm the successful connection to the database with a yellow console log message
console.log('\u001b[33m', 'Connected to the employee_db database ✔');

// Export the database connection for external use
module.exports = db;
