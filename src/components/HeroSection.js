import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= '/videos/video-1.mp4' autoPlay loop muted />
      <h1>MY NAME IS LUCAS</h1>
      <p>CAN I HELP YOU?</p>
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
          onClick={console.log('hey')}
        >
          CONTACT 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;