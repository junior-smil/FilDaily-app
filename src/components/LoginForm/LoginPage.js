import React from 'react';
import LoginForm from './LoginForm.jsx'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
     <div className='login-page'>
      <LoginForm />
     </div>
      <div>
       <Link to="/">Retour à l'accueil</Link>
      </div>
    </div>
    
  );
};

export default LoginPage;

