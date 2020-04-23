const path = require('path');
const express = require('express');

const app = express();

const pathdirectory = path.join(__dirname, '../public');

app.use(express.static(pathdirectory));



app.get('/help', (req, res) => {
  res.send('help page');
});

app.listen(3000, () => {
  console.log('Server up');
});
