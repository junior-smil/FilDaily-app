import React from 'react';
import'./Profile.css';
import {  } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <h1>Profil Utilisateur</h1>
      {/* Ajoutez ici des informations sur le profil */}
      <div>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default Profile;