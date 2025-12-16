import FondoDinamico from "../../../components/FondoDinamico";

export default function Malaga() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Feria de Málaga</h1>
        <h2 className="detalle-subtitle">La Malagueta</h2>
        <p className="detalle-desc">Una feria mediterránea con personalidad propia e intensa tradición taurina.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff05.jpg" />
      </div>
    </FondoDinamico>
  );
}
