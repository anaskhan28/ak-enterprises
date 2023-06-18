import React from 'react'
import './Section.scss';
import { Clouds } from '@/utils/Images';
import Image from 'next/image';


const Section = ({title, about, desc, button1, button2}) => {
  return (
    <div className="interested-section">
      
      <div className="cloud">
     <Image
     className='cloud1'
     src={Clouds.Cloud1}
     />
      <div className="heading">
            <div className="title">{title}</div>
            <div className="about-title">{about}</div>
            <div className="about-desc">
           {desc}
            </div>

            <div className="btn">
                <button className="service-btn">{button1}</button>
                <button className="connect-btn">{button2}</button>
              </div>
          </div>
     <Image
     className='cloud2'
     src={Clouds.Cloud2}
     />
  
     
      </div>
      
     
    </div>
  )
}

export default Section