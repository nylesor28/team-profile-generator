const Employee = require("../lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
        super(name, id, email);
        this.role = "Engineer";
        this.githubUsername = githubUsername;
    }

    getGithubUsername(){
        return this.githubUsername;
    }
}

module.exports = Engineer;