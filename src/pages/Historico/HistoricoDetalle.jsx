import "./Historico.css";
import { useParams } from "react-router-dom";
import { historico } from "../../data/historico/historico";

export default function HistoricoDetalle() {

  const { id } = useParams();
  const h = historico.find(e => e.id === Number(id));

  return (
    <div className="historico-detalle-container">

      <h1 className="historico-title">{h.feria}</h1>
      <p className="historico-sub">{h.fecha}</p>

      <img src={h.imagen} className="historico-detalle-img" />

      <h2 className="historico-section-title">Resumen</h2>
      <p className="historico-text">{h.resumen}</p>

      <h2 className="historico-section-title">Detalles</h2>
      <div className="historico-detalles-box">
        <p><strong>Triunfador:</strong> {h.detalles.ganador}</p>
        <p><strong>Orejas:</strong> {h.detalles.orejas}</p>
        <p><strong>Indulto:</strong> {h.detalles.indulto ? "Sí" : "No"}</p>
        <p><strong>Ganadería destacada:</strong> {h.detalles.mejorGanaderia}</p>
      </div>

      <h2 className="historico-section-title">Toreros Participantes</h2>
      <div className="historico-toreros-list">
        {h.detalles.toreros.map((t, index) => (
          <div key={index} className="historico-torero-card">
            <span className="torero-nombre">{t.nombre}</span>
            <span className="torero-orejas">{t.orejas} orejas</span>
          </div>
        ))}
      </div>

    </div>
  );
}
