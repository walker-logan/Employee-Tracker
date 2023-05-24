const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Role extends Model {}

// defines model fields
const RoleFields = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.DECIMAL,
  },
  department_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Department",
      key: "id",
    },
  },
};

Role.init(RoleFields, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Role",
});

module.exports = Role;
