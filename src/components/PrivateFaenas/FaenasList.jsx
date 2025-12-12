import { usePrivate } from "../../context/private/PrivateContext";

export default function FaenasList() {
  const { faenas } = usePrivate();

  if (!faenas || faenas.length === 0) {
    return <div className="rs-empty">No hay faenas registradas.</div>;
  }

  return (
    <div className="faenas-list">
      <div className="faena-row header">
        <span>Fecha</span>
        <span>Faena</span>
        <span>Puntos</span>
      </div>

      {faenas.map(f => (
        <div key={f.id} className="faena-row">
          <span>{f.fecha}</span>
          <span>{f.nombre}</span>
          <span>{f.puntos}</span>
        </div>
      ))}
    </div>
  );
}
