import "./styles/mi-perfil.css";

const MiPerfil = () => {
  return (
    <section className="mi-perfil private-section">

      <header className="mp-header">
        <h1>Mi Perfil</h1>
        <p>Tu identidad como apostador taurino</p>
      </header>

      <div className="mp-top">

        <div className="mp-card main">
          <h3>Perfil de Apuesta</h3>
          <div className="mp-row"><span>Estilo</span><span>Moderado</span></div>
          <div className="mp-row"><span>Nivel de riesgo</span><span>Medio</span></div>
          <div className="mp-row"><span>Especialidad</span><span>Ferias</span></div>
        </div>

        <div className="mp-card">
          <h3>Resumen</h3>
          <div className="mp-row"><span>Faenas jugadas</span><span>38</span></div>
          <div className="mp-row"><span>Acierto</span><span>61%</span></div>
          <div className="mp-row"><span>ROI medio</span><span>+17%</span></div>
        </div>

      </div>

      <div className="mp-cards">

        <div className="mp-card">
          <h3>Fortalezas</h3>
          <ul>
            <li>Buena lectura de cuotas</li>
            <li>Gestión de banca estable</li>
            <li>Constancia en temporada</li>
          </ul>
        </div>

        <div className="mp-card">
          <h3>Áreas de mejora</h3>
          <ul>
            <li>Evitar apuestas impulsivas</li>
            <li>Mejor diversificación</li>
            <li>Control de rachas negativas</li>
          </ul>
        </div>

        <div className="mp-card highlight">
          <h3>Nivel</h3>
          <p className="mp-level">Torero Digital</p>
        </div>

      </div>

    </section>
  );
};

export default MiPerfil;
