const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var teamMembers = [];

const generateHtml = require('./util/generateHtml')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function compileEmployees(){
    function addNewEmployee(){
        inquirer.prompt ([
            {
                name: "employeeType",
                message: "Which type of role are you adding to the team? Or do you want to generate your HTML file?",
                type: "list",
                choices: ["Engineer","Intern","Manager","None, please generate my HTML file!"]
            }]).then(function(userInput){
                switch(userInput.addNewEmployeePrompt){
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    case "Manager":
                        addManager();
                    default:
                        HTMLOutput();     
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
        compileEmployees();
    });
}

 function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      compileEmployees();
    });

  }

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    compileEmployees();
  });

}

// function htmlOutput () {
// fs.writeFileSync(outputPath, generateHtml(teamMembers), "UTF-8")

// }

// compileEmployees();

// }

// compileEmployees();

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

// compileEmployees();