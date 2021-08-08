const inquirer = require("inquirer");
const fs = require("fs");

const generatePage = require("./src/page-template");
const { isValidNumber, isValidEmail } = require("./utils/validation");
const { writeFile, copyFile } = require("./utils/generate-site");
const { parse } = require("path");

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
            console.log("Please enter a valid  name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id? (Required)",

        validate: (idInput) =>(
          idInput === "" || !isValidNumber(idInput)
            ? " Please enter a valid number greater than 0."
            : true),
        filter: (idInput) => (!isValidNumber(idInput) ? "" : idInput),
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
        validate: (emailInput) => (
          // if (isValidEmail(emailInput)) {
          //   return true;
          // } else {
          //   console.log("Please enter a valid email format!");
          //   emailInput = "";
          //   return false;
          // }
          (!isValidEmail(emailInput)) ? " Please enter a valid email format." : true
        ),
        filter: (emailInput) => (!isValidEmail(emailInput) ? "" : emailInput)
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: (officeNumberInput) =>
          officeNumberInput === "" || !isValidNumber(officeNumberInput)
            ? " Please enter a valid number greater than 0."
            : true,
        filter: (officeNumberInput) =>
          !isValidNumber(officeNumberInput) ? "" : officeNumberInput,
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
                  console.log("Please enter a valid name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is the engineer's id? (Required)",
              validate: (idInput) =>
                idInput === "" || !isValidNumber(idInput)
                  ? " Please enter a valid number greater than 0."
                  : true,
              filter: (idInput) => (!isValidNumber(idInput) ? "" : idInput),
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
              },
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
              },
            },
          ])
          .then((engData) => {
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
                  console.log("Please enter a valid  name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's id? (Required)",
              validate: (idInput) =>
                idInput === "" || !isValidNumber(idInput)
                  ? " Please enter a valid number greater than 0."
                  : true,
              filter: (idInput) => (!isValidNumber(idInput) ? "" : idInput),
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
              },
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
              },
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

getmockData = () => {
  const mockData = `
{
  "manager": {
    "name": "Tim Manager",
    "id": "1",
    "email": "tim@email.com",
    "officeNumber": "1"
  },
  "engineerData": [
    {
      "name": "Sue Engineer",
      "id": "2",
      "email": "sue@email.com",
      "githubName": "facebook"
    },
    {
      "name": "Bernie Engineer",
      "id": "3",
      "email": "bernie@email.com",
      "githubName": "react"
    }
  ],
  "internData": [
    {
      "name": "Jason Intern",
      "id": "4",
      "email": "jason@email.com",
      "school": "NYU"
    },
    {
      "name": "Rina Intern",
      "id": "5",
      "email": "rina@email.com",
      "school": "Columbia University"
    }
  ]
}
`;
  return JSON.parse(mockData);
 };
promptManager()
  .then((managerData) => {
    let employeeData = {};
    employeeData.manager = managerData;
    return employeeData;
  })
  .then((data) => {
   return employeeData = promptTeamMembers(data);
  }).then((employeeData)=>{
  //  console.log(employeeData)
    return generatePage(employeeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
   // console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log("Process Complete");
  })
  .catch(err => {
    console.log(err);
  });

// promptManager()
//   .then((managerData) => {
//     return getmockData();
//   })

//   .then((data) => {
//     //  console.log(employeeData)
//     return generatePage(data);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .then((writeFileResponse) => {
//     // console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log("Process Complete");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
