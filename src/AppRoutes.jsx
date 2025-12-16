import { Routes, Route } from "react-router-dom";

/* LAYOUTS */
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/Private/PrivateLayout";

/* HOME 1 (PUBLIC) */
import HomePublic from "./pages/HomePublic/HomePublic";

/* HOME 2 (PRIVATE) */
import MiTendido from "./pages/Private/MiTendido/MiTendido";
import Faenas from "./pages/Private/Faenas/Faenas";
import MisFaenas from "./pages/Private/Faenas/MisFaenas/MisFaenas";
import MiRanking from "./pages/Private/Faenas/MiRanking/MiRanking";
import MiTemporada from "./pages/Private/Faenas/MiTemporada/MiTemporada";
import MiPerfil from "./pages/Private/Faenas/MiPerfil/MiPerfil";

import Tentadero from "./pages/Private/Tentadero/Tentadero";
import MemoriaTaurina from "./pages/Private/MemoriaTaurina/MemoriaTaurina";
import MonederoTaurino from "./pages/Private/MonederoTaurino/MonederoTaurino";

import MiCallejon from "./pages/Private/MiCallejon/MiCallejon";
import Notificaciones from "./pages/Private/MiCallejon/Notificaciones/Notificaciones";
import CentroCuenta from "./pages/Private/MiCallejon/CentroCuenta/CentroCuenta";
import Ajustes from "./pages/Private/MiCallejon/Ajustes/Ajustes";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePublic />} />
      </Route>

      <Route element={<PrivateLayout />}>
        <Route path="/mi-ruedo" element={<MiTendido />} />

        <Route path="/mi-ruedo/faenas" element={<Faenas />} />
        <Route path="/mi-ruedo/faenas/mis-faenas" element={<MisFaenas />} />
        <Route path="/mi-ruedo/faenas/mi-ranking" element={<MiRanking />} />
        <Route path="/mi-ruedo/faenas/mi-temporada" element={<MiTemporada />} />
        <Route path="/mi-ruedo/faenas/mi-perfil" element={<MiPerfil />} />

        <Route path="/mi-ruedo/tentadero" element={<Tentadero />} />
        <Route path="/mi-ruedo/memoria-taurina" element={<MemoriaTaurina />} />
        <Route path="/mi-ruedo/monedero-taurino" element={<MonederoTaurino />} />

        <Route path="/mi-ruedo/mi-callejon" element={<MiCallejon />} />
        <Route path="/mi-ruedo/notificaciones" element={<Notificaciones />} />
        <Route path="/mi-ruedo/centro-cuenta" element={<CentroCuenta />} />
        <Route path="/mi-ruedo/ajustes" element={<Ajustes />} />
      </Route>

    </Routes>
  );
}
