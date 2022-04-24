const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

const template = require('./src/template');
const savedTeam = './dist/teamAssembled.html';

const dreamTeam = [];

function empManager(manager) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: 'managersOfficeNumber',
            message: "What is the Manager's office number?"
        },
    ]);
}
empManager();