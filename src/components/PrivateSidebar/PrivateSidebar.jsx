import { NavLink } from "react-router-dom";
import "./styles/private-sidebar.css";

const PrivateSidebar = () => {
  return (
    <aside className="private-sidebar">

      <div className="sidebar-block sidebar-block-tendido">
        <NavLink to="/mi-ruedo" className="block-title">Mi Tendido</NavLink>

        <NavLink to="/mi-ruedo/faenas">Faenas</NavLink>
        <NavLink to="/mi-ruedo/tentadero">Tentadero</NavLink>
        <NavLink to="/mi-ruedo/memoria-taurina">Memoria Taurina</NavLink>
        <NavLink to="/mi-ruedo/monedero-taurino">Monedero Taurino</NavLink>
      </div>

      <div className="sidebar-block sidebar-block-callejon">
        <NavLink to="/mi-ruedo/mi-callejon" className="block-title">Mi Callejón</NavLink>

        <NavLink to="/mi-ruedo/notificaciones">Notificaciones</NavLink>
        <NavLink to="/mi-ruedo/centro-cuenta">Centro de Cuenta</NavLink>
        <NavLink to="/mi-ruedo/ajustes">Ajustes</NavLink>
      </div>

    </aside>
  );
};

export default PrivateSidebar;
