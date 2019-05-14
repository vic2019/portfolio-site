import React, { useState } from 'react';
import icon from './images/nav-icon.png';
import { useSpring, animated } from 'react-spring';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      {navOpen? <div id='nav'/>: null}
      <NavToggle toggle={toggleNav}/>
    </>
  );
}

function NavToggle({ toggle }) {

  return (
    <div id='nav-toggle' onClick={toggle}>
      <img id='nav-icon' src={icon} alt='Menu'/>
    </div>
  );
}