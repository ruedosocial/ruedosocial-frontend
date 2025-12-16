import "./Ferias.css";
import { ferias } from "../../data/ferias";
import { Link } from "react-router-dom";

export default function Ferias() {
  return (
    <div className="ferias-container">
      <div className="ferias-grid">
        {ferias.map((f, i) => (
          <Link key={i} to="#" className="feria-card">
            <img src={f.imagen} className="feria-img" />
            <div className="feria-nombre">{f.nombre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
