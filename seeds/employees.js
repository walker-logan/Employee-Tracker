const sequelize = require("../connection");
const Employee = require("../models/employees");

const employeesSeedData = require("./employeesSeedData.json");

const seedEmployeeData = async () => {
  try {
    await sequelize.sync({ force: true });

    const employees = await Employee.bulkCreate(employeesSeedData);

    console.log("Seeding success!");
    process.exit(0);

  } catch (error) {
    console.error("Seeding failed: ", error);
    process.exit(1);
  }
};

seedEmployeeData();
