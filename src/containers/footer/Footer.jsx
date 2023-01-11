import React from 'react'
import './footer.css';
import axgLogo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className='axg__footer section__padding'>
    <div className='axg__footer-heading'>
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
    </div>
    <div className='axg__footer-btn'>
      <p>Request Early Access</p>
    </div>

    <div className='axg__footer-links'>
      <div className='axg__footer-links-logo'>
        <img src={axgLogo} alt='logo'/>
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
      </div>
      <div className='axg__footer-links-div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='axg__footer-company-div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='axg__footer-touch-div'>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
    <div className='axg__footer-copyright'>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer