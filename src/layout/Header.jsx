import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/logo/logo.png';
import '../styles/layout/_header.scss'; 

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink exact to="/" activeClassName="active">
            <img src={logo} alt="Logo du site Kasa" />
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink exact className="nav-links" to="/" activeClassName="active">
            Accueil
          </NavLink>
          <NavLink className="nav-links" to="/about" activeClassName="active">
            À Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
