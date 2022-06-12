const { default: axios } = require('axios');





axios = require('axios');


// print the response data
axios.get('https://api.github.com/users/octocat')
    .then(function (response) {
        console.log(response.data);
    }
    )
    .catch(function (error) {
        console.log(error);
    }
    );






console.log("The Script is running");







