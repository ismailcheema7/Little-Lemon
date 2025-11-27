// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Welcome to Little Lemon</h2>
        <p>Cozy Mediterranean restaurant that serves fresh food every day.</p>
        <Link className="primary-btn" to="/booking">
          Book a table
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
