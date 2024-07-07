import React from 'react';
import AccordionItem from './AccordionItem';
import "../styles/components/Accordion.scss";

function Accordion() {
  // Données de l'accordéon sous forme d'un tableau d'objets
  const accordionData = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
      title: 'Respect',
      content: ' La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      content: ' Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question..'
    },
    {
      title: 'Sécurité',
      content: '  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères desécurité établis par nos services. En laissant une note aussi bienà l&apos;hôte qu&apos;au locataire, cela permet à nos équipes devérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes..'
    }
  ];

  return (
    <div className='accordion'>{/* Conteneur principal de l'accordéon */}
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
