const express = require('express');
const app = express();
const request = require('request');
const https = require('https'); //  xxx
 
var colours = {
  Jim : 'blue',
  Dwight : 'orange',
  Pam : 'red',
  Michael : 'blue',
  Toby : 'grey',
  Creed : 'black',
  Andy : 'purple'};


app.get('/hello', (req, res) => {  
    res.send({ info: 'hello', result: 'success', rc: 0 });

  });


app.get('/colour', (req, res) => {
  
    // Extract some parameters
    const name = req.query.name;
    if(name == '') {
       name = 'unknown'; 
    }

 
    if (name in colours) {
      const colour = colours[name];
    };  
  if (!(name in colours)) {
      const colour = 'unknown';
    };  
    res.send({ info: colour, result: 'success', rc: 0 });

  });

app.get('/disable', (req, res) => {
  // Extract some parameters from qualtrics
  const devId = req.query.devId;
  const auth = req.query.auth;

  //build the mobicontrol request
  const options = {
    host: 's111720.mobicontrolcloud.com',
    port: 443,
    path: '/MobiControl/api/devices/' + devId + '/parentPath',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + auth
    }
  };
  
  process.stdout.write(JSON.stringify(options));
  process.stdout.write('\n------\n');
  
  request.put(options, (err, res, "'referenceId:dcacdec5-e9d2-43a8-bade-7baf7b19ccb7'") => {
      if (err) {
          process.stdout.write(err);
      }
    process.stdout.write('Status Code:', res.statusCode);
  });
  
//   const req2 = https.request(options, function(res2) {
//     //dont really need callback but im not sure if i can remove it
//     res2.on('data', (d) => {
//       process.stdout.write(d);
//     });
//   });


  req2.end();
  
  //end soti call
  
  
  res.send({ Message: 'done' });
});

// testing alternate code
//const disreq = new XMLHttpRequest();
//disreq.open('PUT', 'https://s111720.mobicontrolcloud.com/MobiControl/api/devices/' + devId + '/parentPath');
//disreq.responseType = 'application/json';
//disreq.send();


app.get('/enable', (req, res) => {
  // Extract some parameters
  const devId = req.query.devId;
  const auth = req.query.auth;

  const options = {
    host: 's111720.mobicontrolcloud.com',
    port: 443,
    path: '/MobiControl/api/devices/' + devId + '/parentPath',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + auth,
      'newPath': 'referenceId:75e1cdac-030b-46f4-bd7d-316345ef0f1d'
    }
  }
  
  const req2 = https.request(options, function(res2) {
    //dont really need callback but im not sure if i can remove it
    res2.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  
  
  req2.end();
  res.send({
    Message: 'reached end of block'}
    );
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);
