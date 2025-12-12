import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-block">
        <h3 className="sidebar-title">Toro</h3>
        <Link to="/ferias" className="sidebar-item">Ferias</Link>
        <Link to="/toreros" className="sidebar-item">Toreros</Link>
        <Link to="/ganaderias" className="sidebar-item">Ganaderías</Link>
      </div>

      <div className="sidebar-block">
        <h3 className="sidebar-title">Ruedo</h3>
        <Link to="/clasificacion" className="sidebar-item">Clasificación</Link>
        <Link to="/resultados" className="sidebar-item">Resultados</Link>
        <Link to="/noticias" className="sidebar-item">Noticias</Link>
        <Link to="/multimedia" className="sidebar-item">Multimedia</Link>
      </div>

    </aside>
  );
}
