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
  res.send({ info: 'Your name is ' + name, serverDate: Date.now().toString(), result: 'success', rc: 0 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
