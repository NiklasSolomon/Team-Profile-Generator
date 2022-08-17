const Employee = require('./lib/Employee');
// Testing that each function is exhibiting expected behavior
test('This should create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});