import { Link } from "react-router-dom";
import "./PublicNavbar.css";

export default function PublicNavbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <Link className="logo-nav" to="/">
          <img
            src="/Galeria/logos/logorst01.png"
            alt="RuedoSocial Logo"
            className="logo-nav-img"
            style={{
              height: "120px",   // ← TAMAÑO DOBLE REAL
              width: "auto",
              objectFit: "contain"
            }}
          />
        </Link>
      </div>

      <div className="navbar-right">
        <span className="navbar-icon">🔍</span>
        <Link className="navbar-item" to="/registrarse">Registrarse</Link>
        <Link className="navbar-item" to="/acceder">Acceder</Link>
      </div>
    </nav>
  );
}
