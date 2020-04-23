const postman_request = require('postman-request');


const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=11087901159f48d8b9edd62e13c20d5c&query=' + latitude + ',' + longitude + '&units=f';

  postman_request({ url, json: true }, (error, { body }) => {

    if (error) {
      callback('unable to connect to network', undefined);
    } else if (body.error) {
      callback('Unable to detect location', undefined);
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + '   degrees out.');
    }
  });
}

module.exports = forecast