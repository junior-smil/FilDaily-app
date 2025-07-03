import React from 'react';
import './Info.css'
import {  } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div className="info">
      <h1>Informations</h1>
      <p>Ceci est la page d'informations.</p>      <div>
       <Link to="/">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export default Info;