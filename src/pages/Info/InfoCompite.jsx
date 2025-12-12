import React from "react";
import "./InfoPages.css";

export default function InfoCompite() {
  return (
    <div className="info-wrapper">
      <h1 className="info-title">Compite con Aficionados</h1>

      <p className="info-text">
        RuedoSocial te permite enfrentarte a miles de aficionados taurinos de todo el mundo. 
        Cada semana podrás participar en retos, sumar puntos y ascender en las ligas oficiales.
      </p>

      <div className="info-box">
        <h2>Ejemplo Real</h2>
        <p>
          Festejo: Valencia — 18 de Marzo<br/>
          Toreros: Manzanares / Talavante / Roca Rey<br/>
          Tu Predicción: <strong>2 orejas + puerta grande</strong><br/>
          Resultado real: <strong>2 orejas</strong>
        </p>
      </div>

      <a href="/" className="info-back">Volver</a>
    </div>
  );
}
