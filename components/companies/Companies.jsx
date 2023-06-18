'use client'
import React, {useEffect, useState} from 'react'
import { CompaniesImages } from '@/utils/Images';
import Company from './company';
import { Slide } from '../slide/slide';


const getNumSlides = () =>{
    return window.innerWidth < 768 ? 3 : 6;
  }

const Companies = () => {
    
    const [numSlides, setNumSlides] = useState(getNumSlides());

    useEffect(() => {
        const handleResize = () => {
          setNumSlides(getNumSlides());
        };

        
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
        }
    
        return () => window.removeEventListener('resize', handleResize);
      }, [numSlides]);
    
      
    
    const slides = CompaniesImages.map((img, key) => (
        <Company key={key} img={img} />
      ));
  return (
    <div>
        <Slide 
        slides={slides}
         navigation={false} 
         num={numSlides} 
         customPagination={false}
         autoplay={true}
         pagination={false}
         leftMargin={true}
         />
    </div>
  )
}

export default Companies