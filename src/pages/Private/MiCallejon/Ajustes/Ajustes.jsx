import "./styles/ajustes.css";

export default function Ajustes() {
  return (
    <section className="private-section mi-tendido">
      <header className="mc-header">
        <h1>Ajustes</h1>
        <p>Preferencias y configuración de la cuenta</p>
      </header>

      <div className="mc-cards">

        <div className="mc-card">
          <h3>Preferencias</h3>
          <p>Visualización y experiencia</p>
          <button className="rs-btn" onClick={() => alert("Preferencias (placeholder)")}>
            Acceder
          </button>
        </div>

        <div className="mc-card">
          <h3>Notificaciones</h3>
          <p>Alertas y avisos</p>
          <button className="rs-btn" onClick={() => alert("Configurar notificaciones (placeholder)")}>
            Configurar
          </button>
        </div>

        <div className="mc-card">
          <h3>Privacidad</h3>
          <p>Datos y visibilidad</p>
          <button className="rs-btn" onClick={() => alert("Privacidad (placeholder)")}>
            Gestionar
          </button>
        </div>

      </div>
    </section>
  );
}
