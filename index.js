// npm init. 
// Require dependencies 'fs' & 'inquirer'
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./generateMarkdown");

const licenses = require("./licenses.json");

const fileName = "README"
const fileExt = ".md"

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
        choices: Object.getOwnPropertyNames(licenses)
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

inquirer.prompt(questions).then(response => {
    console.log(response)


    const mdStr = generateMarkdown(response);
    writeToFile(response.title, '.md', mdStr);
})


const writeToFile = function(fileName, fileExt, content, overwrite=false) {
    if(!fs.existsSync('./output')){
        fs.mkdirSync('output')
    }
    let filePath = "./output/"+fileName+fileExt;
    if(!overwrite && fs.existsSync(filePath)){
        let counter = 1
        do{
            filePath = "./output/"+fileName+counter+fileExt;
            counter++
        } while(fs.existsSync(filePath));
    }
    fs.writeFileSync(filePath,content,"utf8");
}    
