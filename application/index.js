// THEN my default email program opens and populates the TO field of the email with the address

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generate')

const questions = [
    {
        type: 'input',
        message: "Please enter the name of the employee",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the employee's ID",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the email address for the employee?",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter your team manager's office number",
        name: 'officenumber',
        when: () => role === 'Manager',
    },
    {
        type: 'input',
        message: "Please enter your engineer's github username",
        name: 'github',
        when: () => role === 'Engineer',
    },
    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'school',
        when: () => role === 'Intern',
    },
    {
        type: 'list',
        message: "Would you like to add another team member?",
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'No more members to be added',
        ],
    },
];

// In readme it states only one manager, not allowing for another manager role later on
// set to manager initially and change it after first submission to engineer or intern
let role = 'Manager';

// to inform people that they must start with the managers information first as according to acceptance criteria
console.log("Please enter your team manager's information first");

const employees = [];
const outputLocation = path.join(__dirname,'dist','team.html')

async function teamMembers (){
    const answers = await inquirer.prompt(questions);

    // push object to array to be generated at a later point
    if(role === 'Manager'){
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officenumber))
    }
    
    if(role === 'Engineer'){
        employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
    }
    
    if(role === 'Intern'){
        employees.push(new Intern(answers.name, answers.id, answers.email, answers.school))
    }

    role = answers.role;
    
    // run generatehtml() before writing to new html
    if(answers.role === 'No more members to be added'){
        const html = generateHTML(employees)
        fs.writeFileSync(outputLocation, html, 'utf-8')
    } else {
        await teamMembers();
    }
    
}

// initialise
teamMembers();

