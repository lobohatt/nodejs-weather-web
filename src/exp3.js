const path = require('path');  // core node module
const express = require('express');

console.log(__dirname);
//console.log(__filename);
//console.log(path.join(__dirname, '../..'));
//console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath)); // serving up // customizing//static take path of dir
// This is app.com

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

// This is app.com/help
app.get('/help', (req, res) => {
  res.send({
    name: 'lobo',
    age: 22
  });
});

// This is app.com/about
app.get('/about', (req, res) => {
  res.send([{
    name: 'lobo'
  }, {
    name: 'hat'
  }]);
});

// This is app.com/weather
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'cloudy',
    location: 'london'
  });
});

app.get('/title', (req, res) => {
  res.send('<h1>Hello!</h1>');
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});


