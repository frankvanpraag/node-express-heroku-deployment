const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/time', (req, res) => {
  console.log('Getting time...');
  // Extract some parameters
  var name = req.query.name;
  if name == '' then name = 'unknown';
  res.send({ info: 'Your name is req.query.name' , serverTime: Time.now(), serverDate: Date.now(), result: 'success', rc: 0 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
