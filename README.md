# Employee-Tracker

## Table of Contents

- [Description](#project-description)
- [Installation](#installation)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Project Description

The application simplifies business owners' management of departments, roles, and employees. MySQL and sequelize power the database, allowing JavaScript interaction. Skills acquired include MySQL and sequelize database seeding, table joining, and data access.

### Licensing

MIT

[![Generic badge](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/.)

### Demo

![Demo](https://drive.google.com/file/d/12bWY2qpYWZ2UtAFG7Wfp_q9sg8caysP6/view)

## Installation

1. Clone the repository: git clone git@github.com:walker-logan/Employee-Tracker.git.
2. Install Node.js v16 by using the terminal. For example, with Homebrew, run brew install node@16 (commands may vary, refer to documentation).
3. Initialize a package.json file by running npm init -y in the terminal.
4. Install the application dependencies by running npm i in the terminal. Install each dependency individually using the respective commands: npm i sequelize, npm i mysql2, npm i dotenv, npm i inquirer@8.2.4, npm i chalk.
5. Create the database by navigating to the "db" directory and running the command source schema.sql in the MySQL shell. Then, seed the database by running the appropriate files from the "seeds" folder, such as node ./seeds/departments, node ./seeds/roles, node ./seeds/employees, from the root directory. Finally, run npm start from the root directory to launch the application.

## Contribution

Always open to collaborate. Just make the changes you want and push them to a feature branch and wait for approval.

## Testing

No tests at this time.

## Questions

Reach out to the repo owner, [walker-logan](https://github.com/walker-logan) at walker.logan44@gmail.com.
