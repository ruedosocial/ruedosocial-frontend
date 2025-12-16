import "./styles/mis-faenas.css";

const MisFaenas = () => {
  return (
    <section className="mis-faenas private-section">

      <header className="mf-header">
        <h1>Mis Faenas</h1>
        <p>Control total de tus apuestas</p>
      </header>

      <div className="mf-summary">
        <div className="mf-summary-card">
          <span>Total activas</span>
          <strong>2</strong>
        </div>
        <div className="mf-summary-card">
          <span>En juego</span>
          <strong>80 €</strong>
        </div>
        <div className="mf-summary-card">
          <span>Posible retorno</span>
          <strong>176,50 €</strong>
        </div>
        <div className="mf-summary-card">
          <span>ROI</span>
          <strong>+38%</strong>
        </div>
      </div>

      <div className="mf-cards">

        <div className="mf-card">
          <div className="mf-card-header">
            <h3>Faena · Feria de Abril</h3>
            <span className="mf-tag activa">ACTIVA</span>
          </div>

          <div className="mf-row"><span>Cuota</span><span>2,45</span></div>
          <div className="mf-row"><span>Apuesta</span><span>50 €</span></div>
          <div className="mf-row"><span>Posible</span><span>122,50 €</span></div>

          <div className="card-actions">
            <button className="rs-btn">Cash-out</button>
          </div>
        </div>

        <div className="mf-card">
          <div className="mf-card-header">
            <h3>Faena · San Isidro</h3>
            <span className="mf-tag ganada">GANADA</span>
          </div>

          <div className="mf-row"><span>Cuota</span><span>1,80</span></div>
          <div className="mf-row"><span>Apuesta</span><span>30 €</span></div>
          <div className="mf-row"><span>Resultado</span><span>54,00 €</span></div>

          <div className="card-actions">
            <button className="rs-btn">Cerrada</button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default MisFaenas;
