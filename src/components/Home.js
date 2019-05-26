import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const trigger = window.innerHeight * 0.4;
window.scrollTo(0, 0);


export default function Home() {
  const [{ opacity, bottom, visibility }, set] = useSpring(() => ({ 
    to: {opacity: 1, bottom: '0vh'},
    from: {opacity: 0, bottom: '50vh', visibility: 'visible'},
    config: { friction: 20, mass: 2 },
    delay: 600,
  }));

  const bind = useGesture(
    { onScroll: _ => {
      if (window.pageYOffset <= trigger) {
        set({
          to: {opacity: 1, bottom: '0vw', visibility: 'visible'},
          from: {opacity: 0, bottom: '25vw', visibility: 'visible'}
        });
      } else {
        set({
          to: [
            {opacity: 0, bottom: '25vw', visibility: 'visible'},
            {visibility: 'hidden'}
          ],
          from: {opacity: 1, bottom: '0vh', visibility: 'visible'},
          config: { clamp: true, friction: 0 }
        });
      }
    }}, 
    { domTarget: window }
  );

  useEffect(bind, [bind]);

  return (
    <div id='home'>
      <animated.div style={{opacity, visibility}} className='greeting'>
        <animated.p style={{bottom}}>Hello, I'm <span>Victor Wang</span>.<br/>
        Welcome to my portfolio :)</animated.p>
      </animated.div>
    </div>
  );
}