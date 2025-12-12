export default function CentroCuenta() {
  return (
    <div className="rs-section">
      <h1 className="rs-title">Centro de Cuenta</h1>
      <p className="rs-subtitle">Gestión global de tu cuenta.</p>

      <div className="rs-section-grid">
        <div className="private-card primary">
          <h3 className="private-card-title">Estado</h3>
          <p className="private-card-subtitle">Cuenta activa · Nivel premium</p>
        </div>

        <div className="private-card">
          <h3 className="private-card-title">Actividad</h3>
          <p className="private-card-subtitle">Último acceso: hoy</p>
        </div>

        <div className="private-card">
          <h3 className="private-card-title">Cerrar Cuenta</h3>
          <p className="private-card-subtitle">Opción avanzada (no disponible)</p>
        </div>
      </div>
    </div>
  );
}
