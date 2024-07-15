import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/logo/logo.png';
import '../styles/layout/_header.scss'; 

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/" >
            <img src={logo} alt="Logo du site Kasa" />
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink to="/" className="nav-links">
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-links">
            À Propos
          </NavLink>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;
