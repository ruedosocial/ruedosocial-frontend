import "./Faenas.css";
import { Link } from "react-router-dom";

const Faenas = () => {
  return (
    <section className="faenas-landing private-section">

      <header className="faenas-header">
        <h1>Faenas</h1>
        <p>El centro de tus apuestas tarinas</p>
      </header>

      <div className="faenas-cards">

        <Link to="/mi-ruedo/faenas/mis-faenas" className="faena-card">
          <h3>Mis Faenas</h3>
          <p>Apuestas activas y resueltas</p>
          <div className="card-actions">
            <button className="rs-btn">Ver faenas</button>
          </div>
        </Link>

        <Link to="/mi-ruedo/faenas/mi-ranking" className="faena-card">
          <h3>Mi Ranking</h3>
          <p>Tu posición frente a otros usuarios</p>
          <div className="card-actions">
            <button className="rs-btn">Ver ranking</button>
          </div>
        </Link>

        <Link to="/mi-ruedo/faenas/mi-temporada" className="faena-card">
          <h3>Mi Temporada</h3>
          <p>Resultados, ROI y rendimiento</p>
          <div className="card-actions">
            <button className="rs-btn">Ver temporada</button>
          </div>
        </Link>

        <Link to="/mi-ruedo/faenas/mi-perfil" className="faena-card">
          <h3>Mi Perfil</h3>
          <p>Tu estilo y estadísticas de apuesta</p>
          <div className="card-actions">
            <button className="rs-btn">Ver perfil</button>
          </div>
        </Link>

      </div>

    </section>
  );
};

export default Faenas;
