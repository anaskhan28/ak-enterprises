import React from 'react'
import './company.scss';

import Image from 'next/image';

const Company = ({img, key}) => {
  return (
   <section className='com-container'>

   
    <Image
    className='images'
    width={100} 
    height={100} 
    alt={key} 
    src={img} 
    key={key}/>

   </section>
  )
}

export default Company
