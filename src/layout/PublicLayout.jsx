import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FondoReal from "../components/FondoReal";
import Home from "../pages/Home/Home";
import Registrarse from "../pages/Auth/Registrarse";
import Acceder from "../pages/Auth/Acceder";

import CompiteDemo from "../pages/Demo/CompiteDemo";
import PrediccionesDemo from "../pages/Demo/PrediccionesDemo";
import RankingDemo from "../pages/Demo/RankingDemo";

import TransitionWrapper from "../TransitionWrapper";
import "./PublicLayout.css";

export default function PublicLayout() {

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [showCompite, setShowCompite] = useState(false);
  const [showPredicciones, setShowPredicciones] = useState(false);
  const [showRanking, setShowRanking] = useState(false);

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="public-layout-wrapper">

      <FondoReal />

      <TransitionWrapper>
        <div className="public-layout-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenRegister={openRegister}
                  onOpenLogin={openLogin}
                  onOpenCompite={() => setShowCompite(true)}
                  onOpenPredicciones={() => setShowPredicciones(true)}
                  onOpenRanking={() => setShowRanking(true)}
                />
              }
            />
          </Routes>
        </div>
      </TransitionWrapper>

      {showRegister && (
        <div className="modal-overlay">
          <div className="modal-bg" onClick={() => setShowRegister(false)}></div>
          <div className="modal-content">
            <Registrarse onSwitchLogin={openLogin} />
          </div>
        </div>
      )}

      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-bg" onClick={() => setShowLogin(false)}></div>
          <div className="modal-content">
            <Acceder onSwitchRegister={openRegister} />
          </div>
        </div>
      )}

      {showCompite && (
        <div className="modal-overlay">
          <div className="modal-bg" onClick={() => setShowCompite(false)}></div>
          <div className="modal-content">
            <CompiteDemo onClose={() => setShowCompite(false)} />
          </div>
        </div>
      )}

      {showPredicciones && (
        <div className="modal-overlay">
          <div className="modal-bg" onClick={() => setShowPredicciones(false)}></div>
          <div className="modal-content">
            <PrediccionesDemo onClose={() => setShowPredicciones(false)} />
          </div>
        </div>
      )}

      {showRanking && (
        <div className="modal-overlay">
          <div className="modal-bg" onClick={() => setShowRanking(false)}></div>
          <div className="modal-content">
            <RankingDemo onClose={() => setShowRanking(false)} />
          </div>
        </div>
      )}

    </div>
  );
}
