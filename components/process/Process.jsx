import React from 'react'
import './Process.scss';
import Image from 'next/image';
import { Processing } from '@/utils/Images';

const Process = ({image, title, about}) => {
  return (
  <div className="processes">
    <div className="background">
      <Image
      className='img'
    
      src={image}
      />
    </div>
    <div className='title'>{title}</div>
    <span className='line3'></span>
    <div className="title-about">
    {about}
    </div>
  </div>
  )
}

export default Process