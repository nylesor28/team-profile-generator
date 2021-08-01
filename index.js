const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

//const generatePage = require("./src/page-template");
//let employeeData;

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id? (Required)",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
      },
    ])
    .then((managerData) => {
      return managerData;
    });
};

const promptTeamMembers = (teamData) => {
  if (!teamData.engineerData) {
    teamData.engineerData = [];
  }
  if (!teamData.internData) {
    teamData.internData = [];
  }

 // console.log("promptTeamMembers: ", teamData);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Add Team Member or exit",
        choices: ["Add Engineer", "Add Intern", "Exit"],
      },
    ])
    .then((choice) => {
      response = choice.option;

      if (response === "Add Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the engineer's name? (Required)",
            },
            {
              type: "input",
              name: "id",
              message: "What is the engineer's id? (Required)",
            },
            {
              type: "input",
              name: "email",
              message: "What is the engineer's email? (Required)",
            },
            {
              type: "input",
              name: "githubName",
              message: "What is the engineer's github username? (Required)",
            }
          ])
          .then( (engData) => {
            teamData.engineerData.push(engData);
            return promptTeamMembers(teamData);
          });
      } else if (response === "Add Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name? (Required)",
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's id? (Required)",
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email? (Required)",
            },
            {
              type: "input",
              name: "school",
              message: "What school does the intern go to? (Required)",
            },
          ])
          .then((internData) => {
            teamData.internData.push(internData);
            return promptTeamMembers(teamData);
          });

      } else {
        return teamData;
      }
    });
};

promptManager()
  .then((managerData) => {
    let employeeData = {};
    employeeData.manager = managerData;
    return employeeData;
  })
  .then((data) => {
   return employeeData = promptTeamMembers(data); 
  })
// .then((teammatesData)=>{
//     console.log(employeeData)
//    employeeData.engineerData = teammatesData.engineerData
//    employeeData.internData = teammatesData.internData
//    console.log(employeeData)
// })
