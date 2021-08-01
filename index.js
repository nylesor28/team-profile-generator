const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const {isValidNumber, isValidEmail} = require('./utils/validation');

//const generatePage = require("./src/page-template");
//let employeeData;

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
        validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a valid manager name!");
              return false;
            }
          }
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id? (Required)",
        validate: (idInput) => {
            if (isValidNumber(idInput)) {
              return true;
            } else {
              console.log("Please enter a valid managers's id!");

              return false;
            }
          },
          filter: (answer)=>{
            answer.id =""
          }
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
        validate: (emailInput) => {
            if (isValidEmail(emailInput)) {
              return true;
            } else {
              console.log("Please enter a valid managers's email!");
              return false;
            }
          }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: (officeNumberInput) => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log("Please enter a valid manager name!");
              return false;
            }
          }
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
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a valid manager name!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "id",
              message: "What is the engineer's id? (Required)",
              validate: (idInput) => {
                if (isValidNumber(idInput)) {
                  return true;
                } else {
                  console.log("Please enter a valid engineer's id!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "email",
              message: "What is the engineer's email? (Required)",
              validate: (emailInput) => {
                if (isValidEmail(emailInput)) {
                  return true;
                } else {
                  console.log("Please enter a valid engineer's email!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "githubName",
              message: "What is the engineer's github username? (Required)",
              validate: (userNameInput) => {
                if (userNameInput) {
                  return true;
                } else {
                  console.log("Please enter Github Username!");
                }
              }
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
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a valid intern's name!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's id? (Required)",
              validate: (idInput) => {
                if (isValidNumber(idInput)) {
                  return true;
                } else {
                  console.log("Please enter a valid intern's id!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email? (Required)",
              validate: (emailInput) => {
                if (isValidEmail(emailInput)) {
                  return true;
                } else {
                  console.log("Please enter a valid intern's email!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "school",
              message: "What school does the intern go to? (Required)",
              validate: (schoolInput) => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter a valid School!");
                  return false;
                }
              }
            }
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
