import "./styles/tentadero.css";

export default function Tentadero() {
  return (
    <section className="tentadero private-section">

      <header className="td-header">
        <h1>Tentadero</h1>
        <p>Mercados abiertos y oportunidades de apuesta</p>
      </header>

      <div className="td-cards">

        <div className="td-card">
          <h3>Feria de Abril</h3>
          <p className="td-desc">Mercados activos</p>
          <div className="td-row">
            <span>Faenas abiertas</span>
            <span className="num">12</span>
          </div>
          <div className="td-row">
            <span>Cuota media</span>
            <span className="num">2,35</span>
          </div>
          <button className="rs-btn">Explorar</button>
        </div>

        <div className="td-card">
          <h3>San Isidro</h3>
          <p className="td-desc">Alta liquidez</p>
          <div className="td-row">
            <span>Faenas abiertas</span>
            <span className="num">18</span>
          </div>
          <div className="td-row">
            <span>Cuota media</span>
            <span className="num">1,95</span>
          </div>
          <button className="rs-btn">Explorar</button>
        </div>

        <div className="td-card">
          <h3>Ofertas Especiales</h3>
          <p className="td-desc">Cuotas mejoradas</p>
          <div className="td-row">
            <span>Promociones</span>
            <span className="num">4</span>
          </div>
          <div className="td-row">
            <span>Mejora media</span>
            <span className="num">+18%</span>
          </div>
          <button className="rs-btn">Ver ofertas</button>
        </div>

      </div>

    </section>
  );
}
