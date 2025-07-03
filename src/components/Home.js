import React from 'react';
import './Home.css';
import MenuDeroulant from './MenuDeroulant'
import {  } from "react-icons/ri";


function Home() {
  return (
    <div>
      <div className="home">
        <header className="header">
          <h1>FILDAILY</h1>
          <p>Ceci est votre page d'accueil.</p>
          <span className='menuD'><MenuDeroulant /></span> 
        </header>
        
        
      </div>
    </div>
  );
};

export default Home;