import React from 'react';
import './Footer.css';
import reactLogo from '../../media/images/reactLogo.svg'
import linkedInLogo from '../../media/images/linkedin.png'
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Made with React</h2>
            <img src={reactLogo} className='react-logo' alt='react'/>
          </div>
          <div class='footer-link-items'>
            <h2>Connect with me</h2>
            <a href='https://www.linkedin.com/in/thao-nguyen-ngoc/' rel="noreferrer" target='_blank'>
              <img src={linkedInLogo} className='linkedin-logo' alt='linkedin'/>
            </a>
          </div>
        </div>
      </div>
      <section class='credit'>
      <div className='footer-link-wrapper'>
        <div class='credit-wrapper'>
          <MdFingerprint className='thao-icon' />
          <br/>
          <small class='website-rights'>Thao Nguyen-Ojala © 2021</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;