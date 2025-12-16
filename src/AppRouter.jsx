import { Routes, Route } from "react-router-dom";
import Ferias from "./pages/Ferias/Ferias";
import Toreros from "./pages/Toreros/Toreros";
import Ganaderias from "./pages/Ganaderias/Ganaderias";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/ferias" element={<Ferias />} />
      <Route path="/toreros" element={<Toreros />} />
      <Route path="/ganaderias" element={<Ganaderias />} />
    </Routes>
  );
}
