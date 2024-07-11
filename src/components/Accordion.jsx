import React from 'react';
import AccordionItem from './AccordionItem';
import "../styles/components/_accordion.scss";

import accordionData from '../data/Collapses.json'; 

function Accordion() {
 

  return (
    <div className='accordion'>{/* Conteneur principal de l'accordéon */}
      {accordionData.map((item) => (
        //utilise une clé unique  et passe les props title et content pour afficher les données
         <AccordionItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
