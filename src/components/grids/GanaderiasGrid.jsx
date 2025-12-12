import "./GanaderiasGrid.css";
import { ganaderias } from "../../data/ganaderias";

export default function GanaderiasGrid() {
  return (
    <div className="ganaderias-grid">
      {ganaderias.map((g) => (
        <div key={g.nombre} className="ganaderia-card">
          <img src={g.imagen} alt={g.nombre} className="ganaderia-img" />
          <div className="ganaderia-nombre">{g.nombre}</div>
        </div>
      ))}
    </div>
  );
}
