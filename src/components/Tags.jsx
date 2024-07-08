import React from 'react';
import '../styles/components/Tags.scss';

// Composant Tags qui reçoit les tags en tant que prop
const Tags = ({ tags }) => {
  return (
    <div className="tags">
           {/* Boucle à travers les tags et affiche chaque tag */}
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
