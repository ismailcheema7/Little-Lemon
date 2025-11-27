// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="Main navigation">
        <h1 className="logo">Little Lemon</h1>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reserve a table</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
