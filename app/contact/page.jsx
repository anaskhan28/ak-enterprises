import HeaderSection from '@/components/header-section/HeaderSection'
import React from 'react'
import Image from 'next/image'
import Map from '../../public/images/map.svg';
import Call from '../../public/images/call.svg';
import Gmail from '../../public/images/gmail.svg';
import './contact.scss';

const contact = () => {
  return (
  <section className="contact-container">
    <HeaderSection subtitle='You have something' about='Contact Us'/>
    <div className="contact-section">
      <div className="title">Get In Touch</div>
      <div className="line"></div>

      <div className="contact-content">
        <div className="contact-form">
          <h1>Let's Talk</h1>
          <form className='form' action="">
            <input type='text' placeholder='Your Name'/>
            <input type='text' placeholder='Your Email'/>
            <textarea placeholder='Your Message'>


            </textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="contact-connect">
          <div className="contact">
          <Image className='img' src={Map}/>
          <p className="contact-address">Shop No: 35 Star Market Phase 2 opp New Ekta 
          Weigh Bridge Dahisar Navi Mumbai 410210</p>
          </div>
          <div style={{marginTop: '0.4rem'}}  className="contact">
          <Image className='img' src={Call}/>
          <span>9892493707/8928963329</span>
          </div>
          <div style={{marginTop: '1rem'}} className="contact">
          <Image className='img' src={Gmail}/>
          <span>akenterprises.dealers@gmail.com</span>
          </div>
          <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8739057493985!2d73.05822577545226!3d19.113186882099118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c048869bac53%3A0xf15fca7029829cee!2sNew%20Ekta%20Weigh%20Bridge!5e0!3m2!1sen!2sin!4v1687312897254!5m2!1sen!2sin" 
          width="400" height="300" style={{border: 0, marginTop: '2rem'}}  allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default contact