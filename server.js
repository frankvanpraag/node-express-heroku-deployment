const express = require('express');
const app = express();

var colours = {
  Jim : 'Blue',
  Dwight : 'Orange',
  Pam : 'Red',
  Michael : 'Blue',
  Toby : 'Grey',
  Creed : 'Black',
  Andy : 'Purple',};


app.get('/colour', (req, res) => {
    console.log('Hello world...');
    // Extract some parameters
    var name = req.query.name;
    if(name == '') {
       name = 'Unknown'; 
    }

    if (Object.keys(colours).indexOf(name) > -1) {
         var colour = colours.name;
      } else {
        var colour = 'unknown';
      }
    
    res.send({ info: colour, result: 'success', rc: 0 });

  });


const PORT = process.env.PORT || 3001;
app.listen(PORT);
