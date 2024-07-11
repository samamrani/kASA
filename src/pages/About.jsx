import React from 'react';
import Background from '../assets/images/Background.jpg'
import Accordion from '../components/Accordion';
import "../styles/pages/_about.scss"

function About() {
  return (
    <div className='about'>{/* Conteneur principal de la page About */}
      <div className='about_img'>
        <img src={Background} alt='Montagne' />
      </div>
      <Accordion />{/* afficher les sections de l'accordéon */}
    </div>
  );
}

export default About;
 