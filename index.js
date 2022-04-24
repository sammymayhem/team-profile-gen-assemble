const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const template = require('./src/template');
const savedTeam = './dist/teamAssembled.html';

const dreamTeam = [];

function makeTeam() {
    // function empManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team Captain's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Captains's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Captain's email?"
        },
        {
            type: 'input',
            name: 'managersOfficeNumber',
            message: "What is the Captain's office number?"
        },
    ])
        .then((answers) => {
            const manager = new Manager(
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
            message: "would you like to add another hero?",
            choices: [
                "Engineer",
                "Intern",
                "Assemble my team!",
            ]
        }
    ])
        .then(empChoice => {
            switch (empChoice.nextEmployee) {
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
    function getEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engName',
                message: "What is your super engineer's name?"
            },
            {
                type: 'input',
                name: 'engId',
                message: "What is your engineer's id number?"
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "What is your engineer's email address?"
            },
            {
                type: 'input',
                name: 'engGithub',
                message: "What is your engineer's GitHub username?",
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engName,
                answers.engId,
                answers.engEmail,
                answers.engGithub,
            );
            dreamTeam.push(engineer);
            nextEmp();
        });
    }

    function getIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intName',
                message: "What is your agent intern's name?"
            },
            {
                type: 'input',
                name: 'intId',
                message: "What is your intern's id number?"
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "What is your intern's email address?"
            },
            {
                type: 'input',
                name: 'intSchool',
                message: "What is your intern's school name?",
            }
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.intName,
                answers.intId,
                answers.intEmail,
                answers.intGithub,
            );
            dreamTeam.push(intern);
            nextEmp();
        });
    }
}
// };

makeTeam();