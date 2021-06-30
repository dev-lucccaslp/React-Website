import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= '/videos/video-1.mp4' autoPlay loop muted />
      <h1>
        <Typewriter
          onInit = {(typewriter) => {
          typewriter
            .typeString("MY NAME IS LUCAS")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("FULL STACK DEVELOPER")
            .start();
          typewriter
            .typeString("")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("MY NAME IS LUCAS")
            .start();
          }}
         />
       </h1>
     
      <p>HOW CAN I HELP YOU?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJECTS
        </Button>

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

export default HeroSection;