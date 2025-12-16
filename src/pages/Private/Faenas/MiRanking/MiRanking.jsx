import "./styles/mi-ranking.css";

const MiRanking = () => {
  return (
    <section className="mi-ranking private-section">

      <header className="mr-header">
        <h1>Mi Ranking</h1>
        <p>Tu posición frente a otros apostadores</p>
      </header>

      <div className="mr-summary">
        <div className="mr-summary-card">
          <span>Ranking actual</span>
          <strong>#12</strong>
        </div>
        <div className="mr-summary-card">
          <span>Total usuarios</span>
          <strong>1.248</strong>
        </div>
        <div className="mr-summary-card">
          <span>Mejor puesto</span>
          <strong>#8</strong>
        </div>
        <div className="mr-summary-card">
          <span>Racha</span>
          <strong>+3</strong>
        </div>
      </div>

      <div className="mr-cards">

        <div className="mr-card highlight">
          <h3>Ranking Semanal</h3>
          <div className="mr-row"><span>Posición</span><span>#12</span></div>
          <div className="mr-row"><span>Beneficio</span><span>+96 €</span></div>
          <div className="mr-row"><span>ROI</span><span>+22%</span></div>
        </div>

        <div className="mr-card">
          <h3>Ranking Temporada</h3>
          <div className="mr-row"><span>Posición</span><span>#18</span></div>
          <div className="mr-row"><span>Beneficio</span><span>+214 €</span></div>
          <div className="mr-row"><span>ROI</span><span>+17%</span></div>
        </div>

        <div className="mr-card">
          <h3>Ranking Histórico</h3>
          <div className="mr-row"><span>Mejor puesto</span><span>#8</span></div>
          <div className="mr-row"><span>Peor puesto</span><span>#96</span></div>
          <div className="mr-row"><span>Media</span><span>#34</span></div>
        </div>

      </div>

    </section>
  );
};

export default MiRanking;
