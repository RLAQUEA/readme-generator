//Function that will retrieve and display license badges on the readme file
function licenseBadge(licenses) {
    if (licenses === "Licenses: MIT License (MIT)") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }
    else if (licenses === "IBM Public License 1.0") {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    else if (licenses === "APACHE License") {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    }
}
function generateMarkdown(data) {
    return ` 
# ${data.title}
${licenseBadge(data.licenses)}
## Table of Contents:
* [Licenses](#licenses)
* [Github](#github)
* [Email](#email)
* [Title](#title)
* [Description](#description)
* [Installation](#installation)
* [Tests](#tests)
## User Github:
${data.github}
## User Email:
<a href="${data.email}">${data.email}</a>
## Project Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributors:
${data.contributors}
## Tests:
${data.tests}
## Licenses:
${data.licenses}
`
}

module.exports = generateMarkdown;