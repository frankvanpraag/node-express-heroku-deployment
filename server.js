const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/date', (req, res) => {
  console.log('Getting time...');
  // Extract some parameters
  var name = req.query.name;
  if(name == '')
    name = 'unknown';
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); 
  var year = currentDate.getFullYear();
  var niceDate = date + '/' + month + '/' + year;

  res.send({ info: 'Your name is ' + name, serverDate: niceDate, result: 'success', rc: 0 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
