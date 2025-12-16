import FondoDinamico from "../../../components/FondoDinamico";

export default function SemanaGrande() {
  return (
    <FondoDinamico>
      <div className="detalle-container">
        <h1 className="detalle-title">Semana Grande</h1>
        <h2 className="detalle-subtitle">Vista Alegre (Bilbao)</h2>
        <p className="detalle-desc">Conocida por su exigencia y nivel ganadero, una feria de enorme prestigio.</p>
        <img className="detalle-img" src="/Galeria/ferias/ff04.jpg" />
      </div>
    </FondoDinamico>
  );
}
