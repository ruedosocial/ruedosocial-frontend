import React, { useState } from "react";
import Home1Carousel from "../../components/Home1Carousel/Home1Carousel";
import "./Home.css";

export default function Home({
  onOpenRegister,
  onOpenLogin,
  onOpenCompite,
  onOpenPredicciones,
  onOpenRanking
}) {
  const [alias, setAlias] = useState("");
  const [resultado, setResultado] = useState("");
  const [checking, setChecking] = useState(false);

  const ocupados = ["torero", "admin", "ruedo", "usuario", "matador", "banderillero"];

  const comprobarAlias = () => {
    if (!alias || alias.trim().length < 3) {
      setResultado("⚠ El apodo debe tener al menos 3 caracteres.");
      return;
    }

    setChecking(true);
    setResultado("");

    setTimeout(() => {
      setChecking(false);
      if (ocupados.includes(alias.toLowerCase())) {
        setResultado('❌ El apodo "' + alias + '" no está disponible.');
      } else {
        setResultado('✔ El apodo "' + alias + '" está disponible.');
      }
    }, 800);
  };

  return (
    <div className="home1-container">

      <h1 className="home1-title">RuedoSocial.es</h1>

      <p className="home1-subtitle">
        Predice, Acierta y Gana Prestigio en el Ruedo Digital
      </p>

      <div className="home1-buttons">

        <button className="home1-btn" onClick={onOpenRegister}>Registrarse</button>

        <button className="home1-btn" onClick={onOpenLogin}>Acceder</button>

      </div>

      <Home1Carousel />



      <div className="alias-wrapper">
        <h2 className="alias-title">
          El apodo de faena con el que te anunciará la plaza
        </h2>

        <div className="alias-box">
          <input
            type="text"
            className="alias-input"
            placeholder="Elige el apodo con el que saldrás al ruedo"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <button className="alias-btn" onClick={comprobarAlias}>
            Comprobar
          </button>
        </div>

        {checking && <p className="alias-result">⏳ Comprobando apodo…</p>}
        {!checking && resultado && <p className="alias-result">{resultado}</p>}
      </div>

      <div className="cards-container">
        <div className="home1-card">
          <h3>Mide tu saber taurino</h3>
          <p>Frente a otros aficionados como tú.</p>
          <button className="card-btn" onClick={onOpenCompite}>Ver más</button>
        </div>

        <div className="home1-card">
          <h3>Arriesga con conocimiento</h3>
          <p>Cada pronóstico cuenta.</p>
          <button className="card-btn" onClick={onOpenPredicciones}>Ver más</button>
        </div>

        <div className="home1-card">
          <h3>Asciende en la plaza</h3>
          <p>Solo los mejores dejan huella.</p>
          <button className="card-btn" onClick={onOpenRanking}>Ver más</button>
        </div>
      </div>

      <div className="home1-footer-wrapper">
        <div className="home1-footer-line"></div>
        <p className="home1-footer">
          La plaza está abierta. Elige tu apodo y sal al ruedo.
        </p>
        <p className="home1-footer">
          © 2025 RuedoSocial.es — Todos los derechos reservados
        </p>
      </div>

    </div>
  );
}
