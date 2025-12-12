import "./GanaderiaPerfil.css";
import { useParams } from "react-router-dom";
import { rankingGanaderias } from "../../../data/rankings/rankings";

export default function GanaderiaPerfil() {

  const { id } = useParams();
  const gan = rankingGanaderias.find(g => g.id === Number(id));

  return (
    <div className="gan-perfil-container">
      <img src={gan.imagen} className="gan-perfil-img" />
      <h1 className="gan-perfil-nombre">{gan.nombre}</h1>

      <div className="gan-perfil-info">
        <p>Puntos acumulados: <strong>{gan.puntos}</strong></p>
        <p>Hierros históricos próximamente...</p>
      </div>
    </div>
  );
}
