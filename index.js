const inquirer = require('inquirer');
const fs = require('fs');

// Require employee data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create an empty array list to store employee objects
const teamData = [];

// Gather manager data
const addManager = () => {
    // inquirer.prompt()
    return inquirer.prompt ([
        // THEN Build a manager object
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
}


// Gather Engineer data

    // inquirer.prompt()

    // THEN Build an engineer object

// Gather intern data

    // inquirer.prompt()

    // THEN Build an intern object

// Ask for which team member they want to add, or are they done

    // inquirer.prompt()

    // THEN deciding which function to call

// Generate the HTML and write it to ad file