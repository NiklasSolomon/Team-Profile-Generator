const Engineer = require('./lib/Engineer');

test('This should get the role of the engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});

test('This should get the github of the engineer', () => {
    const engineer = new Engineer();
    
    expect(engineer.github).toEqual(expect.any(String));
});