// this file is not currently being used.  Saving to come back to and try to break out the master html from the index.js file


// function templateHTML(responses) {
//   // console.log(responses.empname);
//   // const role = newLi(responses);
//   return `<!DOCTYPE html>
//     <html lang="en-US">
//       <head>
//         <meta charset="utf-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1"/>
//         <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
//         <title>Team Profile Generator</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
//         <link rel="stylesheet" href="./style.css"/>
//       </head>
          
//       <header class="header">
//             <div class="container text-center">My Team<div>
//       </header>
//       <main>
//         <div class="row ">
//         <div class="col-12 col-sm-6 col-lg-4"></div>
//           <div class="card" style="width: 18rem; margin: 15px;">
//             <h4 class="card-title rgb(20, 83, 56) mb-3">${responses.empname}</h4>
//             <h4 class="card-subtitle mb-3">${responses.role}</h4>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">Id: ${responses.id}</li>
//               <li class="list-group-item">Email: <a href="mailto:${responses.email}">${responses.email}</a></li> might need to add () after email
              
           
//             </ul>
//           </div>   
//     </main>  
//     </html>`
// }

// module.exports = templateHTML;





// //   // Example creating a code block for each role
// // Manager card template
// const manager = managerData => {
//   return `
//   <div id="${managerData.getRole()}-card" class="box card">
//     <div class="box name-role manager-name">
//       <h2>${managerData.getName()}</h2>
//       <h3>Role: ${managerData.getRole()}</h3>
//     </div> 
//     <div class="box employee-info">
//       <ul class="list-group">
//         <li class="list-group-item">ID: ${managerData.getId()}</li>
//         <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
//         <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
//       </ul>
//     </div>
//   </div>
// `
// }

// const employeesDiv = teamData => {
//   let employeeHtml = ''

//   for ( i = 0; i < teamData.length; i++ ) {
//     if (teamData[i].getRole() === "Manager"){
//       employeeHtml = employeeHtml + manager(teamData[i])
//     }
//     if (teamData[i].getRole() === "Engineer"){
//       employeeHtml = employeeHtml + engineer(teamData[i])
//     }
//     if (teamData[i].getRole() === "Intern"){
//       employeeHtml = employeeHtml + intern(teamData[i])
//     }
//   } return employeeHtml
// }