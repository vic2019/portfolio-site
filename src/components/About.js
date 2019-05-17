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
        <p>You need the animation-primitive itself, and a special factory called animated. This library animates outside React (for performance reasons). </p>
        <p>Your view has to know how to handle the animated props you pass to it. This is what animated is there for, it extends native elements to receive animated values.</p>
        <ul>
         <li>blah asd b</li>
         <li>blah asd b blah asd b blah asd b</li>
         <li>ou need the animation-primitive itself, and a special factory called animated.</li>
        </ul>
      </div>
    </div>
  );
}