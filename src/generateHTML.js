// Boilerplate for html file
const generateWebpage = function (employeeEls) {
    return`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div>
                <div>${employeeEls}</div>
            </div>
        </main>
    </body>
    </html>
    `;
};

// Generate HTML element for manager information
const managerEl = function (manager) {
    return `
    <div>
        <div>
            <div>
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div>
                <p>ID: ${manager.id}</p>
                <p>Email: <a>${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// Generate element for engineer information
const engineerEl = function (engineer) {
    return `
    <div>
        <div>
            <div>
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <div>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a>${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//Generate element for intern information
const internEl = function (intern) {
    return `
    <div>
        <div>
            <div>
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <div>
                <p>ID: ${intern.id}</p>
                <p>Email:<a>${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = managerEl(employee);
            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = engineerEl(employee);
            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = internEl(employee);
            cardArray.push(internCard);
        }
    }

    const employeeEls = cardArray.join('');
    const generateTeam = generateWebpage(employeeEls);
    return generateTeam;
};

module.exports = generateHTML;