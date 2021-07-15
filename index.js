
//Required modules
const fs = require("fs");
const inquirer = require("inquirer");

const getUserInfo = () => {
return inquirer.prompt([
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
    name: 'Usage',
    message: 'Usage:'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contributors:'
},
{
    type: 'input',
    name: 'tests',
    message: 'How should I run tests?:'
},
{
    type: 'list',
    name: 'Licenses:',
    choices: ['Licenses: MIT License (MIT)', 'IBM Public License 1.0', 'Free Public License']
},
])
}
getUserInfo();