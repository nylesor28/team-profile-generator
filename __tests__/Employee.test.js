
const  Employee = require('../lib/Employee');


test("creates an employee object",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com","Employee");
    expect(employee.name).toBe("Titan");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    expect(employee.role).toEqual(expect.any(String));
})


test("gets employee's name",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com","Employee");
    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee's id",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com","Employee");
    expect(employee.getID()).toEqual(expect.any(Number));
})

test("gets employee's email",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com","Employee");
    expect(employee.getEmail()).toMatch(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
})

test("gets employee's role",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com","Employee");
    expect(employee.getRole()).toEqual("Employee");
})