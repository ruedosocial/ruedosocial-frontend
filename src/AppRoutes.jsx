import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./layout/PublicLayout";
import Home from "./pages/Home/Home";
import HomePrivada from "./pages/HomePrivada/HomePrivada";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* HOME2 CON ROUTING INTERNO */}
      <Route path="/mi-ruedo/*" element={<HomePrivada />} />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
