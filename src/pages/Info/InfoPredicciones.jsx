import React from "react";
import "./InfoPages.css";

export default function InfoPredicciones() {
  return (
    <div className="info-wrapper">
      <h1 className="info-title">Predicciones Reales</h1>

      <p className="info-text">
        Accede a ferias, ganaderías, temporadas pasadas y estadísticas reales para realizar 
        predicciones antes de cada festejo.
      </p>

      <div className="info-box">
        <h2>Ejemplo Real</h2>
        <p>
          Ganadería: Victoriano del Río<br/>
          Porcentaje de puertas grandes: 31%<br/>
          Torero destacado: Roca Rey<br/>
          Nivel de riesgo: Medio-Alto
        </p>
      </div>

      <a href="/" className="info-back">Volver</a>
    </div>
  );
}
