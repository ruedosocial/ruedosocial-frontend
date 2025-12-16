import "./Tienda.css";
import { Link } from "react-router-dom";
import { productos } from "../../data/tienda/tienda";

export default function Tienda() {

  return (
    <div className="shop-container">

      <h1 className="shop-title">Mercado del Ruedo</h1>
      <p className="shop-sub">Entradas • Merch • Tradición • Arte</p>

      <div className="shop-grid">
        {productos.map(p => (
          <Link key={p.id} to={`/tienda/${p.id}`} className="shop-card">
            <img src={p.imagen} className="shop-img" />
            <div className="shop-info">
              <span className="shop-name">{p.nombre}</span>
              <span className="shop-price">{p.precio} €</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
