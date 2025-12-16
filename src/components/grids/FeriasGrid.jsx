import React from "react";
import "./FeriasGrid.css";
import { ferias } from "../../data/ferias";

export default function FeriasGrid() {
  return (
    <div className="ferias-grid">
      {ferias.map((f) => (
        <div key={f.nombre} className="feria-card">
          <img src={f.imagen} alt={f.nombre} className="feria-img" />
          <div className="feria-nombre">{f.nombre}</div>
        </div>
      ))}
    </div>
  );
}
