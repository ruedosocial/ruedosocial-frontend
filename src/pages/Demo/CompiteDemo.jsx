import "./InfoDemo.css";

export default function CompiteDemo({ onClose }) {
  return (
    <div className="info-demo-box">
      <h2 className="info-demo-title">Compite con Aficionados</h2>
      <p className="info-demo-subtitle">Pon a prueba tu sabiduría taurina</p>

      <p className="info-demo-text">
        En esta sección podrás participar en desafíos, quinielas taurinas y
        competiciones amistosas contra otros aficionados del ruedo digital.
      </p>

      <button className="info-demo-btn" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
}
