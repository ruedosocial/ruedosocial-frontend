export default function Notificaciones() {
  return (
    <div className="rs-section">
      <h1 className="rs-title">Notificaciones</h1>
      <p className="rs-subtitle">Centro de alertas recientes.</p>

      <div className="rs-section-grid">
        <div className="private-card primary">
          <h3 className="private-card-title">🔔 Nueva Faena Disponible</h3>
          <p className="private-card-subtitle">
            Participa ya en la nueva faena activa.
          </p>
        </div>

        <div className="private-card">
          <h3 className="private-card-title">🏆 Ranking Actualizado</h3>
          <p className="private-card-subtitle">
            Has subido posiciones tras la última jornada.
          </p>
        </div>
      </div>
    </div>
  );
}
