import "./styles/mi-callejon.css";

export default function MiCallejon() {
  return (
    <section className="private-section mi-tendido">

      <header className="mc-header">
        <h1>Mi Callejón</h1>
        <p>Notificaciones, cuenta y ajustes personales</p>
      </header>

      <div className="mc-cards">

        <div
          className="mc-card"
          onClick={() => window.location.href = "/mi-ruedo/notificaciones"}
        >
          <h3>Notificaciones</h3>
          <p>Avisos y actividad reciente</p>
          <button className="rs-btn">Ver notificaciones</button>
        </div>

        <div
          className="mc-card"
          onClick={() => window.location.href = "/mi-ruedo/centro-cuenta"}
        >
          <h3>Centro de Cuenta</h3>
          <p>Datos personales y seguridad</p>
          <button className="rs-btn">Gestionar cuenta</button>
        </div>

        <div
          className="mc-card"
          onClick={() => window.location.href = "/mi-ruedo/ajustes"}
        >
          <h3>Ajustes</h3>
          <p>Preferencias y configuración</p>
          <button className="rs-btn">Configurar</button>
        </div>

      </div>

    </section>
  );
}
