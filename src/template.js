function teamHTML(dreamTeam) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator Assemble!</title>
</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
                <p class="lead">Your team has been...assseeeemmmbllleeeedd!</p>
            </div>
        </div>
    </header>

    <section>
        <div class="container-fluid">
            <div class="row">
                ${teamCards(dreamTeam)}; 
            </div>
        </div>
    </section>

    <script src="../index.js"></script>
</body>

</html>
    `
};

function teamCards(dreamTeam) {
    function teamManager(manager) {
        return `
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title" id="emp-name">${manager.getName()}</h3>
                    <h4 class="card-text">${manager.getRole()}</h4>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="emp-id">ID: ${manager.getId()}</li>
                    <li class="list-group-item" id="emp-email">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item" id="emp-extra">Office Number: <a href="tel: ${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>    
        `;
    };
    function teamEngineer(engineer) {
        return `
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title" id="emp-name">${engineer.getName()}</h3>
                    <h4 class="card-text">${engineer.getRole()}</h4>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="emp-id">ID: ${engineer.getId()}</li>
                    <li class="list-group-item" id="emp-email">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item" id="emp-extra">GitHub: <a href="http://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>    
        `;
    };
    function teamIntern(intern) {
        return `
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title" id="emp-name">${intern.getName()}</h3>
                    <h4 class="card-text">${intern.getRole()}</h4>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="emp-id">ID: ${intern.getId()}</li>
                    <li class="list-group-item" id="emp-email">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item" id="emp-extra">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>        
        `;
    };
    const html = [];
    html.push(dreamTeam
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => teamManager(manager))
    );
    html.push(dreamTeam
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => teamEngineer(engineer))
        .join("")
    );
    html.push(dreamTeam
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => teamIntern(intern))
        .join("")
    );
    return html.join("");
}

module.exports = teamHTML;