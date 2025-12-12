import "./Aula.css";
import { Link } from "react-router-dom";
import { cursos } from "../../data/aula/aula";

export default function Aula() {

  return (
    <div className="aula-container">

      <h1 className="aula-title">Aula Taurina</h1>
      <p className="aula-sub">Formación, cultura y tradición del toreo</p>

      <div className="aula-grid">
        {cursos.map(c => (
          <Link key={c.id} to={`/aula/${c.id}`} className="aula-card">
            <img src={c.imagen} className="aula-img" />
            <div className="aula-info">
              <span className="aula-nombre">{c.titulo}</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
