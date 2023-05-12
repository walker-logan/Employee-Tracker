const db = require('../config/connection.js');
const selectTask = require('./selectTask.js');

const updateEmployeeRole = async (response) => {
    try {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [response.updateRole, response.updateEmployee];
        
        // Promise based approach
        const [rows, fields] = await db.promise().query(sql, params);
        
        console.log('\u001b[36;1m', `Employee role updated!`);
        selectTask();
    } catch(err) {
        console.error(err);
    }
};

module.exports = updateEmployeeRole;
