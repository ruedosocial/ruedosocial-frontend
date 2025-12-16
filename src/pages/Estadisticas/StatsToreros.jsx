import "./Estadisticas.css";
import { estadisticasToreros } from "../../data/estadisticas/estadisticas";

export default function StatsToreros() {

  return (
    <div className="stats-container">

      <h1 className="stats-title">Estadísticas de Toreros</h1>

      <div className="stats-list">
        {estadisticasToreros.map((t, index) => (
          <div key={index} className="stats-row">
            <span className="stats-name">{t.nombre}</span>
            <span className="stats-value">Victorias: {t.victorias}</span>
            <span className="stats-value">Orejas: {t.orejas}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
