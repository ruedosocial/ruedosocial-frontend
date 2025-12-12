import "./VIP.css";
import { useParams } from "react-router-dom";
import { nivelesVIP } from "../../data/vip/vip";

export default function VIPDetalle() {

  const { id } = useParams();
  const nivel = nivelesVIP.find(n => n.id === Number(id));

  return (
    <div className="vip-detalle-container">

      <h1 className="vip-title">{nivel.nombre}</h1>

      <img src={nivel.imagen} className="vip-detalle-img" />

      <p className="vip-detalle-precio">
        {nivel.precio} €/mes
      </p>

      <h2 className="vip-section-title">Beneficios incluidos</h2>

      <ul className="vip-beneficios">
        {nivel.beneficios.map((b, index) => (
          <li key={index} className="vip-beneficio">
            {b}
          </li>
        ))}
      </ul>

      <button className="vip-btn">Unirme al Club</button>

    </div>
  );
}
