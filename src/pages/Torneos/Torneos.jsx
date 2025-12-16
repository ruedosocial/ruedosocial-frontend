import "./Torneos.css";
import { Link } from "react-router-dom";
import { torneos } from "../../data/torneos/torneos";

export default function Torneos() {
  return (
    <div className="torneos-container">

      <h1 className="torneos-title">Torneos & Predicciones</h1>
      <p className="torneos-subtitle">
        Elige una feria, analiza los carteles y realiza tus predicciones taurinas.
      </p>

      <div className="torneos-list">
        {torneos.map((t) => (
          <div key={t.id} className="torneo-card">
            <img src={t.imagen} className="torneo-img" />
            <h3 className="torneo-feria">{t.feria}</h3>
            <p className="torneo-fecha">{t.fecha}</p>

            <Link to={`/torneos/${t.id}`} className="torneo-button">
              Ver Carteles
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
