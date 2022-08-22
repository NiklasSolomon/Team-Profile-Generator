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
    `
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
    `
};