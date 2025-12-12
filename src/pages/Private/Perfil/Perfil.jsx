import { usePrivate } from "../../../context/private/PrivateContext";

export default function Perfil() {
  const { user } = usePrivate();

  return (
    <div className="rs-section">
      <h1 className="rs-title">Mi Perfil</h1>
      <p className="rs-subtitle">Datos personales y estado.</p>

      <div className="private-card primary">
        <div className="profile-field">
          <label>Alias</label>
          <input value={user.alias} readOnly />
        </div>

        <div className="profile-field">
          <label>Nivel</label>
          <input value={user.nivel} readOnly />
        </div>

        <div className="profile-field">
          <label>Puntos Totales</label>
          <input value={user.puntos} readOnly />
        </div>

        <button className="rs-btn secondary" disabled>
          Guardar cambios (próximamente)
        </button>
      </div>
    </div>
  );
}
