const  Engineer = require('../lib/Engineer');


test("creates an engineer object",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.name).toBe("Titan");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    expect(engineer.role).toBe("Engineer");
    expect(engineer.githubUsername).toEqual(expect.any(String));
})


test("gets engineer's name",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.getName()).toEqual(expect.any(String));
})

test("gets engineer's id",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.getID()).toEqual(expect.any(Number));
})

test("gets engineer's email",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.getEmail()).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
})

test("gets engineer's role",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.getRole()).toEqual("Engineer");
})
test("gets engineer's github",()=>{
    const engineer = new Engineer("Titan", 55, "noemail@gmail.com","github");
    expect(engineer.getGithubUsername()).toEqual(expect.any(String));
})