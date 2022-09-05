const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path');

const Engineer = require('./Develop/team-profile/lib/Engineer');
const Intern = require('./Develop/team-profile/lib/Intern');
const Manager = require('./Develop/team-profile/lib/Manager');

const teamMembers =[];

const generateHTML = require('./Develop/team-profile/util/generateHtml')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function createTeam(){
    function addEmployee(){
        inquirer.prompt ([
            {
                name: "name",
                message: "What is the team manager's name?",
                type: "input"
            },
            {
                name: "id",
                message: "What is their employee id?",
                type: "input"
            },
            {
                name: "email",
                message: "What is their email address?",
                type: "input"
            },
            {
                name: "role",
                message: "What is their role?",
                type: "list",
                chocies : [
                    "Engineer",
                    "Intern",
                    "Manager"
                ]
            },
    ]).then(function({name, id, email, role}){
        let employeeDetail = "";
        if  (role === "Engineer") {
            employeeDetail = "GitHub username";
        } else if (role === "Intern") {
            employeeDetail = "school name";
        } else if (role === "Manager"){
            employeeDetail = "office phone number";
        }
        inquirer.prompt([{ 
            name: "employeeDetail",
            message: `What is their ${employeeDetail}?`,
            type: "input"
        },
        {
            name: "addEmployee",
            message: "Add another employee to the team?",
            chocies : [
                "Yes!",
                "No thank you"
            ]
        }]).then(function({employeeDetail, addEmployee}){
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, employeeDetail);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, employeeDetail);
            } else {
                newEmployee = new Manager(name, id, email, employeeDetail);
            }


/// i think the issue is here

            employees.push(newEmployee);
            generateHTML(newEmployee)
            .then(function() {
                if (moreMembers === "yes") {
                    addEmployee();
                } else {
            (answers => {fs.writeFile(`./output/team-${answers.Manager.name}.html`, generateHTML, (err) => err ? console.error(err) : console.log('success!'));
            })
            }
        })
    })
    
}}

// const writeFile = data => {
//     fs.writeFile('./util/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//  
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     }))


function fileBuilder () {
    fs.writeFileSync(outputPath, generateTeam(teamArray))}
    addEmployee();
}

createTeam();