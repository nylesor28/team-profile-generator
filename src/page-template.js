const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");



generateManager = (manParm) =>{

  let  manager = new Manager();
  manager = manParm;


  return`
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
        `
}


generateEngineer = (engParm) =>{
  console.log("EngineerObject: ",engParm )
  let  engineer = new Engineer();
  engineer = engParm;
  const output =  `
  <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary">
               <p> ${engineer.getName()} </p>
               <p><i class="fas fa-mug-hot"></i> ${engineer.getRole()}</p>
              </div>
              <div class="bg-light">
            <ul class="list-group list-group-flush d-flex flex-column justify-content-around" >
              <li class="list-group-item bg-white">ID: ${engineer.getID()}</li>
              <li class="list-group-item bg-white">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item bg-white">Github: <a href="https://github.com/${engineer.getGithubUsername()}">${engineer.getGithubUsername()}</a></li>
            </ul>
        </div>
        `
        console.log(output)
      return output;
}

generateIntern = (intParm) =>{
  let  intern = new Intern();
  intern = intParm;

  return`
  <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary">
               <p> ${intern.getName()} </p>
               <p><i class="fas fa-mug-hot"></i> ${intern.getRole()}</p>
              </div>
              <div class="bg-light">
            <ul class="list-group list-group-flush d-flex flex-column justify-content-around" >
              <li class="list-group-item bg-white">ID: ${intern.getID()}</li>
              <li class="list-group-item bg-white">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `
}

generateTeamData = employeeData =>{
  const { manager, engineerData, internData } = employeeData;
  output = `      
        ${generateManager(manager)}

        ${engineerData.map((element)=>{
            return generateEngineer(element)
        }).join('')}

        ${internData.map((element)=>{
          return generateIntern(element)
      }).join('')}
    `
    console.log("generateTeam Data", output)
    return output;

}



// export function to generate entire page
module.exports = employeeData => {
    // destructure page data by section
    const { manager, engineerData, internData } = employeeData;
  
    return `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <div class = "container d-flex flex-wrap justify-content-center">
      ${generateManager(manager)}
      ${engineerData.map((element)=>{
         return  generateEngineer(element)
      }).join('')}
      ${internData.map((element)=>{
       return generateIntern(element)
    }).join('')}
      </div>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2021 by nylesor28</h3>
      </footer>
    </body>
    </html>
    `;
  };


