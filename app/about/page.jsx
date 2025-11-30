import HeaderSection from '@/components/header-section/HeaderSection'
import React from 'react'
import './about.scss';
import Section from '@/components/section/Section';

const About = () => {
  return (
    <section className="about-container">
      <HeaderSection 
        subtitle='Who We Are'
        about='About Us'
      />

      <div className="about-content">
        <p className="para-1">
          AK Enterprise Group is a trusted family-run business supporting banks with secure 
          locker handling, vault maintenance, confidential disposal, and complete branch shifting 
          solutions. Our trained professionals operate in highly sensitive banking environments 
          while maintaining strict safety and confidentiality protocols.
        </p>

        <p className="para-2">
          With decades of operational experience across Mumbai, Thane, and Navi Mumbai, we have 
          successfully delivered secure locker AMC, vault servicing, compliant scrap disposal, 
          and branch modernization projects for multiple leading banks. Every task is executed 
          with proper documentation, audit-readiness, and minimal disruption to banking services.
        </p>
      </div>

      <Section 
        title='Need Secure Branch Support?'
        about='Contact Us'
        desc='We provide secure locker operations, confidential disposal, and smooth branch shifting 
        with full compliance and zero disruption. Let’s talk about your branch requirement.'
        button1='Enquiry'
        button2='Our Services'
        link1='contact'
        link2='services'
      />
    </section>
  )
}

export default About
