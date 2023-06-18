import React from 'react'
import Image from 'next/image';
import { Processing } from '@/utils/Images';
import Process from '../process/Process';
const Processes = () => {

  return (
    <>
         <Process
              image={Processing.Enquiry}
              title="Enquiry"
              about="Our Customers/Clients 
             give us a call or they send us a enquiry."
            />
            <Process
              image={Processing.User}
              title="Visit"
              about="We visit to our Customer/client 
             location and we finalize the deal on the spot."
            />
            <Process
              image={Processing.Truck}
              title="Pay & Pickup"
              about="Once the deal is done we will pay the amount 
             and pickup the scrap."
            />
    </>
  )
}

export default Processes