const sequelize = require("../connection");
const Department = require("../Models/department");

const departmentsSeedData = require("./departmentsSeedData.json");

const seedDepartmentData = async () => {
  try {
    await sequelize.sync({ force: true });

    const departments = await Department.bulkCreate(departmentsSeedData);

    console.log("Seeding success!");
    process.exit(0);

  } catch (error) {
    console.error("Seeding failed: ", error);
    process.exit(1);
  }
};

seedDepartmentData();
