import React from "react";
import "./FeriaDetalle.css";

export default function FeriaPlantilla({ titulo, ciudad, plaza, imagen, descripcion, historia, ganaderias, toreros }) {
  return (
    <div className="feria-detalle">
      <h1 className="feria-titulo">{titulo}</h1>

      <img src={imagen} alt={titulo} className="feria-imagen" />

      <div className="feria-info">
        <h2>Plaza y Localización</h2>
        <p><strong>{ciudad}</strong> — {plaza}</p>

        <h2>Descripción General</h2>
        <p>{descripcion}</p>

        <h2>Historia</h2>
        <p>{historia}</p>

        <h2>Ganaderías Habituales</h2>
        <ul>
          {ganaderias.map((g, i) => <li key={i}>{g}</li>)}
        </ul>

        <h2>Toreros Habituales</h2>
        <ul>
          {toreros.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}
