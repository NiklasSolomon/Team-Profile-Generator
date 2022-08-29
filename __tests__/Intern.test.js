const Intern = require('./lib/Intern');

test('This should get the role of the intern', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
});

test('This should get the school of the intern', () => {
    const intern = new Intern();
    
    expect(intern.school).toEqual(expect.any(String));
});