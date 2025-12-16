import "./styles/faenas.css";

export default function FaenaCard({ title, cuota }) {
  return (
    <div className="faena-card">
      <h3>{title}</h3>
      <span className="cuota">Cuota {cuota}</span>
      <button>Añadir a cesta</button>
    </div>
  );
}
