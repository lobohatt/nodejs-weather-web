//Debugging
const path = require('path');
const express = require('express');

const app = express();

//Define path for Express config
const pathdirectory = path.join(__dirname, '../public');

// setup handlebars engine
app.set('view engine', 'hbs');  // value,value  // handler setup // creating dynamic templates

// Setup static directory to serve
app.use(express.static(pathdirectory));

/*app.get('', (req, res) => {
  res.render('index');
});*/

app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'lobo'
  });
});

app.get('/abt', (req, res) => {
  res.render('abt', {
    title: 'About me',
    name: 'lobo'
  });
});

app.get('/hola', (req, res) => {
  res.render('hlp', {
    title: 'weather',
    location: 'india'
  });
})


app.get('/helps', (req, res) => {
  res.send('help page');
});

app.listen(3000, () => {
  console.log('Server up');
});
