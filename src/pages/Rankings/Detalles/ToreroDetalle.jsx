import "./Detalle.css";
import { useParams } from "react-router-dom";
import { rankingToreros } from "../../../data/rankings/rankings";

export default function ToreroDetalle() {

  const { id } = useParams();
  const torero = rankingToreros.find(t => t.id === Number(id));

  return (
    <div className="detalle-container">
      <img src={torero.imagen} className="detalle-img" />
      <h1 className="detalle-titulo">{torero.nombre}</h1>
      <p className="detalle-sub">{torero.puntos} puntos</p>
    </div>
  );
}
