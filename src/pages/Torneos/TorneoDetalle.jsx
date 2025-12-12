import "./Torneos.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { torneos } from "../../data/torneos/torneos";

export default function TorneoDetalle() {

  const { id } = useParams();
  const torneo = torneos.find(t => t.id === Number(id));

  const [predicciones, setPredicciones] = useState({});

  function seleccionar(identificador, torero) {
    setPredicciones({
      ...predicciones,
      [identificador]: torero
    });
  }

  return (
    <div className="torneo-detalle-container">

      <h1 className="torneos-title">{torneo.feria}</h1>
      <p className="torneos-subtitle">Predicciones disponibles</p>

      {torneo.carteles.map((c) => (
        <div key={c.id} className="cartel-box">

          <h3 className="cartel-titulo">{c.titulo}</h3>

          <div className="duelo">
            {c.toreros.map((t, index) => (
              <div
                key={index}
                className={`torero-card ${predicciones[c.id] === t.nombre ? "selected" : ""}`}
                onClick={() => seleccionar(c.id, t.nombre)}
              >
                <img src={t.imagen} className="torero-img" />
                <div className="torero-nombre">{t.nombre}</div>
              </div>
            ))}
          </div>

          <div className="prediccion-result">
            {predicciones[c.id]
              ? `Has elegido a ${predicciones[c.id]}`
              : "Selecciona tu predicción"}
          </div>

        </div>
      ))}

    </div>
  );
}
