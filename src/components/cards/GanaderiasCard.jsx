import React from "react";
import "./GanaderiasCard.css";

export default function GanaderiasCard({ ganaderia }) {
  return (
    <div className="ganaderia-card">
      <img src={ganaderia.image} alt={ganaderia.nombre} className="ganaderia-img" />
      <div className="ganaderia-info">
        <div className="ganaderia-title">{ganaderia.nombre}</div>
        <div className="ganaderia-desc">{ganaderia.descripcion}</div>
      </div>
    </div>
  );
}
