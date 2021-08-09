
const  Employee = require('../lib/Employee');


test("creates an employee object",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com");
    expect(employee.name).toBe("Titan");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    expect(employee.role).toEqual(expect.any(String));
})


test("gets employee's name",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com");
    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee's id",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com");
    expect(employee.getID()).toEqual(expect.any(Number));
})

test("gets employee's email",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com");
    expect(employee.getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
})

test("gets employee's role",()=>{
    const employee = new Employee("Titan", 55, "noemail@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
})