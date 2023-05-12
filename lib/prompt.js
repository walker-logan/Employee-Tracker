// Importing required modules
const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');

// Function to create a common prompt structure
const makePrompt = (name, type, message, whenTask, validateEmpty = true) => ({
    name,
    type,
    message,
    when: (response) => response.task === whenTask,
    validate: validateEmpty ? (response) => response !== "" || '\n Try again' : undefined,
});

const prompts = [
    // Main task selection prompt
    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT'],
    },
    // Add a department prompt
    makePrompt("department", "input", "ENTER NEW DEPARTMENT NAME:", 'Add a department'),
    // Add a role prompts
    makePrompt("roleTitle", "input", "ENTER NEW ROLE TITLE:", 'Add a role'),
    makePrompt("roleSalary", "input", "ENTER ROLE SALARY:", 'Add a role'),
    {
        ...makePrompt("roleDepartment", "list", "SELECT ROLE DEPARTMENT:", 'Add a role', false),
        choices: retrieveDepartments,  // Add choices for selecting department
    },
    // Add an employee prompts
    makePrompt("employeeFirstName", "input", "ENTER FIRST NAME:", 'Add an employee'),
    makePrompt("employeeLastName", "input", "ENTER LAST NAME:", 'Add an employee'),
    {
        ...makePrompt("employeeRole", "list", "SELECT EMPLOYEE ROLE:", 'Add an employee', false),
        choices: retrieveRole,  // Add choices for selecting role
    },
    {
        ...makePrompt("employeeManager", "list", "SELECT EMPLOYEE MANAGER:", 'Add an employee', false),
        choices: retrieveEmployee,  // Add choices for selecting manager
    },
    // Update an employee role prompts
    {
        ...makePrompt("updateEmployee", "list", "SELECT EMPLOYEE:", 'Update an employee role', false),
        choices: retrieveEmployee,  // Add choices for selecting employee
    },
    {
        ...makePrompt("updateRole", "list", "SELECT NEW ROLE:", 'Update an employee role', false),
        choices: retrieveRole,  // Add choices for selecting new role
    },
];

module.exports = prompts;
