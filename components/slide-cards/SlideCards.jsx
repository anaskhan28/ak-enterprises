import Demolish from '../../public/images/work/demolish.png'
import Shifting from '../../public/images/work/shifting.png'
import SlideCard from '../slide-card/SlideCard'
import { Slide } from '../slide/slide'
import React from 'react'

export const SlideCards = () => {

    const slides = [
        <SlideCard
        image={Demolish}
        title="Shifting & Demolition"
        desc=" Worked for Bank of Baroda Navi Mumbai branch, the work included
        shifting of branch from Navi Mumbai Branch to Regional Branch. We also
        did demolition work properly with the given period."
        />,
        <SlideCard
        image={Shifting}
        title="Shifting & Demolition"
        desc=" Worked for Bank of Baroda Navi Mumbai branch, the work included
        shifting of branch from Navi Mumbai Branch to Regional Branch. We also
        did demolition work properly with the given period."
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
