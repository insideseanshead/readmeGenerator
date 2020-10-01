// npm init. 
// Require dependencies 'fs' & 'inquirer'
const fs = require("fs");
const inquirer = require("inquirer");

const fileName = "README"
const fileExt = ".md"

//array of questions
const questions = ([
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
        message: 'Please provide tests for your application',
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
])
// write a readme in a markdown file as a template

// TODO: function that will generate my readme template

// TODO: use inquirer to prompt user with questions
inquirer.prompt(questions).then(function(response) {

    //push answers into an object array that can then be used to make the read me.



    // let filename = response.title.toLowerCase().split(' ').join('')+'.json';

    // fs.writeFile(filename, JSON.stringify(response, null, '\t'), function(err) {
    //     if (err) {
    //         return console.log('err');
    //     }

    //     console.log("Sucess")
    // })

})
// TODO: use answers that come back from inquirer - pass those into my generate readme function

// TODO: write file using template generated from readme function


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
// }    
// prompt user if they would like to overwrite file if no file exists don't prompt.