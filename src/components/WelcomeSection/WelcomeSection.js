import React from 'react'
import './WelcomeSection.css'
import video1 from '../../media/videos/video-1.mp4'
import { Button } from '..'
import { Link as ScrollLink } from 'react-scroll';

import '../../App.css'

function WelcomeSection() {
  return (
    <div className='welcome-container'>
      <video src={video1} autoPlay loop muted={true} />
        <h1>Hello there, I am Thao!</h1>
        <p>Welcome to my page</p>
        <div className='welcome-btns'>
          <ScrollLink to='introduction' spy={true} smooth={true} duration={100}>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              INTRODUCTION
            </Button>
          </ScrollLink>
          
          <ScrollLink to='skills' spy={true} smooth={true} duration={1000}>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              SKILLS
            </Button>
          </ScrollLink>
          
          <ScrollLink to='experience' spy={true} smooth={true} duration={1000}>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              EXPERIENCE
            </Button>
          </ScrollLink>
          
          <ScrollLink to='education' spy={true} smooth={true} duration={1000}>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
              EDUCATION
            </Button>
          </ScrollLink>
          
        </div>      
    </div>
  )
}

export default WelcomeSection
