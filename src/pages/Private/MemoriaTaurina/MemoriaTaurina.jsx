import "./styles/memoria-taurina.css";

const MemoriaTaurina = () => {
  return (
    <section className="memoria-taurina private-section">

      <header className="mt-header">
        <h1>Memoria Taurina</h1>
        <p>Análisis, histórico y evolución</p>
      </header>

      <div className="mt-summary">

        <div className="mt-summary-card">
          <span>Faenas analizadas</span>
          <strong>128</strong>
        </div>

        <div className="mt-summary-card">
          <span>Beneficio histórico</span>
          <strong>+1.240,50 €</strong>
        </div>

        <div className="mt-summary-card">
          <span>ROI medio</span>
          <strong>+21%</strong>
        </div>

        <div className="mt-summary-card">
          <span>Mejor racha</span>
          <strong>7</strong>
        </div>

      </div>

      <div className="mt-cards">

        <div className="mt-card">
          <h3>Evolución personal</h3>
          <p>Evolución del rendimiento</p>
          <div className="mt-row"><span>Últimos 30 días</span><span>+186 €</span></div>
          <div className="mt-row"><span>Últimos 6 meses</span><span>+842 €</span></div>
          <button className="mt-cta">Ver evolución</button>
        </div>

        <div className="mt-card">
          <h3>Análisis por feria</h3>
          <p>Resultados por plaza</p>
          <div className="mt-row"><span>Feria más rentable</span><span>San Isidro</span></div>
          <div className="mt-row"><span>ROI máximo</span><span>+34%</span></div>
          <button className="mt-cta">Analizar ferias</button>
        </div>

        <div className="mt-card">
          <h3>Patrones de apuesta</h3>
          <p>Detección de tendencias</p>
          <div className="mt-row"><span>Tipo dominante</span><span>Cuotas medias</span></div>
          <div className="mt-row"><span>Éxito</span><span>61%</span></div>
          <button className="mt-cta">Ver patrones</button>
        </div>

      </div>

    </section>
  );
};

export default MemoriaTaurina;
