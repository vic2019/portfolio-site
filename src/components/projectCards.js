import React from 'react';
import dictionaryPic from '../images/dictionary.png';
import calendarPic from '../images/calendar.png';
import portfolioPic from '../images/portfolio.png';
import flickpicksPic from '../images/flickpicks.png';

function Dictionary() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={dictionaryPic}
        alt=''
      />
      <p>
        A dictionary browser extension: Users may look up words and bookmark them with a simple click. It has over 280 average dailly users.
      </p>
      <p>
        The extension is written in plain JavaScript and uses AJAX and AWS Lambda as a proxy to fetch data. 
      </p>
      <p>
        It recursively maps XML data to HTML DOM elements for display, creates a bookmark folder for saved entries, and scans the folder to avoid duplicates.
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

function Calendar() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={calendarPic}
        alt=''
      />
      <p>
        A React web app that creates a personalized visual display of a user's lifespan (for fun and as a tool for self-reflection).
      </p>
          <ul>
            <li>Ant Design components</li> 
            <li>Deployed on AWS S3 and CloudFront</li>
            <li>NoSQL database (DynamoDB)</li>
            <li>REST API through AWS API Gateway and Lambda</li> 
            <li>User management through AWS Cognito 
              (with social media login)</li>
          </ul>
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

function Flickpicks() {
  return (
    <div className='project-card'>
      <img 
        className='project-pic'
        src={flickpicksPic}
        alt=''
      />
      <p>
        A React-Redux web app that allows users to discover movies by title, year, and genre. Users may save movies, tag them, and filter saved movies by tags.
      </p>
      <ul>
        <li>Mobile first design</li>
        <li>React, Redux, React-Router</li>
        <li>Sharable URL for movie pages</li>
        <li>Node.js/Express, Docker</li>
        <li>This app uses the TMDb API</li>
      </ul>
      <p>This project is a work in progress and will be expanded in the future.</p>
      <p><a 
        href='http://flickpicks.victorwang.info/'
        rel='noopener noreferrer'
        target='_blank'
      >
        Demo
      </a></p>
      <p><a 
        href='https://github.com/vic2019/flickpicks'
        rel='noopener noreferrer'
        target='_blank'
      >
        Source
      </a></p>
    </div>
  )
}

function Portfolio() {
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
      <ul>
        <li>Animation is done with react-spring</li>
        <li>The contact form at the bottom forwards messages to me by email and text through AWS SES and SNS.</li>
      </ul>
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
  Flickpicks,
  Calendar,
  Portfolio
];