import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Button } from './Button';

function Header(){
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);
  
  window.addEventListener('resize', showButton);

    return (
      <React.Fragment>
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
                HOTFLIX
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link
                    to='/home'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/comingSoon'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Coming Soon
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/registeration'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
            </div>
          </nav>
        </>
      </React.Fragment>
    );
  }

export default Header;
