const inquirer = require("inquirer");
const fs = require('fs'); 

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./util/generateHtml')

const addManager = ()=>{
    return inquirer.prompt (
        {
            name: "name",
            message: "What is the team manager's name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is the team manager's id?",
            type: "input"
        },
        {
            name: "name",
            message: "What is the team manager's id?",
            type: "input"
        },
        {
            name: "name",
            message: "What is the team manager's id?",
            type: "input"
        },
    )
}.then(answers => {
    fs.writeFile(`./output/team-${answers.Manager.name}.html`, generateHTML, (err) => err ? console.error(err) : console.log('success!'));
})