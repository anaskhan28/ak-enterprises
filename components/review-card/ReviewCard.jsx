import React from 'react'
import './ReviewCard.scss';
import Image from 'next/image';
import Profile from '../../public/images/profile.png'
const ReviewCard = ({content, image}) => {
  return (
   <div className="review-card">
    <div className="review-content">{content}</div>
    <div className="img-circle">
    <Image
    className='img-profile'
    src={image}
    width={50}
    height={50}
    alt='profle'
    />
    </div>
   
   </div>
  )
}

export default ReviewCard