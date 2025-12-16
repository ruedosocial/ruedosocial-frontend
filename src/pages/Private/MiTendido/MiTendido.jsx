import "./styles/mi-tendido.css";

const MiTendido = () => {
  return (
    <section className="mi-tendido private-section">

      <header className="mt-header">
        <h1>Mi Tendido</h1>
        <p>Tu panel principal de apuestas</p>
      </header>

      <div className="mt-cards">

        <div className="mt-card">
          <h3>Faenas</h3>
          <p>Apuestas activas</p>
          <div className="mt-row">
            <span>En juego</span>
            <span className="value">2</span>
          </div>
          <div className="mt-row">
            <span>Exposición</span>
            <span className="value">80,00 €</span>
          </div>
          <button className="mt-cta" onClick={() => window.location.href='/mi-ruedo/faenas'}>
            Ver faenas
          </button>
        </div>

        <div className="mt-card">
          <h3>Tentadero</h3>
          <p>Mercados abiertos</p>
          <div className="mt-row">
            <span>Faenas</span>
            <span className="value">30</span>
          </div>
          <div className="mt-row">
            <span>Cuota media</span>
            <span className="value">2,10</span>
          </div>
          <button className="mt-cta" onClick={() => window.location.href='/mi-ruedo/tentadero'}>
            Explorar
          </button>
        </div>

        <div className="mt-card">
          <h3>Memoria Taurina</h3>
          <p>Histórico y análisis</p>
          <div className="mt-row">
            <span>Faenas totales</span>
            <span className="value">48</span>
          </div>
          <div className="mt-row">
            <span>ROI global</span>
            <span className="value">+18%</span>
          </div>
          <button className="mt-cta" onClick={() => window.location.href='/mi-ruedo/memoria-taurina'}>
            Analizar
          </button>
        </div>

        <div className="mt-card">
          <h3>Monedero Taurino</h3>
          <p>Tu dinero</p>
          <div className="mt-row">
            <span>Saldo</span>
            <span className="value">0,00 €</span>
          </div>
          <div className="mt-row">
            <span>Beneficio</span>
            <span className="value">+180,00 €</span>
          </div>
          <button className="mt-cta" onClick={() => window.location.href='/mi-ruedo/monedero-taurino'}>
            Gestionar
          </button>
        </div>

      </div>

    </section>
  );
};

export default MiTendido;
