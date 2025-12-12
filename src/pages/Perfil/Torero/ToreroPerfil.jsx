import "./ToreroPerfil.css";
import { useParams } from "react-router-dom";
import { rankingToreros } from "../../../data/rankings/rankings";

export default function ToreroPerfil() {

  const { id } = useParams();
  const torero = rankingToreros.find(t => t.id === Number(id));

  return (
    <div className="torero-perfil-container">
      <img src={torero.imagen} className="torero-perfil-img" />
      <h1 className="torero-perfil-nombre">{torero.nombre}</h1>

      <div className="torero-perfil-info">
        <p>Puntos acumulados: <strong>{torero.puntos}</strong></p>
        <p>Estadísticas próximamente...</p>
      </div>
    </div>
  );
}
