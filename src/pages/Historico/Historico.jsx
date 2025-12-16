import "./Historico.css";
import { Link } from "react-router-dom";
import { historico } from "../../data/historico/historico";

export default function Historico() {

  return (
    <div className="historico-container">

      <h1 className="historico-title">Histórico del Ruedo</h1>
      <p className="historico-sub">Resultados de temporadas anteriores</p>

      <div className="historico-list">
        {historico.map((h) => (
          <Link key={h.id} to={`/historico/${h.id}`} className="historico-card">
            <img src={h.imagen} className="historico-img" />
            <div className="historico-info">
              <h3 className="historico-feria">{h.feria}</h3>
              <p className="historico-fecha">{h.fecha}</p>
              <p className="historico-resumen">{h.resumen}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
