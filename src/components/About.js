import React, { useState, useEffect, useRef } from 'react';
import bioPic from '../images/bio-pic.png';
import cat from '../images/cat.png';
import laptop1 from '../images/laptop1.png';
import laptop2 from '../images/laptop2.png';
import laptop3 from '../images/laptop3.png';
import resume from '../resources/Resume Victor Wang.pdf';
import { useSpring, animated } from 'react-spring';

const imgSRCs = [bioPic, laptop2, cat];

export default function About() {
  const [turned, set] = useState(0);
  const { transform, opacity } = useSpring({
    opacity: turned % 2? 1 : 0,
    transform: `rotateZ(${turned % 2? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  useEffect(() => {
    setTimeout(() => {
      new Promise(resolve => resolve(set(turned + 1)))
        .then(() => document.getElementById(`img-${(turned - 1) % 2}`).src 
          = imgSRCs[(turned + 1) % 3]);
    }, 1800);
  }, [turned]);

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
        <p>I am a self-taught developer (in training) seeking a junior developer position. <a 
          href={resume}
          rel='noopener noreferrer' 
          target='_blank' 
          style={{textDecoration: 'none', color: '#3f3fff', fontFamily: ['Calibri', 'Arial'], fontWeight: 'bold'}}
        >(Resume)</a></p>
        <p>Technologies that I’ve worked with—</p>
        <ul>
          <li>Front-end: <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, <b>Redux</b>, <b>react-spring</b>, <b>Jest</b></li>
          <li>Back-end: <b>Node.js</b>, <b>MySQL</b>, <b>AWS (Lambda, DynamoDB, CloudFront, Cognito, SES, SNS, etc.)</b></li>
        </ul>
        <p>In July 2018, I stumbled upon "<i>Automate the Boring Stuff with Python</i>" by Al Sweigart, and was immediately hooked.</p>
        <p>At the time I was working to become an attorney in California, but as I delved deeper into computer programming, my passion for coding grew until it dawned on me that I must turn this hobby into a career!</p> 
        <p>I love building things, and I’m committed to continually learning and improving the quality of my work to exceed expectations. Please check out my projects!</p>
      </div>
    </div>
  );
}