import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import navIcon from '../images/nav-icon.png';


function NavCollapsible ({ isOpen, toggle }) {
  const props = useSpring({
    top: isOpen? '0vh': '-60vh', // Can't be Number 0; must be Str '0'
    color: isOpen? '#ffffff': '#f5b041',
    config: {
      friction: 8,
      clamp: true
    }
  })
  
  const scrollTo = (section) => {
    return () => {
      toggle();
      try {
        window.scrollTo({
          top: document.getElementById(section).offsetTop,
          behavior: 'smooth'
        });
      } catch(err) {
        window.scrollTo(0, document.getElementById(section).offsetTop);
      }
    };
  }

  return (
    <animated.div className='nav-collapsible' style={props}>
      <div className='nav-cancel'>
        <span className='nav-cancel-hover' onClick={toggle}>{'\u00d7'}</span>
      </div>
      <div className='nav-option' onClick={scrollTo('home')}>
        Home
      </div>
      <div className='nav-option' onClick={scrollTo('about')}>
        About
      </div>
      <div className='nav-option' onClick={scrollTo('projects')}>
        Projects
      </div>
      <div className='nav-option' style={{paddingBottom: '2vh'}} onClick={scrollTo('contact')}>
        Contact
      </div>
    </animated.div>
  );
}


function NavToggle({ toggle }) {
  
  return (
    <div className='nav-toggle' onClick={toggle}>
      <img className='nav-icon' src={navIcon} alt=''/>
    </div>
  );
}


export default function Nav() {
  const [isOpen, set] = useState(false);
  
  const toggleNav = () => {
    set(!isOpen);
  }

  return (
    <>
      <NavCollapsible isOpen={isOpen} toggle={toggleNav}/>
      <NavToggle toggle={toggleNav}/>
    </>
  );
}