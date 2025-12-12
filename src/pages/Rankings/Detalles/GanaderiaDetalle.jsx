import "./Detalle.css";
import { useParams } from "react-router-dom";
import { rankingGanaderias } from "../../../data/rankings/rankings";

export default function GanaderiaDetalle() {

  const { id } = useParams();
  const gan = rankingGanaderias.find(t => t.id === Number(id));

  return (
    <div className="detalle-container">
      <img src={gan.imagen} className="detalle-img" />
      <h1 className="detalle-titulo">{gan.nombre}</h1>
      <p className="detalle-sub">{gan.puntos} puntos</p>
    </div>
  );
}
