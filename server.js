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
  
  // Call SOTI here
  
const http = require('https');

//build the mobicontrol request
const options = {
  host: 's111720.mobicontrolcloud.com',
  port: '443',
  path: '/MobiControl/api/devices/' + devId + '/parentPath',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + auth,
    'newPath': 'referenceId:dcacdec5-e9d2-43a8-bade-7baf7b19ccb7'
  }
};


http.request(options);

/* commented out since i dont know how to get data yet
const req2 = http.request(options, function(res2) {
  const msg = '';

  res2.setEncoding('utf8');
  res2.on('data', function(chunk) {
    msg += chunk;
  });
  res2.on('end', function() {
    console.log(JSON.parse(msg));
  });
});


req2.write(data);
req2.end();
  */
  //end soti call
  
  
  res.send({ Message: 'reached end of block'});

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
  const http = require('https');


const options = {
  host: 's111720.mobicontrolcloud.com',
  port: '443',
  path: '/MobiControl/api/devices/' + devId + '/parentPath',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + auth,
    'newPath': 'referenceId:75e1cdac-030b-46f4-bd7d-316345ef0f1d'
  }
}

http.request(options);
  
res.send({ Message: 'reached end of block'});

  });


const PORT = process.env.PORT || 3001;
app.listen(PORT);
