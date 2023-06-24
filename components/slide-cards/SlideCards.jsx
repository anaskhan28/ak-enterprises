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
        image={Demolish}
        title="Demolition"
        desc="Successfully undertook the task of relocating Bank of Baroda's Navi Mumbai branch to the Regional Branch. 
        This comprehensive project involved not only the physical shifting of the branch but also the diligent 
        execution of demolition work within the specified timeframe. Our team meticulously carried out the
         demolition work, ensuring all necessary protocols were followed to maintain safety and efficiency. "
        />,
        <SlideCard
        image={Shifting}
        
        title="Shifting"
        desc=" Worked at Union Bank of India Boisar branch, located in Tarapur Research Center. 
        With meticulous planning and efficient execution, we managed to shift all the furniture, lockers, 
        and electronic equipment of the bank securely. Our dedicated team ensured the utmost 
        care and attention to detail throughout the entire process, guaranteeing the safety 
        and integrity of all items."
        />,
        <SlideCard
        image={Chair}
        
        title="Buying"
        desc="Recently completed a successful procurement endeavor with Indian Bank across the Mumbai region. As part of this initiative, 
        we purchased all the chairs required by Indian Bank's branches in the area. Our team diligently 
        negotiated and ensured that we provided the best price possible for the chairs, guaranteeing a
         mutually beneficial agreement for both parties involved."
        />,
        <SlideCard
        image={Acs}
        
        title="Scrap"
        desc="Successfully collaborated with the Central Bank of India Colaba Branch for a noteworthy project. In this venture, 
        we were entrusted with the responsibility of purchasing all the scrap materials, including counter
         tables, air conditioning units, and various other items. We meticulously assessed each item and 
         offered the bank the best possible price, ensuring a fair and transparent transaction. "
        />,
        <SlideCard
        image={Locker}
        
        title="Locker"
        desc="Ssuccessful relocation of Canara Bank of India's lockers from the Navi Mumbai branch to the Mumbai 
        Branch. Our company efficiently executed the task, ensuring the safe and secure transfer of all 
        lockers. With meticulous planning and attention to detail, our dedicated team handled the 
        relocation process with utmost care. We prioritized the security of the lockers and ensured 
        that each one was carefully transported to its new location. "
        />,
        <SlideCard
        image={Baroda}
        
        title="Demolishing & Shifting"
        desc="Successful completion of our company's project involving the demolition and relocation of Bank of Baroda Ghansoli branch. With careful planning
         and meticulous execution, we efficiently demolished the existing branch within the designated 
         timeframe. Our dedicated team ensured that all necessary safety measures were implemented 
         throughout the demolition process. "
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
