import "./Detalle.css";
import { useParams } from "react-router-dom";
import { rankingFerias } from "../../../data/rankings/rankings";

export default function FeriaDetalle() {

  const { id } = useParams();
  const feria = rankingFerias.find(t => t.id === Number(id));

  return (
    <div className="detalle-container">
      <img src={feria.imagen} className="detalle-img" />
      <h1 className="detalle-titulo">{feria.nombre}</h1>
      <p className="detalle-sub">{feria.puntos} puntos</p>
    </div>
  );
}
