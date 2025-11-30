import Demolish from '../../public/images/work/demolish.png'
import Shifting from '../../public/images/work/shifting.jpg'
import Locker from '../../public/images/work/locker-work.jpg'
import Chair from '../../public/images/work/chair-sell.jpg'
import Acs from '../../public/images/work/acs.jpg'
import Baroda from '../../public/images/work/baroda.jpg'
import SlideCard from '../slide-card/SlideCard'
import { Slide } from '../slide/slide'
import React from 'react'

export const SlideCards = () => {

  const slides = [
    <SlideCard
      image={Locker}
      title="Locker Relocation"
      desc="Secure relocation of bank lockers executed with strict safety protocols, ensuring zero disruption to branch operations."
    />,
    <SlideCard
      image={Shifting}
      title="Branch Shifting"
      desc="Complete shifting of furniture, lockers, and equipment with proper planning, handling, and minimal downtime for banking services."
    />,
    <SlideCard
      image={Baroda}
      title="Confidential Disposal"
      desc="Secure and compliant disposal of scrap materials including old equipment and assets, with full audit documentation."
    />
  ]
  
  return (
    <Slide
    slides={slides}
    navigation={true}
    num={1}
    customPagination={true}
    autoplay={false}
    pagination={true}
    />
  )
}
