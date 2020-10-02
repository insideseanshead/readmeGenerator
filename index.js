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
            'Cloud Native Computing Foundation',
            'GNU',
            'MIT',
            'NPM Packages',
            'OpenBSD',
            'Rust',
            'WordPress'
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

    if(response.license === 'MIT'){
        badges = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
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