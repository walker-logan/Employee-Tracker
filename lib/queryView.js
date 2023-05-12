const db = require('../config/connection.js');
const selectTask = require('./selectTask.js');

// functions for all ***VIEW*** SQL queries

function viewDepartments() {
    const query = `SELECT department.id AS department_id, department.name AS department_name FROM department;`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        selectTask();
    });
};

function viewRoles() {
    const query = `
        SELECT role.title AS job_title, 
            role.id AS role_id, 
            department.name AS department, 
            role.salary 
        FROM role 
        INNER JOIN department ON role.department_id = department.id;
    `;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        selectTask();
    });
};

function viewEmployees() {
    const query = `
        SELECT employee.id AS employee_id, 
            employee.first_name, 
            employee.last_name, 
            role.title AS job_title, 
            department.name AS department, 
            role.salary AS salary, 
            CONCAT(manager.first_name, SPACE(1), manager.last_name) AS manager_name 
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        selectTask();
    });
};

module.exports = { viewDepartments, viewRoles, viewEmployees };
