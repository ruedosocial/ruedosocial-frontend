import "./VIP.css";
import { Link } from "react-router-dom";
import { nivelesVIP } from "../../data/vip/vip";

export default function VIP() {

  return (
    <div className="vip-container">

      <h1 className="vip-title">Zona VIP del Ruedo</h1>
      <p className="vip-sub">Beneficios exclusivos para aficionados de élite</p>

      <div className="vip-grid">
        {nivelesVIP.map(n => (
          <Link key={n.id} to={`/vip/${n.id}`} className="vip-card">
            <img src={n.imagen} className="vip-img" />
            <div className="vip-info">
              <span className="vip-nombre">{n.nombre}</span>
              <span className="vip-precio">{n.precio} €/mes</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
