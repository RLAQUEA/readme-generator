
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

//List of user prompts to collect information about project to fill out readme file
const getUserInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Project title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Contributors:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How should I run tests?:'
        },
        {
            type: 'list',
            name: 'licenses',
            choices: ['Licenses: MIT License (MIT)', 'IBM Public License 1.0', 'APACHE License']
        },
    ]).then(function (data) {//Function to retrieve the user input using the inquirer package
        let makeFile = generateMarkdown(data)
        const filePath = "readme.md";
        fs.writeFileSync(filePath, makeFile)
    })
        .then(function () {
            console.log("Success!");
        })
        .catch(function (error) {
            console.log(error);
        })
}

getUserInfo()

