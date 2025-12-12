import React from "react";
import "./Navbar.css";

export default function Navbar({ onOpenRegister, onOpenLogin }) {
  return (
    <nav className="navbar">
      <a href="/">
        <img
          src="/Galeria/logos/logorst.png"
          className="logo-nav"
          alt="RuedoSocial"
        />
      </a>

      <div className="navbar-right">
        <span className="navbar-item" onClick={onOpenRegister}>Registrarse</span>
        <span className="navbar-item" onClick={onOpenLogin}>Acceder</span>
      </div>
    </nav>
  );
}
