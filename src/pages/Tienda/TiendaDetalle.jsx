import "./Tienda.css";
import { useParams } from "react-router-dom";
import { productos } from "../../data/tienda/tienda";

export default function TiendaDetalle() {

  const { id } = useParams();
  const prod = productos.find(p => p.id === Number(id));

  return (
    <div className="shop-detalle-container">

      <h1 className="shop-title">{prod.nombre}</h1>

      <img src={prod.imagen} className="shop-detalle-img" />

      <p className="shop-detalle-price">{prod.precio} €</p>

      <p className="shop-detalle-desc">{prod.descripcion}</p>

      <button className="shop-add-btn">Añadir al Carrito</button>

    </div>
  );
}
