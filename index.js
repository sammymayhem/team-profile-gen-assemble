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
    ])
    .then((answers) => {
        const manager = new Manager (
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber,
        );
        dreamTeam.push(manager);
        nextEmp();
    });
}

function nextEmp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextEmployee',
            message: "would you like to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "Assemble my team!",
            ]
        }
    ])
    .then(empChoice => {
        switch(empChoice.nextEmployee) {
            case "Engineer":
                getEngineer();
                break;
            case "Intern":
                getIntern();
                break;
            default:
                teamHTML();
        }
    });
}