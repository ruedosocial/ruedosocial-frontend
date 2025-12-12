import FondoDinamico from "../../../components/FondoDinamico";

export default function Cordoba() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Feria de Córdoba</h1>
        <h2 className="detalle-subtitle">Los Califas</h2>
        <p className="detalle-desc">Una feria con historia y una de las plazas más reconocidas de Andalucía.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff06.jpg" />
      </div>
    </FondoDinamico>
  );
}
