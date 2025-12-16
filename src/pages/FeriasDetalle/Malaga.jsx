import "./stylesSur.css";

export default function Malaga() {
  return (
    <div className="feria-sur">
      <h1 className="titulo-feria-sur">Feria de Málaga – La Malagueta</h1>

      <div className="bloque-sur">
        <img src="/Galeria/multimedia/fm01.jpg" className="img-feria-sur" />
        <p className="texto-sur">
          Agosto en Málaga combina tradición taurina con ambiente veraniego.
        </p>
      </div>

      <div className="mosaico-sur">
        <div className="cuadro-sur">Corridas estelares</div>
        <div className="cuadro-sur">Novilladas</div>
        <div className="cuadro-sur">Rejoneo</div>
      </div>
    </div>
  );
}
