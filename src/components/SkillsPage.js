import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
import { Button } from './Button';
import './SkillsPage.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= '/videos/skillsvideo1.mp4' autoPlay loop muted />
      <h1>
        <Typewriter
          onInit = {(typewriter) => {
          typewriter
            .typeString("SKILLS")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("JAVASCRIPT REACT NODE")
            .start();
          typewriter
            .typeString("")
            .callFunction(() => {
          })
            .pauseFor(4000)
            .deleteAll()
            .typeString("SKILLS")
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

export default HeroSection;