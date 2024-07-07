import React from 'react';
import { useLocation } from 'react-router-dom';
import records from '../Data.json';
import "../styles/pages/Fiche_logement.scss"

const FicheLogement = () => {
  // ID du logement depuis l'URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const logementId = params.get('_id');

  // Trouve le logement correspondant à l'ID
  const logement = records.find((record) => record.id === logementId);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
     
      <img src={logement.cover} alt={`Cover of ${logement.title}`} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {}
    </div>
  );
};

export default FicheLogement;
