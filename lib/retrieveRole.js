const db = require('../config/connection.js');

async function retrieveRoles() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM role`);

        // Map each row to an object for use in inquirer prompts
        const roleList = rows.map(({ title, id }) => ({
            name: title,
            value: id,
        }));

        return roleList;
    } catch (err) {
        console.error(err);
        return []; // return empty list on error
    }
}

module.exports = retrieveRoles;
