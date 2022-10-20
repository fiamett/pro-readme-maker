// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mkDwn = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

let questions = 
    [
        "whats the title?",
        "short description?",
        "Install instructions?(n/a if not needed)",
        "usage instructions?",
        "credits(n/a if not needed)",
        "license?(n/a if not needed)",
        "features?(n/a if not needed)",
        "github link?",
        "email?"
    ];
    

// TODO: Create a function to write README file
function writeToFile(data) {
    var txt = mkDwn(data);
    fs.writeFile(data.file+'.md', txt , (err) =>
    err ? console.log(err) : console.log(`Successfully created ${data.file}!`)
    )
}



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
            type:'input',
            name:'file',
            message:'file name?',
            },
            {
            type:'input',
            name:'title',
            message:questions[0],
            },
            {
            type:'input',
            name:'desc',
            message:questions[1],
            },
            {
            type:'input',
            name:'inst',
            message:questions[2],
            },
            {
            type:'input',
            name:'use',
            message:questions[3],
            },
            {
            type:'input',
            name:'credits',
            message:questions[4],
            },
            {
            type:'list',
            name:'license',
            message:'license?',
            choices:['n/a','MIT','Mozilla','IBM'],
            },    
            {
            type:'input',
            name:'feat',
            message:questions[6],
            },    
            {
            type:'input',
            name:'git',
            message:questions[7],
            },
            {
            type:'input',
            name:'email',
            message:questions[8]
            },
        ])
        .then((data)=>{
            writeToFile(data);
        });
}

// Function call to initialize app
init();

