const { clear } = require('console');
const https = require('https');
require('dotenv').config()
var myAPIkey = process.env.APIkey


//console.log(process.env)

//console.log(myAPIkey)

https.get('https://api.nasa.gov/planetary/apod?api_key='+myAPIkey, (resp) => {
let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});