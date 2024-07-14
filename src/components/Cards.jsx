import React from 'react';
import { Link } from 'react-router-dom';
import records from '../data/Data.json';
import '../styles/components/_cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      {records.map((record) => {
        const { id, cover, title } = record;
        return (
          <div className="card" key={id}>
            <Link to={`/Logement?_id=${id}`}>
              <div className="image-container">
                <img  className="card_img" src={cover} alt={`Cover of ${title}`}/>   
                <h3 className="card_title">{title}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
