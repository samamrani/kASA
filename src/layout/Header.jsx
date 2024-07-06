import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png'
import '../styles/layout/Header.scss'; 

function Header() {
  return (
    <header>
    <nav>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo du site Kasa" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
     
    </nav>
  </header>
  );
}

export default Header;
