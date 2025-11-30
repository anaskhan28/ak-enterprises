import React from 'react'
import Image from 'next/image';
import { Processing } from '@/utils/Images';
import Process from '../process/Process';
const Processes = () => {

  return (
    <>
         <Process
              image={Processing.Enquiry}
              title="Survey"
              about="Branch assessment of lockers, vault & scrap disposal planned with zero disruption."
            />
            <Process
              image={Processing.Truck}
              title="Secure Execution"
              about="Shifting, repairs & disposal done with strict safety protocols."
            />
            <Process
              image={Processing.User}
              title="Audit Reports"
              about="Before/after proof & disposal certificates for RBI compliance."
            />
    </>
  )
}

export default Processes