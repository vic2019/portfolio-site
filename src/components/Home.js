import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const trigger = window.innerHeight * 0.4;

export default function Home() {
  const initial = useRef(true);
  const [{ opacity, bottom, visibility }, set] = useSpring(() => ({ 
    to: { opacity: 1, bottom: '2vh', visibility: 'visible' },
    from: { opacity: 0, bottom: '50vh', visibility: 'visible' },
    config: { friction: 20, mass: 2 },
    delay: 500,
    onStart: () => {
      if (initial.current) {
        initial.current = false;
        window.scrollTo(0, 0);
      }
    }
  }));

  const bind = useGesture(
    { onScroll: () => {
      if (window.pageYOffset < trigger) {
        set({
          to: {opacity: 1, bottom: '2vh', visibility: 'visible'}, 
          // ^ visibility is required here
          from: {opacity: 0, bottom: '27vh', visibility: 'visible'}
        });
      } else {
        set({
          to: [
            {opacity: 0, bottom: '27vh', visibility: 'visible'}, 
            {visibility: 'hidden'}
          ],
          from: {opacity: 1, bottom: '2vh', visibility: 'visible'},
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
        <animated.p style={{bottom}}>Hello, I'm <span>Victor Wang</span>.<br/>
        Welcome to my portfolio :)</animated.p>
      </animated.div>
    </div>
  );
}