// Importing necessary dependencies and models
const { Department, Role, Employee } = require("./models");
const sequelize = require("./connection");
const inquirer = require("inquirer");

// Syncing the database with created models
sequelize.sync({ force: false }).then(() => {
  options();
});

// Function to prompt the user with different options to navigate the database
function options() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
        name: "employeeTracker",
      },
    ])
    .then((answer) => {
      // Executes appropriate function based on user choice
      const actionMap = {
        "View All Departments": viewAllDepartments,
        "View All Roles": viewAllRoles,
        "View All Employees": viewAllEmployees,
        "Add Department": addDepartment,
        "Add Role": addRole,
        "Add Employee": addEmployee,
        "Update Employee Role": updateEmployeeRole,
      };
      actionMap[answer.employeeTracker]();
    });
}

// --- VIEW FUNCTIONS ---

// Function to view all departments
async function viewAllDepartments() {
  const departments = await Department.findAll({ raw: true });
  console.table(departments);
  options();
}

// Function to view all roles
async function viewAllRoles() {
  const roles = await Role.findAll({
    raw: true,
    include: [{ model: Department }],
  });
  console.table(roles);
  options();
}

// Function to view all employees
async function viewAllEmployees() {
  const employees = await Employee.findAll({
    raw: true,
    include: [{ model: Role, include: [{ model: Department }] }],
  });
  console.table(employees);
  options();
}

// --- ADD FUNCTIONS ---

// Function to add a new department
async function addDepartment() {
  const department = await inquirer.prompt([
    { type: "input", message: "What would you like to name the department?", name: "name" },
  ]);
  await Department.create(department);
  options();
}

// Function to add a new role
async function addRole() {
  const dbDepartments = await Department.findAll({
    attributes: [["id", "value"], ["name", "name"]],
  });
  const departments = dbDepartments.map(department => department.get({plain:true})) 
  // console.log(departments)
  // console.log(dbDepartments)
  const role = await inquirer.prompt([
    { type: "input", message: "What is the name of the role?", name: "title" },
    { type: "input", message: "What would you like the salary to be?", name: "salary" },
    { type: "list", message: "What department would you like to add this new role to?", name: "department_id", choices: departments },
  ]);
  await Role.create(role);
  options();
}

// Function to add a new employee
async function addEmployee() {
  const dbRoles = await Role.findAll({ attributes: [["id", "value"], ["title", "name"]] });
  const dbManagers = await Employee.findAll({ attributes: [["id", "value"], ["first_name", "name"], ["last_name", "lastName"]] });
  const managers = dbRoles.map(managers => managers.get({plain:true}))
  const roles = dbRoles.map(role => role.get({plain:true}))
  const employee = await inquirer.prompt([
    { type: "input", message: "What is the first name of the new employee?", name: "first_name" },
    { type: "input", message: "What is the last name of the new employee?", name: "last_name" },
    { type: "list", message: "What is the role of the new employee?", name: "role_id", choices: roles },
    { type: "list", message: "Who is the manager of the new employee?", name: "manager_id", choices: managers },
  ]);
  await Employee.create(employee);
  options();
}

// --- UPDATE FUNCTION ---

// Function to update the role of an existing employee
async function updateEmployeeRole() {
  const employees = await Employee.findAll({ attributes: [["id", "value"], ["first_name", "name"], ["last_name", "lastName"]] });
  const roles = await Role.findAll({ attributes: [["id", "value"], ["title", "name"]] });
  const update = await inquirer.prompt([
    { type: "list", message: "Which employee's role do you want to update?", name: "id", choices: employees },
    { type: "list", message: "What is the new role of the employee?", name: "role_id", choices: roles },
  ]);
  await Employee.update(update, { where: { id: update.id } });
  options();
}
