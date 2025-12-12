import "./Toreros.css";
import toreros from "../../data/toreros";
import { Link } from "react-router-dom";

export default function Toreros() {
  return (
    <div className="toreros-container">
      <div className="toreros-grid">
        {toreros.map((t, i) => (
          <Link key={i} to="#" className="torero-card">
            <img src={t.imagen} className="torero-img" />
            <div className="torero-nombre">{t.nombre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
