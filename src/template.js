function teamHTML() {
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
                <div class="col-sm">
                    <div class="card" style="width: 18rem;">
                      ${teamCards}; 
                    </div>
                </div>
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
        <div class="card-body">
            <h3 class="card-title" id="emp-name">${manager.name}</h3>
            <h4 class="card-text">${manager.role}</h4>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item" id="emp-id">ID: ${manager.id}</li>
            <li class="list-group-item" id="emp-email">Email: ${manager.email}</li>
            <li class="list-group-item" id="emp-extra">Office Number: ${manager.officeNumber}</li>
        </ul>
        `;
    };
    
};