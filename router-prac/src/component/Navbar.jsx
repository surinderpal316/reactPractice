// src/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
// Example assuming App.css is in the same directory as App.jsx
import "../component/App.css";
// Linking the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
      <NavLink to="/body" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Body</NavLink>
    </nav>
  );
};

export default Navbar;
