import React, { useState } from "react";
import "../styles/components/Carrousel.scss";

function Carrousel({ images }) {
    // Déclaration de l'état pour suivre l'index de l'image actuelle
  const [count, setCount] = useState(0);

    // Fonction pour changer l'image en fonction de l'incrément
  const changeImage = (increment) => {
    setCount(
      (index) => (index + increment + images.length) % images.length
    );
  };

  return (
    <div className="carrousel">
      <div className="carrousel_container">
      {images.length > 1 && ( // Affiche le carrousel complet si plus d'une image est disponible
          <>
            <img src={images[count]} alt={`${count + 1}`} /> {/* Image actuelle */}
            <span className="carrousel_number">
              {count + 1}/{images.length}
              {/* Indicateur du numéro de l'image actuelle et du nombre total d'images */}
            </span>
            <i className="fa fa-angle-left" onClick={() => changeImage(-1)}></i> {/* Btn pour l'image précédente */}
            <i className="fa fa-angle-right" onClick={() => changeImage(1)}></i> {/* Btn pour l'image suivante */}
          </>
        )}
        {images.length === 1 && <img src={images[0]} alt="1" />} {/* Affiche l'unique image si seulement une image est disponible */}
      </div>
    </div>
  );
}

export default Carrousel;