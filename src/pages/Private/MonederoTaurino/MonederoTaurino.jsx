import "./styles/monedero-taurino.css";

const MonederoTaurino = () => {
  return (
    <section className="monedero-taurino private-section">

      <header className="mt-header">
        <h1>Monedero Taurino</h1>
        <p>Control y gestión de tu dinero</p>
      </header>

      <div className="mt-balance">
        <span>Saldo disponible</span>
        <strong>0,00 €</strong>
      </div>

      <div className="mt-summary">

        <div className="mt-summary-card">
          <span>Total ingresado</span>
          <strong>500,00 €</strong>
        </div>

        <div className="mt-summary-card">
          <span>Total retirado</span>
          <strong>320,00 €</strong>
        </div>

        <div className="mt-summary-card">
          <span>Beneficio neto</span>
          <strong>+180,00 €</strong>
        </div>

        <div className="mt-summary-card">
          <span>Operaciones</span>
          <strong>24</strong>
        </div>

      </div>

      <div className="mt-cards">

        <div className="mt-card">
          <h3>Ingresar fondos</h3>
          <p>Añade saldo a tu monedero</p>
          <div className="mt-row"><span>Método</span><span>Tarjeta / Bizum</span></div>
          <div className="mt-row"><span>Mínimo</span><span>10,00 €</span></div>
          <button className="mt-cta">Ingresar</button>
        </div>

        <div className="mt-card">
          <h3>Retirar fondos</h3>
          <p>Envía tus ganancias</p>
          <div className="mt-row"><span>Disponible</span><span>0,00 €</span></div>
          <div className="mt-row"><span>Plazo</span><span>24–48 h</span></div>
          <button className="mt-cta">Retirar</button>
        </div>

        <div className="mt-card">
          <h3>Historial</h3>
          <p>Movimientos recientes</p>
          <div className="mt-row"><span>Último ingreso</span><span>50,00 €</span></div>
          <div className="mt-row"><span>Última retirada</span><span>30,00 €</span></div>
          <button className="mt-cta">Ver historial</button>
        </div>

      </div>

    </section>
  );
};

export default MonederoTaurino;
