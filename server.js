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

    // Extract some parameters
    const devId = req.query.devId;
    const auth = req.query.auth;
  
  // Call SOTI here
  
  const http = require('https');

const options = {
  host: 's111720.mobicontrolcloud.com',
  port: '443',
  path: '/MobiControl/api/devices/' + devId + '/parentPath',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + auth,
    'newPath': 'referenceId:dcacdec5-e9d2-43a8-bade-7baf7b19ccb7'
  }
};

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
  
  //end soti call
  
  
  res.send({ Message: 'success'});

  });

// testing new code
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
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + auth,
    'newPath': 'referenceId:75e1cdac-030b-46f4-bd7d-316345ef0f1d'
  }
}

/**
 * getJSON:  RESTful GET request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

module.exports.getJSON = (options, onResult) => {

  const port = options.port == 443 ? https : http;

  let output = '';

  const req2 = port.request(options, (res2) => {
    console.log(`${options.host} : ${res2.statusCode}`);
    res2.setEncoding('utf8');

    res2.on('data', (chunk) => {
      output += chunk;
    });

    res2.on('end', () => {
      let obj = JSON.parse(output);

      onResult(res2.statusCode, obj);
    });
  });

  req2.on('error', (err) => {
    // res.send('error: ' + err.message);
  });

  req2.end();
};
  
  
  
res.send({ Message: 'success'});

  });


const PORT = process.env.PORT || 3001;
app.listen(PORT);
