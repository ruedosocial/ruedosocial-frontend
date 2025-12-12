import React from "react";
import { useNavigate } from "react-router-dom";
import "./TorerosCard.css";

export default function TorerosCard({ torero }) {
  const navigate = useNavigate();

  return (
    <div className="torero-card" onClick={() => navigate(`/toreros/${torero.slug}`)}>
      <img src={torero.image} alt={torero.nombre} className="torero-img" />
      <div className="info">
        <div className="title">{torero.nombre}</div>
        <div className="subinfo">{torero.apodo} — {torero.estilo_corto}</div>
      </div>
    </div>
  );
}
