const queryAdd = require('./queryAdd');
const queryView = require('./queryView');
const queryUpdate = require('./queryUpdate');

function handleTask(response) {
    switch(response.task) {
        case 'View all departments':
            queryView.viewDepartments();
            break;
        case 'View all roles':
            queryView.viewRoles();
            break;
        case 'View all employees':
            queryView.viewEmployees();
            break;
        case 'Add a department':
            queryAdd.addDepartment(response.department);
            break;
        case 'Add a role':
            queryAdd.addRole(response.roleTitle, response.roleSalary, response.roleDepartment);
            break;
        case 'Add an employee':
            queryAdd.addEmployee(response.employeeFirstName, response.employeeLastName, response.employeeRole, response.employeeManager);
            break;
        case 'Update an employee role':
            queryUpdate.updateEmployeeRole(response.updateEmployee, response.updateRole);
            break;
        case 'EXIT':
            process.exit();
            break;
        default:
            console.log(`Invalid action: ${response.task}`);
            break;
    }
};

module.exports = handleTask;
