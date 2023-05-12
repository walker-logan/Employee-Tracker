const mysql = require('mysql2');
require('dotenv').config();

// Establish a secure connection to the MySQL database using environment variables
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'employee_db'
});

// Confirm the successful connection to the database with a yellow console log message
console.log('\u001b[33m', 'Connected to the employee_db database ✔');

// Export the database connection for external use
module.exports = db;
