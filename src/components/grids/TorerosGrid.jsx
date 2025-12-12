import React from "react";
import "./TorerosGrid.css";
import { toreros } from "../../data/toreros";

export default function TorerosGrid() {
  return (
    <div className="toreros-grid">
      {toreros.map((f) => (
        <div key={f.nombre} className="torero-card">
          <img src={f.imagen} alt={f.nombre} className="torero-img" />
          <div className="torero-nombre">{f.nombre}</div>
        </div>
      ))}
    </div>
  );
}
