import { Routes, Route } from "react-router-dom";
import PrivateLayout from "../../layout/Private/PrivateLayout";

import MiTendido from "../private/MiTendido";
import Faenas from "../private/Faenas";
import MisFaenas from "../private/MisFaenas";
import MiRanking from "../private/MiRanking";
import MiTemporada from "../private/MiTemporada";
import MiPerfil from "../private/MiPerfil";
import Tentadero from "../private/Tentadero";
import MemoriaTaurina from "../private/MemoriaTaurina";
import MonederoTaurino from "../private/MonederoTaurino";
import MiCallejon from "../private/MiCallejon";
import Notificaciones from "../private/Notificaciones";
import CentroDeCuenta from "../private/CentroDeCuenta";
import Ajustes from "../private/Ajustes";

const HomePrivada = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="mi-tendido" element={<MiTendido />} />
        <Route path="faenas" element={<Faenas />} />
        <Route path="mis-faenas" element={<MisFaenas />} />
        <Route path="mi-ranking" element={<MiRanking />} />
        <Route path="mi-temporada" element={<MiTemporada />} />
        <Route path="mi-perfil" element={<MiPerfil />} />
        <Route path="tentadero" element={<Tentadero />} />
        <Route path="memoria-taurina" element={<MemoriaTaurina />} />
        <Route path="monedero-taurino" element={<MonederoTaurino />} />
        <Route path="mi-callejon" element={<MiCallejon />} />
        <Route path="notificaciones" element={<Notificaciones />} />
        <Route path="centro-de-cuenta" element={<CentroDeCuenta />} />
        <Route path="ajustes" element={<Ajustes />} />
      </Routes>
    </PrivateLayout>
  );
};

export default HomePrivada;
