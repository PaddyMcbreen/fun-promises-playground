const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    console.log(response.data.results);
  })
  .catch(function (error) {
    console.log({status: 404, msg: 'file path not found'});
  });
