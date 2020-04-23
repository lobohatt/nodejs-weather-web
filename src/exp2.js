const express = require('express');


const app = express();

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


