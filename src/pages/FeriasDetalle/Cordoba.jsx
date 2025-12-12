import "./stylesSur.css";

export default function Cordoba() {
  return (
    <div className="feria-sur">
      <h1 className="titulo-feria-sur">Feria de Córdoba – Los Califas</h1>

      <div className="bloque-sur">
        <img src="/Galeria/resultados/fr01.jpg" className="img-feria-sur" />
        <p className="texto-sur">
          Tradición histórica y sabor andaluz en una plaza de enorme personalidad.
        </p>
      </div>

      <div className="mosaico-sur">
        <div className="cuadro-sur">Grandes faenas</div>
        <div className="cuadro-sur">Ambiente cálido</div>
        <div className="cuadro-sur">Carteles de figuras</div>
      </div>
    </div>
  );
}
