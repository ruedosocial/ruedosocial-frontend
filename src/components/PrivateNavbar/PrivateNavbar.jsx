import React from "react";
import "./styles/private-navbar.css";

export default function PrivateNavbar() {
  return (
    <nav className="navbar">

      <a href="http://192.168.1.40/mi-ruedo">
        <img
          src="/Galeria/logos/logorst.png"
          className="logo-nav"
          alt="RuedoSocial"
        />
      </a>

      <div className="navbar-right">

        <div className="nav-icon">🧺</div>

        <div className="nav-saldo">
          <span className="saldo-label">Saldo</span>
          <span className="saldo-amount">0,00 €</span>
        </div>

        <div className="nav-icon">🔔</div>

        <div className="nav-user">
          marcos.galisteo
          <span className="nav-user-arrow">▾</span>

          <div className="nav-user-dropdown">
            <a href="/privada/mi-perfil">Mi perfil</a>
            <a href="/privada/monedero-taurino">Monedero</a>
            <a href="/">Cerrar sesión</a>
          </div>
        </div>

      </div>

    </nav>
  );
}
