// Install node modules (npm init -y), inquirer(npm install inquirer@8.2.4), and jest(npm install jest) 
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
// const generateHTML = require('./src/templateHTML'); worked with two TA's and we could not get the html code to live in a separate file. Saving to try again at a later time. 

// Question arrays to ask for data
const allemployeeQuestions = [    
    {
        type: 'input',
        message: 'Name:',
        name: 'empname',
    },
    {
        type: 'list',
        message: 'Select Role:',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
    },
    {   
        type: 'input',
        message: 'Id:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
    },
]   

const questionsManager = [
    {
        type: 'input',
        message: 'Office Number:',
        name: 'officenumber',
    }
]

const questionsEngineer = [
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
    } 
]

const questionsIntern = [
    {
        type: 'input',
        message: 'School: ',
        name: 'school',
    }
]

const continueQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another employee to your team?',
        choices: ['yes', 'no'],
        name: 'continue',
    }
]   

// Array to collect responses
let teamData = [];

// function to allow user to add multiple employees to the array teamData
const askcontinueQuestion = () => {
    inquirer.prompt(continueQuestion).then((responses)=> {
        if (responses['continue'] == 'yes') {
            allQuestions();
        } else {
            console.log(teamData);
            let fileData = templateHTML();
            writeToFile('./dist/index.html', fileData);  
        }
    })
}
// code to create the html file
function writeToFile(fileName, responses) {
    fs.writeFile(fileName, responses, (err) => 
    err ? console.log(err) : console.log('Team created!')
    );
  }

// the following two lines of code are just two different ways to achieve the same objective of gathering the role speficic data. The second is the newer way. 
// allResponses.officenumber = managerResponses.officenumber;
// let mangerInfo = {...allResponses,...managerResponses};

//function that refernces the questions arrays and promts for responses in terminal using node
function allQuestions() {
    inquirer.prompt(allemployeeQuestions).then((allResponses) => {
        if (allResponses['role'] == 'Manager') {
        inquirer.prompt(questionsManager).then((managerResponses) => {
            let managerInfo = {...allResponses,...managerResponses}; 
            teamData.push(managerInfo);
            askcontinueQuestion();
            // console.log(teamData);
        });
      } else if (allResponses['role'] == 'Engineer') {
        inquirer.prompt(questionsEngineer).then((engineerResponses) => {
            let engineerInfo = {...allResponses,...engineerResponses};
            teamData.push(engineerInfo);
            askcontinueQuestion();
        });
      } else if (allResponses['role'] == 'Intern') {
        inquirer.prompt(questionsIntern).then((internResponses) => {
            let internInfo = {...allResponses,...internResponses};
            teamData.push(internInfo);
            askcontinueQuestion();
        });
      }
    });
  }
// function to push responses to html code using template literals according to the role key.
  function cardHTML(responses) {
    console.log(responses);
    if(responses['role'] === 'Manager') {
       return `
        <div class="card" style="width:23rem; margin:15px;">
            <h4 class="card-title rgb(20, 83, 56) mb-3"> ${responses.empname}</h4>
            <h4 class="card-subtitle mb-4">${responses.role}</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${responses.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${responses.email}">${responses.email}</a></li> 
                <li class="list-group-item">Office Number: ${responses.officenumber}<li>          
            </ul>
        </div>`   
    } if (responses['role'] == 'Engineer') {
        return `
        <div class="card" style="width:23rem; margin:15px;">
            <h4 class="card-title rgb(20, 83, 56) mb-3"> ${responses.empname}</h4>
            <h4 class="card-subtitle mb-4"> ${responses.role}</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${responses.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${responses.email}">${responses.email}</a></li> 
                <li class="list-group-item">GitHub Username: <a href="https://www.github.com/${responses.github}" target="_blank">www.github.com/${responses.github}</a><li>          
            </ul>
        </div>`   
    } if (responses['role'] == 'Intern') {
        return `
        <div class="card" style="width:23rem; margin:15px;">
            <h4 class="card-title rgb(20, 83, 56) mb-3"> ${responses.empname}</h4>
            <h4 class="card-subtitle mb-4"> ${responses.role}</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${responses.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${responses.email}">${responses.email}</a></li> 
                <li class="list-group-item">School: ${responses.school}<li>          
            </ul>
        </div>`   
    }  
}

// master html that takes in the teamData to create a team page
function templateHTML(responses) {
    return `<!DOCTYPE html>
    <html lang="en-US">
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <title>Team Profile Generator</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
          <link rel="stylesheet" href="./style.css"/>
        </head>
        
        <body>    
            <header class="header">
                <div class="container text-center">My Team<div>
            </header>
            
            <main>
                <div class="container">
                    <div class="row justify-content-between">
                        ${employeesDiv()}
                    </div>
                </div>
            </main> 
        </body> 
      </html>`
  }

// for loop to run through the teamData array and create a card for each object in the array
const employeesDiv = () => {
    let employeeHtml = ''
    for ( i = 0; i < teamData.length; i++ ) {
      employeeHtml=employeeHtml+cardHTML(teamData[i]);
    } 
    return employeeHtml;
  }
// calls all questions function
allQuestions();     
       
       
       
       
       

