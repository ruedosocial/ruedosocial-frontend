import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeriasCard.css";

export default function FeriasCard({ feria }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ferias/${feria.slug}`);
  };

  return (
    <div className="feria-card" onClick={handleClick}>
      <img src={feria.image} alt={feria.nombre} className="feria-img" />

      <div className="info">
        <div className="title">{feria.nombre}</div>
        <div className="subtitle">{feria.ciudad} - {feria.plaza}</div>
        <div className="descripcion">{feria.descripcion}</div>
      </div>
    </div>
  );
}
