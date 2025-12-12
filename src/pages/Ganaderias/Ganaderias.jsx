import "./Ganaderias.css";
import ganaderias from "../../data/ganaderias";
import { Link } from "react-router-dom";

export default function Ganaderias() {
  return (
    <div className="ganaderias-container">
      <div className="ganaderias-grid">
        {ganaderias.map((g, i) => (
          <Link key={i} to="#" className="ganaderia-card">
            <img src={g.imagen} className="ganaderia-img" />
            <div className="ganaderia-nombre">{g.nombre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
