import "./styles/centro-cuenta.css";
import { useNavigate } from "react-router-dom";

export default function CentroCuenta() {
  const navigate = useNavigate();

  return (
    <section className="private-section mi-tendido">
      <header className="mc-header">
        <h1>Centro de Cuenta</h1>
        <p>Datos personales, seguridad y métodos de pago</p>
      </header>

      <div className="mc-cards">

        <div className="mc-card">
          <h3>Datos personales</h3>
          <p>Nombre, email y usuario</p>
          <button className="rs-btn" onClick={() => alert("Editar datos (placeholder)")}>
            Editar
          </button>
        </div>

        <div className="mc-card">
          <h3>Seguridad</h3>
          <p>Contraseña y sesiones activas</p>
          <button className="rs-btn" onClick={() => alert("Gestión de seguridad (placeholder)")}>
            Gestionar
          </button>
        </div>

        <div className="mc-card">
          <h3>Métodos de pago</h3>
          <p>Tarjeta y Bizum</p>
          <button className="rs-btn" onClick={() => navigate("/mi-ruedo/monedero-taurino")}>
            Configurar
          </button>
        </div>

      </div>
    </section>
  );
}
