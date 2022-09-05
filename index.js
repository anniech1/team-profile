const inquirer = require("inquirer");
const fs = require('fs'); 

const Engineer = require('./Develop/team-profile/lib/Engineer');
const Intern = require('./Develop/team-profile/lib/Intern');
const Manager = require('./Develop/team-profile/lib/Manager');

const generateHTML = require('./Develop/team-profile/util/generateHtml')


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
            name: "officeNumber",
            message: "What is their office number?",
            type: "input"
        },
 ]).then(answers => {
        fs.writeFile(`./output/team-${answers.Manager.name}.html`, generateHTML, (err) => err ? console.error(err) : console.log('success!'));
    })
    



// const writeFile = data => {
//     fs.writeFile('./util/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//  
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// }; 
