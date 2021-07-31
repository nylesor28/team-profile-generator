const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer");
const fs = require("fs");

//const generatePage = require("./src/page-template");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name? (Required)"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id? (Required)"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)"
        }
    ])
    .then((managerData)=>{
        return managerData;
    })
    
}

promptManager()
    .then((managerData)=>{
        let employeeData = {};
        employeeData.manager = managerData
        console.log(employeeData)
    })