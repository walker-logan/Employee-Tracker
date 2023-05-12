const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/specialText.js');
const selectTask = require('./lib/selectTask.js');

// Connect to the database and handle any errors or start application
db.connect(err => {
    if (err) throw err;
    init();
});

// Start the application, show title special-text and present task list prompt (using 'selectTask')
const init = () => {
    displayTitleText();
    selectTask();
};
