
import fetch from 'node-fetch';
import authDetails from './auth.mjs'

let url = 'https://www.thebluealliance.com/api/v3/status';

let options = {
  method: 'GET',
  headers: {
    'X-TBA-Auth-Key': authDetails['auth-token'],
    Accept: 'application/json'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));