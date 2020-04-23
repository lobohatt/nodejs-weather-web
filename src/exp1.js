const express = require('express');


const app = express();

// This is app.com

app.get('', (req, res) => {     // first agrument in app.get is partial url and other is function
  res.send('Hello express!');   //function argument is request and response
});

// This is app.com/help
app.get('/help', (req, res) => {
  res.send('Help page');
});

// This is app.com/about
app.get('/about', (req, res) => {    //about route is set up, rendered in web browser
  res.send('About page');
});

// This is app.com/weather
app.get('/weather', (rew, res) => {
  res.send('Weather page');
});

//app.com
//app.com/help
//app.com/about


app.listen(3000, () => {                                         //function is optional argument
  console.log('Server is up on port 3000');
});                             // 3000 is a port (development port) while http have port like 80


