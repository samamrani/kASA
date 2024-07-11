import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import records from '../data/Data.json';
import Tags from '../components/Tags.jsx';
import AccordionItem from '../components/AccordionItem.jsx';
import "../styles/pages/_ficheLogement.scss";
import Carrousel from '../components/Carrousel.jsx';

const FicheLogement = () => {
  // ID du logement depuis l'URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const logementId = params.get('_id');

  // Trouve le logement correspondant à l'ID
  const logement = records.find((record) => record.id === logementId);

  // État pour gérer la note
  const [rating, setRating] = useState(logement ? logement.rating : 0);

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (value) => {
    setRating(value);
   
    console.log(`Nouvelle note: ${value}`);
  };
// ??????????????AFFICHE LA PAGE 404
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const etoile = [1, 2, 3, 4, 5];

  return (
    <div className='logement'>
      {/* <img className='logement_cover' src={logement.cover} alt={`Cover of ${logement.title}`} /> */}
  
      <Carrousel images={logement.pictures}/> 

   
      <div className='logement_container'>
        <div className='logement_tag'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />{/* Affichage des tags associés au logement */}
        </div>
        <div className='logement_content'>
          <div className='logement_profile'>
            <p className="logement_name">{logement.host.name}</p>
            <img className='logement_photo' src={logement.host.picture} alt="img profile" />  
          </div>
          <div className="logement_star">
            {etoile.map((value) => (//(  // Boucle pour afficher chaque étoile et gérer le clic
              <em
                key={value}
                className={`fas fa-star ${value <= rating ? 'colored' : ''}`}
                onClick={() => handleStarClick(value)}//// Déclenche handleStarClick avec la valeur de l'étoile lors du clic
              ></em>
            ))}
          </div>
        </div>  
      </div>
      
      <div className='logement_accordion'>
        <div className='logement_description'>
          <AccordionItem title="Description" content={logement.description} />
        </div>
        <div className='logement_equipement'>
          <AccordionItem title="Équipements" content={logement.equipments} /> 
        </div> 
      </div>

    </div>
  );
};

export default FicheLogement;
