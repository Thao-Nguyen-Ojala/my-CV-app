import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { LinkButton } from '..';
import { MdFingerprint } from 'react-icons/md'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, [])
  
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <MdFingerprint className='navbar-icon' /> Thao's cv
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/porfolio' className='nav-links' onClick={closeMobileMenu}>
                Porfolio
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <LinkButton className='btn-links' buttonStyle='btn--outline' directTo='contact' >CONTACT ME</LinkButton>
                ) : (
                <LinkButton className='btn-links' buttonStyle='btn--outline' directTo='contact' onClick={closeMobileMenu}>CONTACT ME</LinkButton>
                )
              }
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
