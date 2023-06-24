'use client'
import HeaderSection from '@/components/header-section/HeaderSection'
import React, { useState } from 'react'
import Image from 'next/image'
import Map from '../../public/images/map.svg';
import Call from '../../public/images/call.svg';
import Gmail from '../../public/images/gmail.svg';
import './contact.scss';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)


const contact = () => {
  
  const [state, handleSubmit] = useForm("meqbjokv");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleMesage = () =>{
//     setTimeout(()=>{
//       setIsLoading(true)
//     }, 1000)
//     setIsLoading(false)
//   if (state.succeeded) {
//      Swal.fire({
//       icon: 'success',
//       titleText:  "Consider it done 🎉",
//   showConfirmButton: false,

//     })
//     window.history.back()

    
    
    
// }


//   }

     if (state.succeeded) {
       Swal.fire({
        icon: 'success',
        titleText:  "Consider it done 🎉",
    showConfirmButton: false,
  
      })
      window.history.back()
  
      
      
      
  }


  return (
  <section  className="contact-container">
    <HeaderSection subtitle='You have something' about='Contact Us'/>
    <div  className="contact-section">
      <div className="title">Get In Touch</div>
      <div className="line"></div>

      <div  className="contact-content">
        <div className="contact-form">
          <h1>Let's Talk</h1>
          <form
          onSubmit={handleSubmit}
            className='form'>
            <input 
            required 
            type='text' 
            name='name' 
            
           
            placeholder='Your Name'/>

            <input required 
            type='email' name='email' 
            placeholder='Your Email'/>

              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

            <input required 
            type='text' name='subject' 
           
            placeholder='Your Subject'/>

            <textarea 
            required 
            type='text' name='message' 
            
            placeholder='Your Message'>
            </textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                {/* {
                isLoading ? <Rings
              height="50"
              width="50"
              color="#567AFF"
              radius="6"
              wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />: <button
            onClick={handleMesage}
            type='submit'
            disabled={state.submitting}
            >
              Send
         </button>} */}
         <button
            type='submit'
            disabled={state.submitting}
            >
              Send
         </button>
            
          </form>
        </div>
        <div data-aos="fade-up" className="contact-connect">
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
          <span><a href="mailto:akenterprises.dealers@gmail.com">akenterprises.dealers@gmail.com</a></span>
          </div>
          <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8739057493985!2d73.05822577545226!3d19.113186882099118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c048869bac53%3A0xf15fca7029829cee!2sNew%20Ekta%20Weigh%20Bridge!5e0!3m2!1sen!2sin!4v1687312897254!5m2!1sen!2sin" 
          width="400" height="300" style={{border: 0, marginTop: '2rem', width: '100%'}}  allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default contact