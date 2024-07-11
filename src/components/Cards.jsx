import React from 'react';
import { Link } from 'react-router-dom';
import records from '../data/Data.json';
import '../styles/components/_cards.scss';

// récupère et affiche une liste de logements sous forme de cartes
const Cards = () => {
  return (
    <div className="cards">
        {/* Parcourt la liste des logements dans les données importées */}
      {records.map((record) => {
         // Destructuration des propriétés id, cover et title de chaque enregistrement
        const { id, cover, title } = record;

         // Retourne une carte pour chaque logement
        return (
          <div className="liste_cards" key={id}> {/* Clé unique pour chaque élément dans la liste */}
          <Link to={`/Logement?_id=${id}`}> {/* Lien vers la page de détail du logement avec un paramètre de requête */}
            <img src={cover} alt={`Cover of ${title}`} /> {/* Image de couverture du logement */}
            <h3>{title}</h3> {/* Titre du logement */}
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
