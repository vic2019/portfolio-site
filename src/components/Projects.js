import React from 'react';
import { projectCards } from './projectCards';

export default function Projects() {
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className='project-container'>
        {projectCards}
      </div>
    </div>
  );
}