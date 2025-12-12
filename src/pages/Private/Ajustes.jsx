export default function Ajustes() {
  return (
    <div className="rs-section">
      <h1 className="rs-title">Ajustes</h1>
      <p className="rs-subtitle">Preferencias y configuración general.</p>

      <div className="rs-section-grid">
        <div className="private-card">
          <h3 className="private-card-title">Notificaciones</h3>
          <p className="private-card-subtitle">Activadas</p>
        </div>

        <div className="private-card">
          <h3 className="private-card-title">Privacidad</h3>
          <p className="private-card-subtitle">Perfil visible</p>
        </div>

        <div className="private-card">
          <h3 className="private-card-title">Seguridad</h3>
          <p className="private-card-subtitle">Contraseña protegida</p>
        </div>
      </div>
    </div>
  );
}
