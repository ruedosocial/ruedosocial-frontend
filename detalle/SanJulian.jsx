import FondoDinamico from "../../../components/FondoDinamico";

export default function SanJulian() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Feria de San Julián</h1>
        <h2 className="detalle-subtitle">Cuenca</h2>
        <p className="detalle-desc">Feria tradicional que combina toreo clásico con ambiente popular.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff09.jpg" />
      </div>
    </FondoDinamico>
  );
}
