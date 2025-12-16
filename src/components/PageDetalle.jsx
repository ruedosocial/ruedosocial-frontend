import "./PageDetalle.css";

export default function PageDetalle({ titulo, subtitulo, descripcion, imagen }) {
  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={imagen} className="detalle-img" />

        <h1 className="detalle-title">{titulo}</h1>
        <h2 className="detalle-sub">{subtitulo}</h2>

        <p className="detalle-desc">{descripcion}</p>
      </div>
    </div>
  );
}
