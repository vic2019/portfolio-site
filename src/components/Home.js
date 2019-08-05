import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const trigger = window.innerHeight * 0.38;

const arrowStyle = {
  width: 0, 
  height: 0, 
  borderLeft: '11px solid transparent',
  borderRight: '11px solid transparent', 
  borderTop: '13px solid #fff'
}

export default function Home() {
  const initial = useRef(true);
  const [{ opacity, bottom, visibility }, set] = useSpring(() => ({ 
    to: { opacity: 1, bottom: '3vh', visibility: 'visible' },
    from: { opacity: 0, bottom: '50vh', visibility: 'visible' },
    config: { friction: 20, mass: 2 },
    delay: 500,
    onStart: () => {
      if (initial.current) {
        window.scrollTo(0, 0);
        initial.current = false;
      }
    }
  }));

  const scrollDown = () => {
    try {
      window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
      });
    } catch(err) {
      window.scrollTo(0, document.getElementById('about').offsetTop);
    }
  }

  const bind = useGesture(
    { onScroll: () => {
      if (window.pageYOffset < trigger) {
        set({
          to: {opacity: 1, bottom: '3vh', visibility: 'visible'}, 
          // ^ visibility is required here
          from: {opacity: 0, bottom: '30vh', visibility: 'visible'}
        });
      } else {
        set({
          to: [
            {opacity: 0, bottom: '30vh', visibility: 'visible'}, 
            {visibility: 'hidden'}
          ],
          from: {opacity: 1, bottom: '3vh', visibility: 'visible'},
          config: { clamp: true, friction: 0 }
        });
      }
    }}, 
    { domTarget: window }
  );

  useEffect(bind, [bind]);

  return ( 
    <div id='home'>
      <animated.div style={{opacity, visibility}} id='greeting'>
        <div style={{height: '26vh'}}/>
        <animated.p style={{bottom}}>Hello, I'm <span>Victor Wang</span>.<br/>
        Welcome to my portfolio :)</animated.p>
        <div style={{height: '23vh'}}/>
        <animated.span 
          className='arrow-down-button'
          style={arrowStyle}
          onClick={scrollDown}
        />
      </animated.div>
      
    </div>
  );
}