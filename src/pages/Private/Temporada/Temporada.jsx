import { usePrivate } from "../../../context/private/PrivateContext";

export default function Temporada() {
  const { user } = usePrivate();

  return (
    <div className="rs-section">
      <h1 className="rs-title">Mi Temporada</h1>
      <p className="rs-subtitle">Seguimiento de tu temporada activa.</p>

      <div className="private-card primary">
        <h3 className="private-card-title">Progreso General</h3>
        <div className="progress-bar">
          <span style={{ width: user.temporada.progreso + "%" }}></span>
        </div>
        <p className="private-card-subtitle">
          {user.temporada.progreso}% completado · {user.temporada.puntos} puntos
        </p>
      </div>
    </div>
  );
}
