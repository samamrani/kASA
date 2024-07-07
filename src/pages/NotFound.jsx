import React from 'react';
import "../styles/pages/NotFound.scss"

function NotFound() {
  return (
    <div className='notFound'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a className='retourne' href="/">Retourner sur la page</a>
    </div>
  );
}
export default NotFound;
