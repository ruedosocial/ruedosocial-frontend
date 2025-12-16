import React from "react";
import FeriasCard from "./cards/FeriasCard";

export default function CardGridFerias({ tarjetas }) {
  return (
    <div className="ferias-grid">
      {tarjetas.map((feria, index) => (
        <FeriasCard key={index} feria={feria} />
      ))}
    </div>
  );
}
