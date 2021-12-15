// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your description',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter your instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter your usage information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your guidelines!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter your instrunctions!');
            return false;
          }
        }
      }
    ])
    .then(data => {
        questions.push(data);
        console.log(questions);
        return questions;

      });
  };
const generate = generateMarkdown(questions);


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
promptUser()
.then(questions => {
  return generateMarkdown(questions)
}).then(fs.writeFile('./index.html', generate, err => {
  if (err) throw err;
}))
