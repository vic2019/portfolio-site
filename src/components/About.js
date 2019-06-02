import React, { useState, useEffect } from 'react';
import bioPic from '../images/bio-pic.jpeg';
import cat from '../images/cat.jpeg';
import laptopPic from '../images/laptop3.jpeg';
import resume from '../resources/Resume_Victor_Wang.pdf';
import { useSpring, animated } from 'react-spring';

const imgSRCs = [bioPic, laptopPic, cat];

export default function About() {
  const [turned, set] = useState(0);
  const { transform, opacity } = useSpring({
    opacity: turned % 2? 1 : 0,
    transform: `rotateZ(${turned % 2? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const setBioPic = () => {
    setTimeout(() => {
      new Promise(resolve => void resolve(set(turned + 1)))
        .then(() => {
          const imgObj = document.getElementById(`img-${(turned - 1) % 2}`);
          if (!imgObj) return;
          imgObj.src = imgSRCs[(turned + 1) % 3];
        });
    }, 3000);
  }

  useEffect(setBioPic, [turned]);

  return (
    <div id='about'>
      <h1>About</h1>
      <div className='bio-pic-container'>
        <animated.img 
          className='bio-pic'
          id='img-0'
          src={imgSRCs[0]}
          alt=''
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        />
        <animated.img 
          className='bio-pic'
          id='img-1'
          src={imgSRCs[1]}
          alt=''
          style={{ opacity, transform: transform.interpolate(t => `${t} 
          rotateZ(180deg)`) }}
        />
      </div>
      <div className='bio-container'>
        <p>
          I am a full-stack web developer with a particular interest in modern JavaScript framework and the cloud. See my 
          <a 
            href={resume}
            rel='noopener noreferrer' 
            target='_blank' 
            style={{textDecoration: 'none', color: '#3f3fff', 
              fontWeight: 'bold'}}
          > resume</a>.
        </p>
        <p>
          I love building things and am committed to constantly learning and improving the quality of my work.
        </p>
        <p>
        Check out my projects!
        </p>
      </div>
    </div>
  );
}