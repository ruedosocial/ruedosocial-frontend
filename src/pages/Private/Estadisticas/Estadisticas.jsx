import { usePrivate } from "../../../context/private/PrivateContext";

export default function Estadisticas() {
  const { estadisticas } = usePrivate();

  return (
    <div className="rs-section">
      <h1 className="rs-title">Estadísticas Generales</h1>
      <p className="rs-subtitle">Resumen global de tu rendimiento.</p>

      <div className="stats-grid">
        <div className="private-card">
          <div className="stat-label">Aciertos Totales</div>
          <div className="stat-value">{estadisticas.aciertos}</div>
        </div>

        <div className="private-card">
          <div className="stat-label">Puntos Totales</div>
          <div className="stat-value">{estadisticas.puntosTotales}</div>
        </div>

        <div className="private-card">
          <div className="stat-label">Mejor Racha</div>
          <div className="stat-value">{estadisticas.mejorRacha}</div>
        </div>

        <div className="private-card">
          <div className="stat-label">Temporadas</div>
          <div className="stat-value">{estadisticas.temporadas}</div>
        </div>
      </div>
    </div>
  );
}
