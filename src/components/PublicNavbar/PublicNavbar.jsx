import React from "react";
import "./PublicNavbar.css";

export default function PublicNavbar({ onOpenRegister, onOpenLogin }) {
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
        <span className="navbar-item" onClick={onOpenRegister}>
          Registrarse
        </span>
        <span className="navbar-item" onClick={onOpenLogin}>
          Acceder
        </span>
      </div>

    </nav>
  );
}
