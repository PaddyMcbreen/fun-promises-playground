const inquirer = require('inquirer');
const axios = require('axios');

inquirer
  .prompt([
    {
      name: 'id',
      message: 'Input your pokemon ID: '
    }
  ])
  .then((answers) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${answers.id}`)
      .then(function (response) {
        console.log(`The name of the Pokemon with ID ${answers.id} is: ${response.data.name}`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log(`The Pokemon with ID ${answers.id} does not exist.`);
        } else {
          console.error('An error occurred while fetching the Pokemon data.');
        }
      });
  });
