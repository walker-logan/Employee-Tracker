const sequelize = require("../connection");
const Role = require("../Models/role");

const rolesSeedData = require("./rolesSeedData.json");

const seedRoleData = async () => {
  try {
    await sequelize.sync({ force: true });

    const roles = await Role.bulkCreate(rolesSeedData);

    console.log("Seeding success!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed: ", error);
    process.exit(1);
  }
};

seedRoleData();
