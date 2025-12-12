import "./Estadisticas.css";
import { Link } from "react-router-dom";
import { estadisticasGlobales } from "../../data/estadisticas/estadisticas";

export default function Estadisticas() {
  return (
    <div className="stats-container">

      <h1 className="stats-title">Estadísticas del Mundo Taurino</h1>

      <div className="stats-grid">

        <div className="stat-box">
          <span className="stat-number">{estadisticasGlobales.corridasTotales}</span>
          <span className="stat-label">Corridas este año</span>
        </div>

        <div className="stat-box">
          <span className="stat-number">{estadisticasGlobales.torerosActivos}</span>
          <span className="stat-label">Toreros activos</span>
        </div>

        <div className="stat-box">
          <span className="stat-number">{estadisticasGlobales.ganaderiasRegistradas}</span>
          <span className="stat-label">Ganaderías registradas</span>
        </div>

        <div className="stat-box">
          <span className="stat-number">{estadisticasGlobales.feriasEsteAnio}</span>
          <span className="stat-label">Ferias este año</span>
        </div>

      </div>

      <div className="stats-links">
        <Link to="/estadisticas/toreros" className="stats-link">Estadísticas de Toreros</Link>
        <Link to="/estadisticas/ganaderias" className="stats-link">Estadísticas de Ganaderías</Link>
      </div>

    </div>
  );
}
