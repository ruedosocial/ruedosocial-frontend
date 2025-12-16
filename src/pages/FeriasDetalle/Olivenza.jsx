import "./stylesCentro.css";

export default function Olivenza() {
  return (
    <div className="feria-centro">
      <h1 className="titulo-feria">Feria de Olivenza – Badajoz</h1>

      <div className="bloque-centro">
        <img src="/Galeria/noticias/fn01.jpg" className="img-feria" />
        <p className="texto">
          Considerada el inicio oficial de la temporada.  
          Carteles muy esperados y una afición entregada.
        </p>
      </div>

      <div className="cartel-centro">
        <h2>Destacados</h2>
        <ul>
          <li>Figuras en plenitud</li>
          <li>Ganaderías de prestigio</li>
          <li>Ambiente taurino excepcional</li>
        </ul>
      </div>
    </div>
  );
}
