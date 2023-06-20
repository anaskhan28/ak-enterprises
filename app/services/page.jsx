import React from 'react'
import './services.scss';
import Cards from '@/components/card/Cards';
import HeaderSection from '@/components/header-section/HeaderSection';

const services = () => {
  return (
    <section className="service-section">
     <HeaderSection subtitle='we buy & sell' about="All Services"/>

      <div className="service-cards">
      <Cards/>
      </div>
    </section>
  )
}

export default services