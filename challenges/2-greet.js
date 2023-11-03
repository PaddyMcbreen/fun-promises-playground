const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then((answers) => {
    console.log(`Hello ${answers.name}!`);
  })
  .catch((error) => {
    console.log(error)
  })
