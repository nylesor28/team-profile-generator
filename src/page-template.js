const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

generateManager = (manParm) => {

  const manager = new Manager(
    manParm.name,
    manParm.id,
    manParm.email,
    manParm.officeNumber
  );

  return `
  <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary">
          <p> ${manager.getName()} </p>
          <p><i class="fas fa-mug-hot"></i> ${manager.getRole()}</p>
      </div>
      <div class="bg-light">
        <ul class="list-group list-group-flush d-flex flex-column justify-content-around" >
          <li class="list-group-item bg-white">ID: ${manager.getID()}</li>
          <li class="list-group-item bg-white">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item bg-white">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
      </div>
  </div>
        `;
};

generateEngineer = (engParm) => {
  let engineer = new Engineer(
    engParm.name,
    engParm.id,
    engParm.email,
    engParm.githubName
  );

  const output = `
  <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary">
          <p> ${engineer.getName()} </p>
          <p><i class="fas fa-glasses"></i> ${engineer.getRole()}</p>
      </div>
      <div class="bg-light">
        <ul class="list-group list-group-flush d-flex flex-column justify-content-around" >
          <li class="list-group-item bg-white">ID: ${engineer.getID()}</li>
          <li class="list-group-item bg-white">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item bg-white">Github: <a href="https://github.com/${engineer.getGithubUsername()}" target="_blank">${engineer.getGithubUsername()}</a></li>
        </ul>
      </div>
  </div>
        `;

  return output;
};

generateIntern = (intParm) => {
  const intern = new Intern(
    intParm.name,
    intParm.id,
    intParm.email,
    intParm.school
  );

  return `
  <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary">
        <p> ${intern.getName()} </p>
        <p><i class="fas fa-user-graduate"></i> ${intern.getRole()}</p>
    </div>
    <div class="bg-light">
      <ul class="list-group list-group-flush d-flex flex-column justify-content-around" >
        <li class="list-group-item bg-white">ID: ${intern.getID()}</li>
        <li class="list-group-item bg-white">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
        `;
};

generateTeamData = (employeeData) => {
  const { manager, engineerData, internData } = employeeData;

  output = `      
        ${generateManager(manager)}

        ${engineerData
          .map((element) => {
            return generateEngineer(element);
          })
          .join("")}

        ${internData
          .map((element) => {
            return generateIntern(element);
          })
          .join("")}
    `;
  // console.log("generateTeam Data", output);
  return output;
};

// export function to generate entire page
module.exports = (employeeData) => {
  // destructure page data by section
  const { manager, engineerData, internData } = employeeData;

  return `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        </head>
    
    <body>
      <header>
         <h1 class="page-title   py-4 px-3">My Team</h1>
      </header>
      <div class = "container d-flex flex-wrap justify-content-center">
          ${generateManager(manager)}
          ${engineerData
            .map((element) => {
              return generateEngineer(element);
            })
            .join("")}
          ${internData
            .map((element) => {
              return generateIntern(element);
            })
            .join("")}
      </div>
      
    </body>
    </html>
    `;
};
