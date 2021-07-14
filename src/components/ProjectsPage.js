import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
import { Button } from './Button';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className='hero-container'>
      <video src= '/videos/skillsvideo1.mp4' autoPlay loop muted />
      <h1>
        <Typewriter
          onInit = {(typewriter) => {
          typewriter
            .typeString("PROJECTS")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("JOBS")
            .start();
          typewriter
            .typeString("")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("PROJECTS")
            .start();
          }}
         />
       </h1>
     
      <p>LET'S GO?</p>
      <div className='hero-btns'>
        

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
          
        >
          CONTACT 
        </Button>
      </div>
    </div>
  );
}

export default ProjectsPage;