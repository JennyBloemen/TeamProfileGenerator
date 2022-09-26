function templateHTML(responses) {
  const teamMember = createMemeber(responses);
  return `<!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/style.css"/>
      </head>
          
      <header class="header">
            <div class="container text-center">My Team<div>
      </header>
      <main>
        <div class="row ">
        <div class="col-12 col-sm-6 col-lg-4"></div>
          <div class="card" style="width: 18rem; margin: 15px;">
            <h4 class="card-title rgb(20, 83, 56) mb-3">${responses.empname}</h4>
            <h4 class="card-subtitle mb-3">${responses.role}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${responses.id}</li>
              <li class="list-group-item">Email: ${responses.email}</li>
           
            </ul>
          </div>   
    </main>  
    </html>`
};
module.exports = templateHTML;
