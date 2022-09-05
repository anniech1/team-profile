const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

teamMembers = [];

const generateHtml = require('./util/generateHtml')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function teamGenerator(){
    function addNewEmployee(){
        inquirer.prompt ([
            {
                name: "employeeType",
                message: "Which type of role are you adding to the team? Or do you want to generate your HTML file?",
                type: "list",
                choices: ["Engineer","Intern","Manager","None, please generate my HTML file!"]
            }]).then(function(userInput){
                switch(userInput.employeeType){
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    case "Manager":
                        addManager();
                    default:
                        htmlOutput();     
                }
            }
        )
    }

    function addEngineer() {
    inquirer.prompt([
      
      {
        name: "engName",
        type: "input",
        message: "What is their name?"
      },

      {
        name: "engId",
        type: "input",
        message: "What is their ID number?" 
      },

      {
        name: "engEmail",
        type: "input",
        message: "What is their email address?"
      },

      {
        name: "engGithub",
        type: "input",
        message: "What is their GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
        teamMembers.push(engineer);
        // ask if this section is what's causing the error
        addNewEmployee();
    });
    }

    function addIntern() {
    inquirer.prompt([
      
      {
        name: "internName",
        type: "input",
        message: "What is their name?"
      },

      {
        name: "internId",
        type: "input",
        message: "What is their ID number?" 
      },

      {
        name: "internEmail",
        type: "input",
        message: "What is their email address?"
      },

      {
        name: "internSchool",
        type: "input",
        message: "What school do they go to?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      addNewEmployee();
    });

  }

    function addManager() {
    inquirer.prompt ([
    
    {
      name: "managerName",
      type: "input",
      message: "What is their name?"
    },

    {
      name: "managerId",
      type: "input",
      message: "What is their ID number?"
    },

    {
      name: "managerEmail",
      type: "input",
      message: "What is their email address?"
    },

    {
      name: "managerOfficeNumber",
      type: "input",
      message: "What is their office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    addNewEmployee();
  });
    }


// ask if this might also be the section that's causing it

// const writeFile = data => {
//     fs.writeFile('./util/generateHtml.js', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//  
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     }))

// function fileBuilder () {
//     fs.writeFileSync(outputPath, generateTeam(teamMembers))}
//     addNewEmployee();

// teamGenerator();

function htmlOutput () {
    fs.writeFileSync(outputPath, generateHtml(teamMembers), "UTF-8")}
    addNewEmployee();
}

teamGenerator();