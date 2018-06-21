var Fetch = require('whatwg-fetch');
var rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiUrl = '&appid=254828ae05e5ac2a71ed1f775977a661';

module.exports = {
  get: function(place) {
    return fetch(rootUrl + place + apiUrl, {
      headers: {
        //No need for speacial headers
      }
    })
    .then(function(response)  {
      return response.json();
    });
  }
};
