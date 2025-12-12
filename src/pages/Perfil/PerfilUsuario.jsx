import "./Perfil.css";

export default function PerfilUsuario() {
  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Mi Perfil</h1>

      <div className="perfil-card">
        <div className="perfil-avatar"></div>

        <h2 className="perfil-nombre">Aficionado Anónimo</h2>

        <div className="perfil-info-row">
          <span>Predicciones realizadas:</span>
          <strong>0</strong>
        </div>

        <div className="perfil-info-row">
          <span>Aciertos:</span>
          <strong>0</strong>
        </div>

        <div className="perfil-info-row">
          <span>Puntos totales:</span>
          <strong>0</strong>
        </div>
      </div>

    </div>
  );
}
