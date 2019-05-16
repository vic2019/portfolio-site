import React, { useState } from 'react';
import icon from './images/nav-icon.png';
import { useSpring, animated } from 'react-spring';


function NavCollapsible ({ isOpen, toggle }) {
  const props = useSpring({
    top: isOpen? '0vh': '-80vh' // Can't be Number 0; must be Str '0'
  })
  
  const scrollTo = (section) => {
    return () => {
      window.scrollTo(0, document.getElementById(section).offsetTop);
      toggle();
    };
  }

  return (
    <animated.div id='nav-collapsible' style={props}>
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
    <div id='nav-toggle' onClick={toggle}>
      <img id='nav-icon' src={icon} alt='Menu'/>
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