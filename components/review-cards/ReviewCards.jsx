import { CompaniesImages } from '@/utils/Images'
import ReviewCard from '../review-card/ReviewCard'
import React from 'react'
import { Slide } from '../slide/slide'
const ReviewCards = () => {

  const imagesObject = CompaniesImages.reduce((obj, image,index) =>{
    obj[`image${index +1}`] = image;
    return obj;
  }, {});
 
  console.log(imagesObject, 'image object')
const slides = [
    <ReviewCard
    content="Excellent service provided by the company! They efficiently handled the transportation and shifting of our office 
    equipment during our branch relocation. Their team ensured that all items were securely packed and safely transported.
     Highly recommended! - Bank Of  India"


    image={imagesObject.image1.src}
    />,
    <ReviewCard
    content="We are extremely satisfied with the demolition work carried out by this company. They executed the project with precision 
    and professionalism. Their expertise in demolishing structures while adhering to safety standards is commendable. 
    Bank of Baroda appreciates their diligent efforts."
    image={imagesObject.image2.src}
    />,
    <ReviewCard
    content="Union Bank of India extends its appreciation to this company for their exceptional services in e-waste management. 
    They efficiently handled the disposal and recycling of our electronic devices, ensuring compliance with 
    environmental regulations. Their commitment to sustainable practices is truly commendable."
    image={imagesObject.image3.src}
    />,
    <ReviewCard
    content="We would like to thank the company for their efficient scrap work. Their team effectively managed the collection and processing of metal 
    scrap from our premises. Their professionalism and commitment to responsible recycling have made a positive impact on our 
    environmental sustainability efforts."
    image={imagesObject.image11.src}
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