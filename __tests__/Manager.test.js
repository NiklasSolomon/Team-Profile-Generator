const Manager = require('./lib/Manager');

test('This should get the role of the manager', () => {
    const manager = new Manager();
    
    expect(manager.getRole()).toEqual("Manager");
});

test('This should get the office number of the manager', () => {
    const manager = new Manager();
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});