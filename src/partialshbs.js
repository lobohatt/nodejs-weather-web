// Partial hbs // Advanced Templating

const path = require('path');
const express = require('express');
const hbs = require('hbs');         // we need this now from here


const app = express();


//path setup
const pathdirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');





app.set('view engine', 'hbs');  // value,value  // handler setup // creating dynamic templates
app.set('views', viewPath);
hbs.registerPartials(partialPath);



app.use(express.static(pathdirectory));    // setup static directory



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
    title: 'Help section  ',
    location: 'india',
    name: 'lobo'
  });

});

app.get('/hola/*', (req, res) => {
  res.render('404', {
    title: 'Help section',
    des: 'Help article not found',
    name: 'lobo'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Help section',
    des: 'Page not found',
    name: 'lobo'
  });
});




/*app.get('/helps', (req, res) => {
  res.send('help page');
});

app.get('/helps/*', (req, res) => {      // wildcard operator
  res.send('Help article not found');
});

app.get('*', (req, res) => {   // For error
  res.send('My 404 page');
});*/





app.listen(3000, () => {
  console.log('Server up');
});
