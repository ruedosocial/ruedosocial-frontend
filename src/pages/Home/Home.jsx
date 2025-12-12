import React, { useState } from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";

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
      setResultado("⚠ El alias debe tener al menos 3 caracteres.");
      return;
    }

    setChecking(true);
    setResultado("");

    setTimeout(() => {
      setChecking(false);

      if (ocupados.includes(alias.toLowerCase())) {
        setResultado(`❌ El alias "${alias}" no está disponible.`);
      } else {
        setResultado(`✔ El alias "${alias}" está disponible.`);
      }
    }, 800);
  };

  return (
    <div className="home1-container rs-animate-fade">

      {/* ——— NUEVO TÍTULO ANIMADO ——— */}
      <h1 className="home1-title title-faena">RuedoSocial.es</h1>

      {/* NUEVO SUBTÍTULO PRINCIPAL */}
      <p className="home1-subtitle rs-animate-fade">
        Predice, Acierta y Domina el RuedoSocial Digital
      </p>

      <div className="home1-buttons rs-animate-fade">
        <button className="home1-btn primary" onClick={onOpenRegister}>
          Registrarse
        </button>

        <button className="home1-btn primary" onClick={onOpenLogin}>
          Acceder
        </button>
      </div>

      <div className="rs-animate-fade">
        <Carousel />
      </div>

      <div className="alias-wrapper rs-animate-fade">

        <h2 className="alias-title">
          El Apodo de Faena que te abrirá La Puerta Grande
        </h2>

        <div className="alias-box">
          <input
            type="text"
            className="alias-input"
            placeholder="Introduce el Apodo que tienes pensado."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />

          <button className="alias-btn" onClick={comprobarAlias}>
            Comprobar
          </button>
        </div>

        {checking && <p className="alias-result">⏳ Comprobando alias…</p>}
        {!checking && resultado && (
          <p className="alias-result">{resultado}</p>
        )}
      </div>

      <div className="cards-container rs-animate-fade">

        <div className="home1-card">
          <h3>Compite con Aficionados</h3>
          <p>Demuestra tu sabiduría taurina.</p>
          <button className="card-btn" onClick={onOpenCompite}>Ver más</button>
        </div>

        <div className="home1-card">
          <h3>Predicciones Reales</h3>
          <p>Acertar nunca fue tan emocionante.</p>
          <button className="card-btn" onClick={onOpenPredicciones}>Ver más</button>
        </div>

        <div className="home1-card">
          <h3>Escala en el Ranking</h3>
          <p>Conviértete en leyenda del ruedo.</p>
          <button className="card-btn" onClick={onOpenRanking}>Ver más</button>
        </div>

      </div>

      <p className="home1-footer rs-animate-fade">
        © 2025 RuedoSocial.es — Todos los derechos Reservados
      </p>

    </div>
  );
}
