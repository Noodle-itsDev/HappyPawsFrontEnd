import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import imglogo from '../assets/happy-paws-logo.png';

const Header: React.FC = () => {
  return (
    <>
      <nav className="header-container">
        <ul>
          <li><Link to="/about">Acceso</Link></li>
        </ul>
      </nav>
      <div className="bottom-section">
          <img src={imglogo} className="header-image" />
      </div>
      <div className='titulo-mascota'>
        <h1>Adopta a un 
          <br/>Felino</h1>
      </div>
    </>
  );
};


export default Header;
