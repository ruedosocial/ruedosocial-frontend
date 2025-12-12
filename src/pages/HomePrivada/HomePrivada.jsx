import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { PrivateProvider } from "../../context/private/PrivateContext";

import PrivateLayout from "../../layout/Private/PrivateLayout";
import PrivateNavbar from "../../components/PrivateNavbar/PrivateNavbar";
import PrivateSidebar from "../../components/PrivateSidebar/PrivateSidebar";
import PrivateFondo from "../../components/PrivateFondo/PrivateFondo";
import PrivateFooter from "../../components/PrivateFooter/PrivateFooter";
import PrivateBreadcrumb from "../../components/PrivateBreadcrumb/PrivateBreadcrumb";
import DashboardCards from "./DashboardCards";

import Faenas from "../Private/Faenas/Faenas";
import Ranking from "../Private/Ranking/Ranking";
import Temporada from "../Private/Temporada/Temporada";
import Perfil from "../Private/Perfil/Perfil";
import Ajustes from "../Private/Ajustes";
import Notificaciones from "../Private/Notificaciones";
import CentroCuenta from "../Private/CentroCuenta";
import Estadisticas from "../Private/Estadisticas/Estadisticas";

import "../../styles/private/private-global.css";
import "../../layout/Private/styles/private-layout.css";
import "../../components/PrivateNavbar/styles/private-navbar.css";
import "../../components/PrivateSidebar/styles/private-sidebar.css";
import "../../components/PrivateFondo/styles/private-fondo.css";
import "../../components/PrivateCards/styles/private-card.css";
import "../../components/PrivateFooter/styles/private-footer.css";
import "../../components/PrivateBreadcrumb/styles/private-breadcrumb.css";

function HomeDashboard() {
  return (
    <div className="rs-dashboard">
      <h1 className="rs-title">Mi Ruedo</h1>
      <p className="rs-subtitle">
        Aquí se refleja tu trayectoria, tu temporada y tu posición en el ruedo.
      </p>

      <div className="rs-dashboard-grid">
        <DashboardCards />
      </div>
    </div>
  );
}

export default function HomePrivada() {
  const [open, setOpen] = useState(false);

  return (
    <PrivateProvider>
      <PrivateLayout>
        <PrivateFondo />

        <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <PrivateNavbar onToggleSidebar={() => setOpen(!open)} />

          <div className="private-main" style={{ flex: 1 }}>
            <PrivateSidebar className={open ? "open" : ""} />

            <div className="private-content" onClick={() => open && setOpen(false)}>
              <PrivateBreadcrumb />

              <Routes>
                <Route path="/" element={<HomeDashboard />} />
                <Route path="mis-faenas" element={<Faenas />} />
                <Route path="mi-ranking" element={<Ranking />} />
                <Route path="mi-temporada" element={<Temporada />} />
                <Route path="estadisticas" element={<Estadisticas />} />
                <Route path="mi-perfil" element={<Perfil />} />
                <Route path="ajustes" element={<Ajustes />} />
                <Route path="notificaciones" element={<Notificaciones />} />
                <Route path="cuenta" element={<CentroCuenta />} />
              </Routes>
            </div>
          </div>

          <PrivateFooter />
        </div>
      </PrivateLayout>
    </PrivateProvider>
  );
}

/* 
  DashboardSkeleton preparado para backend real
  Se activará con estado loading más adelante
*/
