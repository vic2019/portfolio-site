import React from 'react';
import dictionaryPic from '../images/dictionary.png';
import calendarPic from '../images/calendar.png';
import portfolioPic from '../images/portfolio.png';

export function Dictionary() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={dictionaryPic}
        alt=''
      />
      <p>
        An dictionary browser extension with over 130 average dail­y users.
      </p>
      <p>
        The extension is written with plain JavaScript using AJAX and AWS Lambda as a proxy to fetch data. It recursively maps XML data to HTML DOM elements for display, creates a bookmark folder for saved entries, and scans the folder to avoid duplicates.
      </p>
      <p><a 
        href='https://addons.mozilla.org/en-US/firefox/addon/learners-dictionary/'
        rel='noopener noreferrer'
        target='_blank'
      >
        Firefox extension listing
      </a></p>
      <p><a 
        href='https://chrome.google.com/webstore/detail/merriam-websters-learners/bibagmeonfmaeiicmgbngjdjahaaejll?fbclid=IwAR2la6FKDgBVsxUAEtmn4T_5p-mrWmjP7zUeWCq9b4rVtzC2badUZ9QhKMs'
        rel='noopener noreferrer'
        target='_blank'
      >
        Chrome web store listing
      </a></p>
      <p><a 
        href='https://github.com/vic2019/dictionary-firefox-extension'
        rel='noopener noreferrer'
        target='_blank'
      >
        Source
      </a></p>
    </div>
  )
}

export function Calendar() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={calendarPic}
        alt=''
      />
      <p>
        A React web app deployed on AWS with 
          <ul>
            <li>Ant Design components,</li> 
            <li>NoSQL database (DynamoDB),</li> 
            <li>REST API,</li> 
            <li>user authentication, and</li> 
            <li>social media integration (through AWS Cognito)</li>
          </ul>
      </p>
      <p><a 
        href='https://lifecalender.me/'
        rel='noopener noreferrer'
        target='_blank'
      >
        Demo
      </a></p>
      <p><a 
        href='https://github.com/vic2019/life-calendar'
        rel='noopener noreferrer'
        target='_blank'
      >
        Source
      </a></p>
    </div>
  )
}

export function Portfolio() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={portfolioPic}
        alt=''
      />
      <p>
        This portfolio page.
      </p>
      <p>
        Animation was done with react-spring. I did not use any other UI library.
      </p>
      <p>
        As an exercise, I used AWS lambda (Node.js) and SNS to forward any message submited in the contact form below to my cell phone. 
      </p>
      <p><a 
        href='https://github.com/vic2019/portfolio-site'
        rel='noopener noreferrer'
        target='_blank'
      >
        Source
      </a></p>
    </div>
  )
}

export const projectCards = [
  Dictionary,
  Calendar,
  Portfolio
];