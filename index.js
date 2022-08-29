const inquirer = require('inquirer');
const fs = require('fs');

// Require employee data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Require generateHTML file
const generateHTML = require('./src/generateHTML');

// Create an empty array list to store employee objects
const teamData = [];

// Gather manager data
const addManager = () => {
    // inquirer.prompt()
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    // THEN Build a manager object
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        
        teamData.push(manager);
    })
};

const addTeamMember = () => {
    console.log('Adding team members');
    
    return inquirer.prompt ([
        {
            // Ask for which team member they want to add
            type: 'list',
            name: 'role',
            message: "What role will the employee be filling?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            // Gather Engineer data
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
            when: (input) => input.role === "Engineer"
        },
        {
            // Gather intern data
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            when: (input) => input.role === "Intern"
        },
        {
            //Ask if they're done adding employees
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Would you like to add another employee?'
        }
    ])
    // THEN Build an engineer object
    // THEN Build an intern object
    .then(employeeData => {
        let {name, id, email, role, github, school, additionalEmployee} = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        teamData.push(employee);

        if (additionalEmployee) {
            return addTeamMember(teamData);
        } else {
            return teamData;
        }
    })
};

    // THEN deciding which function to call

// Generate the HTML and write it to ad file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
        console.log("File created.")
        }
    })
};

addManager()
    .then(addTeamMember)
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then (pageHTML => {
        return writeFile(pageHTML);
    });