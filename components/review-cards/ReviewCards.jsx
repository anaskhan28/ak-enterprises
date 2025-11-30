import { CompaniesImages } from '@/utils/Images'
import ReviewCard from '../review-card/ReviewCard'
import React from 'react'
import { Slide } from '../slide/slide'
const ReviewCards = () => {

  const imagesObject = CompaniesImages.reduce((obj, image,index) =>{
    obj[`image${index +1}`] = image;
    return obj;
  }, {});
 
  
const slides = [
<ReviewCard
content="The locker shifting and vault servicing were handled very securely with zero disruption to customers. Excellent coordination during the entire operation. Appreciated by our branch team."
image={imagesObject.image2.src}
/>,
<ReviewCard
content="Professional and compliant disposal of confidential materials. Complete documentation was provided for audit records. Their secure handling practices are highly reliable."
image={imagesObject.image3.src}
/>,
<ReviewCard
content="Their team managed disposal requirements very efficiently with proper compliance reports. Safe removal ensured cleanliness and better utilization of branch space."
image={imagesObject.image5.src}
/>,



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