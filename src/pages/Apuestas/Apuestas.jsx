import "./Apuestas.css";
import { Link } from "react-router-dom";
import { mercados } from "../../data/apuestas/mercados";

export default function Apuestas() {

  return (
    <div className="apuestas-container">

      <h1 className="apuestas-title">Mercados Taurinos Disponibles</h1>

      <div className="apuestas-list">
        {mercados.map((m) => (
          <div key={m.id} className="mercado-card">
            <h2 className="mercado-titulo">{m.titulo}</h2>
            <p className="mercado-feria">{m.feria} — {m.fecha}</p>

            <Link to={`/apuestas/${m.id}`} className="mercado-button">
              Abrir Mercado
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}
