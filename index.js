// TODO: npm init.
// TODO: install my dependencies -inquirer. 
// TODO: Require all the dependencies I'll need - inquirer, fs 
const fs = require("fs");
const inquirer = require("inquirer");

const fileName = "README"
const fileExt = ".md"

// TODO: create an array of questions
const questions = [
    {
        type: 'input',
        message: 'What is your READMEs title?',
        name: 'title'
    }
]
// TODO: write a readme in a markdown file as a template

// TODO: function that will generate my readme template

// TODO: use inquirer to prompt user with questions

// TODO: use answers that come back from inquirer - pass those into my generate readme function

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
// prompt user if they would like to overwrite file if no file exists don't prompt.
writeToFile('test', '.md', ";ldafjk';ldsfjads'kf", true)
// TODO: write file using template generated from readme function