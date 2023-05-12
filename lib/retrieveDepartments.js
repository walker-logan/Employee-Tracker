const db = require('../config/connection.js');

async function retrieveDepartments(response) {
    let departmentList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM department
    `).then( ([rows]) => {
        departmentList = rows.map(department => {
            return {
                name: department.name,
                value: department.id
            }
        })
        return departmentList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveDepartments;
