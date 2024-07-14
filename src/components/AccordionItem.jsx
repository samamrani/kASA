import React, { useState } from 'react';
import "../styles/components/_accordionItem.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);// Déclaration d'un état local isOpen avec useState

   // Fonction pour basculer l'état de isOpen
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const isArray = (value) => value instanceof Array; 

  return (
    <div className='accordion_item'>
      <div className='accordion_title' onClick={toggleAccordion}> {/* Titre de l'item de l'accordéon, cliquable */}
        <h3>{title}</h3>
         <span>{isOpen ?  <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i> }</span>
      </div>
       {/* Condition pour afficher le contenu seulement si isOpen est true */}
      {isOpen && (
        <div className='accordion_content'>
       {isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
          

            
           {/* Affichage du contenu passé en prop */}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
