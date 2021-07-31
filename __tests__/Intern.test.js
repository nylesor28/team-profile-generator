const  Intern = require('../lib/Intern');


test("creates an intern object",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.name).toBe("Titan");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    expect(intern.role).toBe("Intern");
    expect(intern.school).toEqual(expect.any(String));
})


test("gets intern's name",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.getName()).toEqual(expect.any(String));
})

test("gets intern's id",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.getID()).toEqual(expect.any(Number));
})

test("gets intern's email",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.getEmail()).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
})

test("gets intern's role",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.getRole()).toEqual("Intern");
})
test("gets intern's school",()=>{
    const intern = new Intern("Titan", 55, "noemail@gmail.com","school");
    expect(intern.getSchool()).toEqual(expect.any(String));
})