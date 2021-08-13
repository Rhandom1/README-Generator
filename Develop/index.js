// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Prompts:
//Title input
//Description input
//installation instructions (input)
//usage information (input)
//contribution guidlines (input)?
//test instructions (input)
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName'
        //links to GitHub profile?
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using your repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to your repo?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'What license should your project have?',
        name: 'license',
        choices:['MIT', 'GNU GPLv3', 'Apache 2.0', 'Mozilla 2.0', 'Unlicense']
    },
    {
        type: 'input',
        message: 'What dependencies are being used?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'How are the dependencies installed?',
        name: 'installation',
        default: 'npm 1'
    },

    {
        type: 'input',
        message: 'What command should be run for any testing?',
        name: 'test',
        default: 'npm test'
    }
];
// console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.log (err) : console.log("Answers returned!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        
    
        writeToFile("README.md", generateMarkdown(response));
    })
}

// Function call to initialize app
init();


//Sections of the README:
    //Title
    //License
    //Table of Contents - click on section to take you to that section
    //Description
    //Installation
    //Usage
    //Contributing
    //Tests
    
    