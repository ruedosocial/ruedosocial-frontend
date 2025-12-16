import "./Apuestas.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { mercados } from "../../data/apuestas/mercados";

export default function ApuestaDetalle() {

  const { id } = useParams();
  const mercado = mercados.find(m => m.id === Number(id));

  const [seleccion, setSeleccion] = useState("");

  function apostar() {
    alert("Apuesta registrada (mock) — backend pendiente");
  }

  return (
    <div className="apuesta-detalle-container">

      <h1 className="apuestas-title">{mercado.titulo}</h1>
      <p className="apuestas-sub">{mercado.feria} — {mercado.fecha}</p>

      <div className="opciones-list">
        {mercado.opciones.map((o) => (
          <div
            key={o.id}
            className={`opcion-card ${seleccion === o.id ? "selected" : ""}`}
            onClick={() => setSeleccion(o.id)}
          >
            <img src={o.imagen} className="opcion-img" />
            <div className="opcion-info">
              <h3 className="opcion-nombre">{o.nombre}</h3>
              <span className="opcion-cuota">Cuota {o.cuota}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="apostar-button" disabled={!seleccion} onClick={apostar}>
        Confirmar Apuesta
      </button>

    </div>
  );
}
