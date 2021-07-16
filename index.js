
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const generateMarkdown = require('./utils.generateMarkdown');

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
    ]) .then(function (data) {
        let makeFile = makeReadme(data)
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

//Function to retrieve the user input using the inquirer package
getUserInfo()

function makeReadme(data) {
 
//Function that will retrieve and display license badges on the readme file
let badge;
    switch (data.licenses) {
        case "none":
            badge = ""
            break;
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
            break;
        case "IBM":
            badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
            break;
        case "APACHE":
            badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
            break;
    }

    return `###${data.github}
    ### ${data.email}
    # ${data.title}
    ## ${data.description}
    ## ${data.installation}
    ${data.usage}
    ${data.contributors}
    ${data.tests}
    ${data.licenses}
    `
}

// module.exports = generateMarkdown;