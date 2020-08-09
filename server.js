const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/time', (req, res) => {
  res.send("{ timestamp : " & Date.now() & " }");
});

app.get('/date', (req, res) => {
  res.send("{ timestamp : " & Date.now() & " }");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);
