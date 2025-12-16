import "./Auth.css";

export default function Registrarse({ onSuccess }) {

  const registrar = () => {
    if (onSuccess) onSuccess();
    window.location.href = "/mi-ruedo";
  };

  return (
    <div className="auth-card">
      <h1 className="auth-title">Crear Cuenta</h1>
      <p className="auth-subtitle">Registro libre (modo pruebas)</p>

      <input className="auth-input" placeholder="Alias (no importa)" />
      <input className="auth-input" placeholder="Email (no importa)" />
      <input className="auth-input" placeholder="Contraseña (no importa)" />

      <button className="auth-btn" onClick={registrar}>
        Registrarse
      </button>
    </div>
  );
}
