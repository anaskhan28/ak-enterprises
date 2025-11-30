'use client'
import HeaderSection from '@/components/header-section/HeaderSection'
import React from 'react'
import Image from 'next/image'
import Map from '../../public/images/map.svg';
import Call from '../../public/images/call.svg';
import Gmail from '../../public/images/gmail.svg';
import './contact.scss';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjokv");

  if (state.succeeded) {
    Swal.fire({
      icon: 'success',
      titleText: "Message sent successfully ✅",
      text: "Our team will get in touch with you shortly.",
      showConfirmButton: false,
      timer: 2000,
    });
    window.history.back();
  }

  return (
    <section className="contact-container">
      <HeaderSection subtitle='Have a branch requirement?' about='Contact Us' />

      <div className="contact-section">
        <div className="title">Get in Touch with Our Operations Team</div>
        <div className="line"></div>

        <div className="contact-content">
          <div className="contact-form">
            <h1>Let’s Talk</h1>
            <form
              onSubmit={handleSubmit}
              className='form'
            >
              <input
                required
                type='text'
                name='name'
                placeholder='Your Name / Designation'
              />

              <input
                required
                type='email'
                name='email'
                placeholder='Your Official Email'
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                required
                type='text'
                name='subject'
                placeholder='Bank / Branch Name'
              />

              <textarea
                required
                name='message'
                placeholder='Share your requirement (locker work, branch shifting, disposal, etc.)'
              >
              </textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

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
              <Image className='img' src={Map} alt="Office location" />
              <p className="contact-address">
              Shop no 13 opposite Omkaleshwar
 Mandir, near Daighar Police Station,
 Thane, Maharashtra 400612
              </p>
            </div>

            <div style={{ marginTop: '0.4rem' }} className="contact">
              <Image className='img' src={Call} alt="Phone" />
              <span>+91 98924 93707 / +91 89289 63329</span>
            </div>

            <div style={{ marginTop: '1rem' }} className="contact">
              <Image className='img' src={Gmail} alt="Email" />
              <span>
                <a href="mailto:info@akenterprisegroup.in">
                  info@akenterprisegroup.in
                </a>
              </span>
              <span>
                <a href="mailto:akenterprises.dealers@gmail.com">
                  akenterprises.dealers@gmail.com
                </a>
              </span>
            </div>

            <iframe
              className='maps'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078.4233137392034!2d73.04560827545748!3d19.14146094991371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1f341292e25%3A0xd85f1e13cd24fe67!2sClassic%20Mart!5e1!3m2!1sen!2sin!4v1764504948834!5m2!1sen!2sin"              width="400"
              height="300"
              style={{ border: 0, marginTop: '2rem', width: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
