import "./Festejos.css";
import { Link } from "react-router-dom";
import { festejos } from "../../data/festejos/festejos";

export default function Festejos() {
  return (
    <div className="festejos-container">

      <h1 className="festejos-title">Próximos Festejos</h1>

      <div className="festejos-list">
        {festejos.map((f) => (
          <div key={f.id} className="festejo-card">
            <img src={f.imagen} className="festejo-img" />
            <div className="festejo-info">
              <h3 className="festejo-feria">{f.feria}</h3>
              <p className="festejo-fecha">{f.fecha}</p>
              <p className="festejo-tipo">{f.tipo}</p>
              <Link to={`/festejos/${f.id}`} className="festejo-button">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
