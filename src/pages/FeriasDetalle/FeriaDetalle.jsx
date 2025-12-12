import { useParams } from "react-router-dom";
import { ferias } from "../../data/ferias";
import "./FeriaDetalle.css";

export default function FeriaDetalle() {
  const { slug } = useParams();

  const feria = ferias.find(f => f.slug === slug);

  if (!feria) return <div className="feria-detalle">Feria no encontrada</div>;

  return (
    <div className="feria-detalle">
      <img src={feria.image} className="feria-detalle-img" />

      <h1 className="feria-nombre">{feria.nombre}</h1>
      <h3 className="feria-subtitulo">{feria.ciudad} — {feria.plaza}</h3>

      <div className="feria-descripcion">
        {feria.descripcion_larga ?? feria.descripcion}
      </div>
    </div>
  );
}
