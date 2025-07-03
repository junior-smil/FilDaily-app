import React from 'react';
import {  } from "react-icons/ri";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginForm/LoginPage';
import Home from './components/Home';
import Info from './components/Info';
import Profile from './components/Profile';

function HeaderOnlyOnHome() {
  const location = useLocation();
  if (location.pathname !== "/") return null;
  return (
    <header className="header">
      <nav>
        <Link to="/home">Home😎😎😋😋😙😙</Link>
        <Link to="/info">Info</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/login">Se connecter</Link>
      </nav>
      <p>Bienvenue sur votre tableau de<br /> bord !</p>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderOnlyOnHome />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;