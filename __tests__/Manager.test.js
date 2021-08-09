const  Manager = require('../lib/Manager');


test("creates an manager object",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.name).toBe("Titan");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test("gets manager's name",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.getName()).toEqual(expect.any(String));
})

test("gets manager's id",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.getID()).toEqual(expect.any(Number));
})

test("gets manager's email",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
})

test("gets manager's role",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.getRole()).toEqual("Manager");
})
test("gets manager's officeNumber",()=>{
    const manager = new Manager("Titan", 55, "noemail@gmail.com",9876543210);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})