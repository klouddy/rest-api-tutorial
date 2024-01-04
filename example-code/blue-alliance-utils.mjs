
import fetch from 'node-fetch';
import authDetails from './auth.mjs'

/**
 * Get list of events for a given year and district code
 * @param {string} year 
 * @param {string} districtCode 
 * @returns list of events
 */
const getEventsForYearAndDistrict = async (year, districtCode) => {
    // status endpoint
    let url = `https://www.thebluealliance.com/api/v3/district/${year}${districtCode}/events`;

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

    return await fetch(url, options)
    .then(res => res.json());
  }


  // export each function you want another file to be able to use.
export {
    getEventsForYearAndDistrict
}