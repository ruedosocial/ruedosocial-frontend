import "./InfoDemo.css";

export default function RankingDemo({ onClose }) {
  return (
    <div className="info-demo-box">
      <h2 className="info-demo-title">Escala en el Ranking</h2>
      <p className="info-demo-subtitle">Forja tu leyenda taurina</p>

      <p className="info-demo-text">
        Consulta tu progreso, compara tu trayectoria con otros usuarios y asciende
        en la clasificación oficial del ruedo digital.
      </p>

      <button className="info-demo-btn" onClick={onClose}>Cerrar</button>
    </div>
  );
}
