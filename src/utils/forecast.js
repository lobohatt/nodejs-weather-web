const postman_request = require('postman-request');

const forecast = (la, lo, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=11087901159f48d8b9edd62e13c20d5c&query=' + la + ',' + lo + '&units=m';

  postman_request({ url: url, json: true }, (error, response) => {

    if (error) {
      callback('Unable to connecct to Network', undefined);
    } else if (response.body.error) {
      callback('please Enter correct coordinates', undefined);
    } else {
      callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + '   degrees out.');
    }
  });
};

module.exports = forecast






