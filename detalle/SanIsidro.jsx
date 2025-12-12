import FondoDinamico from "../../../components/FondoDinamico";

export default function SanIsidro() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Feria de San Isidro</h1>
        <h2 className="detalle-subtitle">Las Ventas (Madrid)</h2>
        <p className="detalle-desc">La feria taurina más importante del mundo, celebrada cada mayo en la plaza de Las Ventas.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff01.jpg" />
      </div>
    </FondoDinamico>
  );
}
