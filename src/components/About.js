import React from 'react';
import bioPic from './images/bio-pic.jpg';

export default function About() {
  return (
    <div id='about'>
      <h1>About</h1>
      <div className='bio-pic-container'>
        <img 
          className='bio-pic'
          src={bioPic}
          alt=''
        />
      </div>
      <div className='bio-container'>
        <p>Hello, my name is Victor. I am a self-taught developer (in training) seeking a junior developer position.</p>
        <p>Technologies that I’ve worked with—</p>
        <br/><ul>
          <li>Front-end: <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, <b>Redux</b>, <b>react-spring</b>, <b>Jest</b></li>
          <li>Back-end: <b>Node.js</b>, <b>MySQL</b>, <b>AWS (Lambda, DynamoDB, CloudFront, Cognito, Simple Email Service)</b></li>
        </ul><br/>
        <p>In July 2018, I stumbled upon "<i>Automate the Boring Stuff with Python</i>" by Al Sweigart, and was immediately hooked.</p>
        <p>At the time I was working to become an attorney in California, but as I delved deeper into computer programming, my passion for coding grew until it dawned on me that I must turn this hobby into a career!</p> 
        <p>I love building things, and I’m committed to continually learning and improving the quality of my work to exceed expectations. Please check out my projects!</p>
      </div>
    </div>
  );
}