// Welcome title text called on init
function displayTitleText() {
  console.log('\u001b[32m', `
  ===================================================
  =                                                 =
  =          WELCOME TO THE EMPLOYEE DB             =
  =                                                 =
  ===================================================
  `);
};

// Goodbye text called when application exits
function displayExitText() {
  console.log('\u001b[32m', `
  ===================================================
  =                                                 =
  =        THANK YOU FOR USING EMPLOYEE DB          =
  =              HAVE A GREAT DAY!                  =
  =                                                 =
  ===================================================
  `);
};

module.exports = { displayTitleText, displayExitText };
