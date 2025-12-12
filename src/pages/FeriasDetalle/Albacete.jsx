import "./stylesCentro.css";

export default function Albacete() {
  return (
    <div className="feria-centro">
      <h1 className="titulo-feria">Feria de Albacete – La Chata</h1>

      <div className="bloque-centro">
        <img src="/Galeria/test/test02.png" className="img-feria" />
        <p className="texto">
          Una de las ferias más completas de España.  
          Septiembre reúne tradición, afición y carteles de primer nivel.
        </p>
      </div>

      <div className="cartel-centro">
        <h2>Programación</h2>
        <ul>
          <li>Corridas de toros de máximo nivel</li>
          <li>Novilladas con picadores</li>
          <li>Rejoneo con grandes nombres</li>
        </ul>
      </div>
    </div>
  );
}
