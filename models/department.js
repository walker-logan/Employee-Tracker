const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Department extends Model {}

// defines model fields
const DepartmentFields = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

Department.init(DepartmentFields, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Department",
});

module.exports = Department;
