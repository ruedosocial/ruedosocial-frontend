import "./Estadisticas.css";
import { estadisticasGanaderias } from "../../data/estadisticas/estadisticas";

export default function StatsGanaderias() {

  return (
    <div className="stats-container">

      <h1 className="stats-title">Estadísticas de Ganaderías</h1>

      <div className="stats-list">
        {estadisticasGanaderias.map((g, index) => (
          <div key={index} className="stats-row">
            <span className="stats-name">{g.nombre}</span>
            <span className="stats-value">Premios: {g.premios}</span>
            <span className="stats-value">Indultos: {g.torosIndultados}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
