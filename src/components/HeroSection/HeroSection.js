import React from 'react'
import { Button } from '..'
import './HeroSection.css'

function HeroSection({
  lightBg, 
  topLine, 
  lightTextDesc, 
  headline, 
  description, 
  buttonLabel,
  buttonLabel2, 
  img, 
  alt, 
  imgStart,
  url,
  url2,
  name
}) {
  return (
    <>
      <div className='hero-section' id={name}>
        <div 
          className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
          <div className='container'>
            <div className='row home__hero-row'
              style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  {topLine && <div className='top-line'>{topLine}</div>}
                  <h1 className='heading'>{headline}</h1>
                  <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                  {url && <div className='home__hero-button'>
                    <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => {window.open(url, '_blank')}}>{buttonLabel} </Button>
                  </div>}
                  {url2 && <div className='home__hero-button'>
                    <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => {window.open(url2, '_blank')}}>{buttonLabel2} </Button>
                  </div>}
                </div>
              </div>

              <div className='col'>
                <div className='home_hero-img-wrapper'>
                  <img src={img} alt={alt} className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection

