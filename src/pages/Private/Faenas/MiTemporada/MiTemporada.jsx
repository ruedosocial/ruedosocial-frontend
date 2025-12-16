import "./styles/mi-temporada.css";

const MiTemporada = () => {
  return (
    <section className="mi-temporada private-section">

      <header className="mt-header">
        <h1>Mi Temporada</h1>
        <p>Tu rendimiento como inversor taurino</p>
      </header>

      <div className="mt-kpis">
        <div className="mt-kpi">
          <span>Total apostado</span>
          <strong>1.240 €</strong>
        </div>
        <div className="mt-kpi">
          <span>Beneficio neto</span>
          <strong>+214 €</strong>
        </div>
        <div className="mt-kpi">
          <span>ROI</span>
          <strong>+17%</strong>
        </div>
        <div className="mt-kpi">
          <span>Faenas jugadas</span>
          <strong>38</strong>
        </div>
      </div>

      <div className="mt-cards">

        <div className="mt-card highlight">
          <h3>Mejor Faena</h3>
          <div className="mt-row"><span>Evento</span><span>Feria de Abril</span></div>
          <div className="mt-row"><span>Cuota</span><span>3.20</span></div>
          <div className="mt-row"><span>Beneficio</span><span>+96 €</span></div>
        </div>

        <div className="mt-card">
          <h3>Peor Faena</h3>
          <div className="mt-row"><span>Evento</span><span>San Fermín</span></div>
          <div className="mt-row"><span>Cuota</span><span>2.10</span></div>
          <div className="mt-row"><span>Pérdida</span><span>-40 €</span></div>
        </div>

        <div className="mt-card">
          <h3>Regularidad</h3>
          <div className="mt-row"><span>Aciertos</span><span>61%</span></div>
          <div className="mt-row"><span>Fallos</span><span>39%</span></div>
          <div className="mt-row"><span>Racha máx.</span><span>+4</span></div>
        </div>

      </div>

    </section>
  );
};

export default MiTemporada;
