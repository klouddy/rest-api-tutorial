
import fetch from 'node-fetch';
import authDetails from './auth.mjs'

// status endpoint
let url = 'https://www.thebluealliance.com/api/v3/status';

// making a GET call and addin your auth header
let options = {
  method: 'GET',
  headers: {
    'X-TBA-Auth-Key': authDetails['auth-token'],
    Accept: 'application/json'
  }
};

// performs the call
console.log(`Performing Get Call`)
console.log(`=======================`)
console.log(`${url}`)

fetch(url, options)
  .then(res => {
    // res -> is the response object.
    // It holds details about your response
    
    // Print status code of response
    console.log(`response code: ${res.status}`);

    // return body of response (this is in json format so we use res.json())
    return res.json()
  }).then(responseBody => {
    // print out response body in a nice format
    console.log(`Response body: \n\n ${JSON.stringify(responseBody, null, 2)}`);
  })
  // If there is an error print it out.
  .catch(err => console.error('error:' + err));