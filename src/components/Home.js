import React from 'react';
import './Home.css';
import MenuDeroulant from './MenuDeroulant'
import ArticleStyle from './ArticleStyle';
import {  } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <div className="home">
        <header className="header">
          <h1>FILDAILY</h1>
          <p>Ceci est votre page d'accueil.</p>
          <Link to="/">Retour à l'accueil</Link>
          <span className='menuD'><MenuDeroulant /></span> 
        </header>
        <span className='articleStyle'><ArticleStyle /></span>
      </div>
    </div>
  );
};

export default Home;