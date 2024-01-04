
import fetch from 'node-fetch';
import authDetails from './auth.mjs'
import { getEventsForYearAndDistric } from './get-events.mjs';
  
const main = async function() {
    const events = await getEventsForYearAndDistrict('2024', 'fim');

    // loop over events and print out name and event code
    events.forEach(event => {
        console.log(`name: ${event.name}, code: ${event.event_code}`)
    })
    
  }

  // call main function
  main()

  export {
    getEventsForYearAndDistric
  }