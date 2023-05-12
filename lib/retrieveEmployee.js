const db = require('../config/connection.js');

// Called in prompts.js to present user with current EMPLOYEE options
async function retrieveEmployees() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM employee`);

        // Map each row to an object for use in inquirer prompts
        const employeeList = rows.map(({ first_name, last_name, id }) => ({
            name: `${first_name} ${last_name}`,
            value: id,
        }));

        // Add a 'NONE' option
        employeeList.push({ name: 'NONE', value: 0 });

        return employeeList;
    } catch (err) {
        console.error(err);
        return []; // return empty list on error
    }
}

module.exports = retrieveEmployees;
