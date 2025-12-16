import "./MainLayout.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";
import FondoDinamico from "../components/FondoDinamico";

export default function MainLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <FondoDinamico />
      <Sidebar />

      <div className="layout-center">
        <Navbar />
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
}
