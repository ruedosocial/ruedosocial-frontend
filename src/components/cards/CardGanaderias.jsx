import React from "react";
import "./CardGanaderias.css";

export default function CardGanaderias({ ganaderia }) {
  return (
    <div className="ganaderia-card">
      <img src={ganaderia.image} alt={ganaderia.nombre} />
      <h3>{ganaderia.nombre}</h3>
      <p>{ganaderia.descripcion}</p>
    </div>
  );
}
