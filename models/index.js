const Department = require("./departments.js")
const Role = require("./roles.js");
const Employee = require("./employees.js");

Role.belongsTo(Department, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

Department.hasMany(Role, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

Employee.belongsTo(Role, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

Role.hasMany(Employee, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

Employee.belongsTo(Employee, {
  as: "Manager",
  foreignKey: "manager_id",
  onDelete: "CASCADE",
});

Employee.hasMany(Employee, {
  as: "Subordinates",
  foreignKey: "manager_id",
  onDelete: "CASCADE",
});

module.exports = { Department, Role, Employee }
