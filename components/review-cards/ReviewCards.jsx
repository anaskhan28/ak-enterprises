import Profile from '../../public/images/profile.png'
import ReviewCard from '../review-card/ReviewCard'
import React from 'react'
import { Slide } from '../slide/slide'
const ReviewCards = () => {
const slides = [
    <ReviewCard
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Laboriosam tempore iure, ullam molestiae debitis saepe blanditiis, rem praesentium."
    image={Profile}
    />,
    <ReviewCard
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Laboriosam tempore iure, ullam molestiae debitis saepe blanditiis, rem praesentium 
    dolor nobis optio error accusantium."
    image={Profile}
    />
]
  return (
    <div>
        <Slide 
        slides={slides} 
        navigation={false}
        num={1}
        customPagination={true}
        autoplay={false}
        pagination={true}
        />
    </div>
  )
}

export default ReviewCards