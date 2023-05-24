const Department = require("./department.js")
const Role = require("./role.js");
const Employee = require("./employee.js");

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
