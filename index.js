// npm init. 
// Require dependencies 'fs' & 'inquirer'
const fs = require("fs");
const inquirer = require("inquirer");

const fileName = "README"
const fileExt = ".md"
let badges = ""
//array of questions
const questions = [
    {
        type: 'input',
        message: 'What is your READMEs title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Descripe your application.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your application? Please provide examples.',
        name: "usage"
    },
    {
        type: 'list',
        message: 'Choose a license for your application.',
        name: 'license',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'Perl',
            'SIL',
            'Unlicense',
            'WTFPL',
            'Zlib'
        ]
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide tests for your application.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
]
// write a readme in a markdown file as a template

// TODO: function that will generate my readme template

// TODO: use inquirer to prompt user with questions
inquirer.prompt(questions).then(response => {
    console.log(response)

    if(response.license === 'Apache'){
        badges = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if(response.license === 'Boost'){
        badges = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if(response.license === 'BSD'){
        badges = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if(response.license === 'Creative Commons'){
        badges = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if(response.license === 'Eclipse'){
        badges = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } else if(response.license === 'GNU'){
        badges = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if(response.license === 'IBM'){
        badges = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    } else if(response.license === 'ISC'){
        badges = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if(response.license === 'MIT'){
        badges = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(response.license === 'Mozilla'){
        badges = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if(response.license === 'Open Data Commons'){
        badges = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
    } else if(response.license === 'Perl'){
        badges = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    } else if(response.license === 'SIL'){
        badges = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
    } else if(response.license === 'Unlicense'){
        badges = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } else if(response.license === 'WTFPL'){
        badges = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    } else if (response.license === 'Zlib'){
        badges = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
    }

let profile = `# ${response.title}

## Description
    
${response.description}
    
## Badges
    
${badges}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    
## installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
## License
    
${response.license}
    
## Contributing
    
${response.contributing}
    
## Tests
    
${response.tests}
    
## Questions

Github: ${response.github}
email: ${response.email}`

fs.writeFile(response.title + '.md',profile, (err) => {if(err) {throw err}})
})

    


// TODO: use answers that come back from inquirer - pass those into my generate readme function

// TODO: write file using template generated from readme function


// const writeToFile = function(fileName, fileExt, content, overwrite=false) {
//     if(!fs.existsSync('./output')){
//         fs.mkdirSync('output')
//     }
//     let filePath = "./output/"+fileName+fileExt;
//     if(!overwrite && fs.existsSync(filePath)){
//         let counter = 1
//         do{
//             filePath = "./output/"+fileName+counter+fileExt;
//             counter++
//         } while(fs.existsSync(filePath));
//     }
//     fs.writeFileSync(filePath,content,"utf8");
// }    
// prompt user if they would like to overwrite file if no file exists don't prompt.