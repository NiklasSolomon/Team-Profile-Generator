const Employee = require('./lib/Employee');

// Testing that each function is exhibiting expected behavior
test('This should create an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('This should get the role of the employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");
}); 

test('This should get the ID of the employee', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('This should get the name of the employee', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
});

test('This should get the email of the employee', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});