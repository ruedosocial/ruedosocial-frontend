import { useParams } from "react-router-dom";
import { toreros } from "../../data/toreros";
import "./ToreroDetalle.css";

export default function ToreroDetalle() {
  const { slug } = useParams();
  const torero = toreros.find(t => t.slug === slug);

  if (!torero) return <div className="torero-detalle">Torero no encontrado</div>;

  // Limpieza de texto: quitar iconos y saltos innecesarios
  const texto = torero.descripcion_larga
    .replace(/🐂/g, "")      // quitar iconos
    .replace(/\n+/g, "\n")   // normalizar saltos
    .trim();

  return (
    <div className="torero-detalle">
      <img src={torero.image} className="torero-detalle-img" />
      <h1 className="torero-nombre">{torero.nombre}</h1>
      <div className="torero-descripcion">
        {texto.split("\n").map((linea, index) => (
          <div key={index} className="linea-detalle">{linea}</div>
        ))}
      </div>
    </div>
  );
}
