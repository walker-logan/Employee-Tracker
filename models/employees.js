const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Employee extends Model {}

// defines model fields
const EmployeeFields = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Role",
      key: "id",
    },
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
};

Employee.init(EmployeeFields, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Employee",
});

module.exports = Employee;
