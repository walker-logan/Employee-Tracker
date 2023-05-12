const db = require('../config/connection.js');
const selectTask = require('./selectTask.js');

function addDepartment(response) {
    const query = `INSERT INTO department (name) VALUES (?);`;
    db.query(query, response.department, (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `${response.department} department added!`);
        selectTask();
    });
}

function addRole(response) {
    const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`;
    db.query(query, [response.roleTitle, response.roleSalary, response.roleDepartment], (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `${response.roleTitle} role added!`);
        selectTask();
    });
}

function addEmployee(response) {
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`;
    db.query(query, [response.employeeFirstName, response.employeeLastName, response.employeeRole, response.employeeManager], (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `Employee ${response.employeeFirstName} ${response.employeeLastName} added!`);
        selectTask();
    });
}

module.exports = { addDepartment, addRole, addEmployee };
