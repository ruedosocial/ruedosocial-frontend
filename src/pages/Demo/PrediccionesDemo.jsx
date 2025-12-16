import "./InfoDemo.css";

export default function PrediccionesDemo({ onClose }) {
  return (
    <div className="info-demo-box">
      <h2 className="info-demo-title">Predicciones Reales</h2>
      <p className="info-demo-subtitle">Acierta, apuesta y domina el ruedo</p>

      <p className="info-demo-text">
        Aquí podrás predecir resultados, actuaciones y momentos clave de cada
        festejo taurino. Demuestra tu visión y conviértete en referencia del ruedo.
      </p>

      <button className="info-demo-btn" onClick={onClose}>Cerrar</button>
    </div>
  );
}
