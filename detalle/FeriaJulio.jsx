import FondoDinamico from "../../../components/FondoDinamico";

export default function FeriaJulio() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Feria de Julio</h1>
        <h2 className="detalle-subtitle">Valencia</h2>
        <p className="detalle-desc">Feria histórica con gran tradición taurina y presencia de primeras figuras.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff03.jpg" />
      </div>
    </FondoDinamico>
  );
}
