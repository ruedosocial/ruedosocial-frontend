import "./Festejos.css";
import { useParams } from "react-router-dom";
import { festejos } from "../../data/festejos/festejos";

export default function FestejoDetalle() {

  const { id } = useParams();
  const festejo = festejos.find(f => f.id === Number(id));

  return (
    <div className="festejo-detalle-container">

      <h1 className="festejos-title">{festejo.feria}</h1>
      <p className="festejos-subtitle">{festejo.tipo} — {festejo.fecha}</p>

      <img src={festejo.imagen} className="festejo-detalle-img" />

      <h2 className="festejos-subtitle">Toreros Participantes</h2>

      <div className="festejo-toreros-list">
        {festejo.toreros.map((t, index) => (
          <div key={index} className="festejo-torero-box">
            <img src={t.imagen} className="festejo-torero-img" />
            <div className="festejo-torero-nombre">{t.nombre}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
