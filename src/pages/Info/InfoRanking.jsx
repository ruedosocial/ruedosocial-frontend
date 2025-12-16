import React from "react";
import "./InfoPages.css";

export default function InfoRanking() {
  return (
    <div className="info-wrapper">
      <h1 className="info-title">Escala en el Ranking</h1>

      <p className="info-text">
        Sube de nivel, gana puntos, consigue insignias y demuestra tu sabiduría taurina 
        frente a miles de aficionados.
      </p>

      <div className="info-box">
        <h2>Ejemplo Real</h2>
        <p>
          Usuario: “ToroDigital92”<br/>
          Nivel actual: 14 (Aficionado Experto)<br/>
          Puntos totales: 4.520<br/>
          Clasificación semanal: Puesto 18
        </p>
      </div>

      <a href="/" className="info-back">Volver</a>
    </div>
  );
}
