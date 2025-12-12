import React from "react";
import { Link } from "react-router-dom";
import "./styles/private-navbar.css";

export default function PrivateNavbar() {
  return (
    <nav className="navbar">

      <Link to="/mi-ruedo">
        <img
          src="/Galeria/logos/logorst.png"
          className="logo-nav"
          alt="RuedoSocial"
        />
      </Link>

      <div className="navbar-right">
        <span className="navbar-item">ToreroDigital</span>
        <Link to="/" className="navbar-item logout">Cerrar sesión</Link>
      </div>

    </nav>
  );
}
