import React from "react";

export default function GanaderiaCard({ ganaderia }) {
  return (
    <div className="ganaderia-card">
      <img src={ganaderia.imagen} alt={ganaderia.nombre} className="ganaderia-img" />
      <h3 className="ganaderia-nombre">{ganaderia.nombre}</h3>
      <p className="ganaderia-desc">{ganaderia.descripcion}</p>
    </div>
  );
}
