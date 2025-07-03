import React from 'react';
import './Info.css'
import {  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import MenuDeroulant from './MenuDeroulant';
import ArticleStyle from './ArticleStyle';

function Info() {
  return (
          <div className="info">
            <header className="header">
              <h1>Informations</h1>
              <p>Ceci est la page d'informations.</p>
              <Link to="/">Retour à l'accueil</Link>
              <span className='menuD'><MenuDeroulant /></span> 
            </header>
            <span className='articleStyle'><ArticleStyle /></span>
          </div>
  );
}

export default Info;