import React from 'react'
import { Content } from '@/utils/CardContent'
import Card from './Card'
const Cards = () => {
  return (
    <>
    {
      Content.map((content, index) => (
        <Card
        key={index}
         image={content.img}
         title={content.title}
         subtitle={content.subtitle}
         desc={content.des}
        
        />
        

       
      ))
    }
    </>
  )
}

export default Cards