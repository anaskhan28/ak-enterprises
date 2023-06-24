import React from 'react'
import './Section.scss';
import { Clouds } from '@/utils/Images';
import Image from 'next/image';
import Link from 'next/link';

const Section = ({title, about, desc, button1, button2, link1, link2}) => {
  return (
    <div data-aos="fade-up" className="interested-section">
      
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
                <button className="service-btn"><Link href={`/${link1}`}>{button1}</Link></button>
                <button className="connect-btn"><Link  href={`/${link2}`}>{button2}</Link></button>
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