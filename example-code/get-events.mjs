
import {getEventsForYearAndDistrict} from './blue-alliance-utils.mjs'


  /**
   * Main function gets called when this is executed.
   */
  const main = async function() {
    const events = await getEventsForYearAndDistrict('2024', 'fim');

    // loop over events and print out name and event code
    events.forEach(event => {
        console.log(`name: ${event.name}, code: ${event.event_code}`)
    })
    
  }

  // call main function
  main()
