import React from 'react'
import './services.scss';
import Cards from '../../components/card/Cards.jsx'


const services = () => {
  return (
    <section className="service-section">
      <div className="service-container">
      <div className="service-heading">
        <div className="service-subtitle">
        we buy & sell
        </div>
        <div className="service-about">
          All Services
        </div>
      </div>
      </div>

      <div className="service-cards">
      <Cards/>
      </div>
    </section>
  )
}

export default services