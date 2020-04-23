const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const pathdirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.static(pathdirectory));


app.set('view engine', 'hbs');  // value,value  // handler setup // creating dynamic templates
app.set('views', viewPath);
hbs.registerPartials(partialPath);

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

app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: 'provide address term'
    });
  }


  res.send({
    forecast: 'It is snowing',
    location: 'Iceland',
    address: req.query.address
  });
});


app.get('/product', (req, res) => {

  if (!req.query.search) {
    return res.send({
      error: 'you must provide a search term'
    });
  }


  console.log(req.query);               // how query works
  console.log(req.query.search);
  res.send({
    products: []
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

app.listen(3000, () => {
  console.log('server up');
});