import { NavLink, useNavigate } from "react-router-dom";

export default function PrivateSidebar({ className = "" }) {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <aside className={`private-sidebar ${className}`}>
      <nav className="sidebar-top">
        <NavLink to="/mi-ruedo" end className="sidebar-item">Mi Ruedo</NavLink>
        <NavLink to="/mi-ruedo/mis-faenas" className="sidebar-item">Mis Faenas</NavLink>
        <NavLink to="/mi-ruedo/mi-ranking" className="sidebar-item">Mi Ranking</NavLink>
        <NavLink to="/mi-ruedo/mi-temporada" className="sidebar-item">Mi Temporada</NavLink>
        <NavLink to="/mi-ruedo/estadisticas" className="sidebar-item">Estadísticas</NavLink>
        <NavLink to="/mi-ruedo/mi-perfil" className="sidebar-item">Mi Perfil</NavLink>
        <NavLink to="/mi-ruedo/ajustes" className="sidebar-item">Ajustes</NavLink>
        <NavLink to="/mi-ruedo/notificaciones" className="sidebar-item">Notificaciones</NavLink>
        <NavLink to="/mi-ruedo/cuenta" className="sidebar-item">Centro de Cuenta</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-separator"></div>
        <div className="sidebar-item logout" onClick={logout}>Cerrar sesión</div>
      </div>
    </aside>
  );
}
