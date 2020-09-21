const express = require('express');
const app = express();

var colours = {
  Jim : 'blue',
  Dwight : 'orange',
  Pam : 'red',
  Michael : 'blue',
  Toby : 'grey',
  Creed : 'black',
  Andy : 'purple'};


app.get('/colour', (req, res) => {
  
    // Extract some parameters
    var name = req.query.name;
    if(name == '') {
       name = 'unknown'; 
    }

 
    if (name in colours) {
      var colour = colours[name];
    };  
  if (!(name in colours)) {
      var colour = 'unknown';
    };  
    res.send({ info: colour, result: 'success', rc: 0 });

  });

app.get('/disable', (req, res) => {

    // Extract some parameters
    var devId = req.query.devId;
    var auth = req.query.auth;
  // Call SOTI here
  
  
  var http = require('http');
var data = JSON.stringify({
  'id': '2'
});
//Bricked Group: 'referenceId:dcacdec5-e9d2-43a8-bade-7baf7b19ccb7’
var options = {
  host: 's111720.mobicontrolcloud.com',
  port: '443',
  path: '/MobiControl/api/devices/' + devId + '/parentPath',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Content-Length': data.length
    'Authorization': 'Bearer ' + devId,
    'newPath': 'referenceId:75e1cdac-030b-46f4-bd7d-316345ef0f1d'
  }
};

var req = http.request(options, function(res) {
  var msg = '';

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    msg += chunk;
  });
  res.on('end', function() {
    console.log(JSON.parse(msg));
  });
});

req.write(data);
req.end();
  
  //end soti call
  
  
  
    res.send({ info: colour, result: 'success', rc: 0 });

  });

//'referenceId:75e1cdac-030b-46f4-bd7d-316345ef0f1d' enable path
app.get('/enable', (req, res) => {

    // Extract some parameters
    var devId = req.query.devId;
    var auth = req.query.auth;
  

    if (name in colours) {
      var colour = colours[name];
    };  
  if (!(name in colours)) {
      var colour = 'unknown';
    };  
  
  
  
  
  
    res.send({ info: colour, result: 'success', rc: 0 });

  });


const PORT = process.env.PORT || 3001;
app.listen(PORT);
