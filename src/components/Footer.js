import React from 'react';
import './Footer.css';


import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              LUCAS DEV
              <i class='fab fa-react' />
            </Link>
          </div>
          <small class='website-rights'>LUCAS DEV © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/lucccas.pacheco/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              id='ancora'
              className='social-icon-link instagram'
              href='https://www.instagram.com/lucaspaccheco_/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/dev-lucccaslp'
              target='_blank'
              aria-label='Git Hub'
            >
              <i class='fab fa-github' />
            </a>
            
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/lucaslessapacheco/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link whatsapp'
              href='https://encurtador.com.br/ozGIV'
              target='_blank'
              aria-label='WhatsApp'
            >
              <i class='fab fa-whatsapp' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;