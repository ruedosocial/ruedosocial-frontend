import "./Detalle.css";

export default function Detalle({ titulo, subtitulo, imagen, descripcion }) {
  return (
    <div className="detalle-wrapper">
      <div className="detalle-contenedor">

        <img src={imagen} className="detalle-img" />

        <h1 className="detalle-titulo">{titulo}</h1>
        <h2 className="detalle-subtitulo">{subtitulo}</h2>

        <p className="detalle-texto">{descripcion}</p>

      </div>
    </div>
  );
}
