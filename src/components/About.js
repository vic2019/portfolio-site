import React, { useState, useEffect } from 'react';
import bioPic from '../images/bio-pic.jpeg';
import cat from '../images/cat.jpeg';
import laptopPic from '../images/laptop3.jpeg';
import resume from '../resources/Resume Victor Wang.pdf';
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
    }, 2200);
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
          Hello, I am a self-taught web developer seeking work in a junior developer role. See my 
          <a 
            href={resume}
            rel='noopener noreferrer' 
            target='_blank' 
            style={{textDecoration: 'none', color: '#3f3fff', 
              fontWeight: 'bold'}}
          > resume</a>.
        </p>
        <p>Technologies I’ve worked with—</p>
        <ul>
          <li>
            Frontend: <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>jQuery</b>, <b>React</b>, <b>Redux</b>, <b>react-spring</b>, <b>Jest</b>
          </li>
          <li>
            Backend: <b>Node.js</b>, <b>Python</b>, <b>MySQL</b>, <b>AWS (Lambda, API Gateway, DynamoDB/NoSQL, Route 53, CloudFront, Cognito, SNS, etc)</b>
          </li>
        </ul>
        <p>
          In August 2018, I stumbled upon <i>Automate the Boring Stuff with Python</i> by Al Sweigart, and was immediately hooked. I downloaded an IDE and began playing with it. Before long, I would find myself on Stack Overflow looking for a solution to problems that would not have made any sense to me a mere few months ago. The experience was exhilarating. Eventually, I was drawn to web applications as it is an easy medium to create interactive programs and share it with others.
        </p>
        <p>
          At the time I was working to become an attorney in California, but as I delved deeper into computer programming, my passion for coding grew until it dawned on me that I must turn this hobby into a career!
        </p> 
        <p>
          I love building things, and I’m committed to continually learning and improving the quality of my work to exceed expectations. Please check out my projects! And let me know what I can do for you.
        </p>
        <p>
          Thanks!
        </p>
      </div>
    </div>
  );
}