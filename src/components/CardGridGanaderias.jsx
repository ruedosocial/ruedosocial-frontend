import React from "react";
import "./cards/CardGanaderias.css";
import CardGanaderias from "./cards/CardGanaderias";

export default function CardGridGanaderias({ tarjetas }) {
  return (
    <div className="ganaderias-grid">
      {tarjetas.map((g, index) => (
        <CardGanaderias key={index} ganaderia={g} />
      ))}
    </div>
  );
}
