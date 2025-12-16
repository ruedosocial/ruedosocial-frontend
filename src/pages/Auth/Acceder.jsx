import "./auth.css";

export default function Acceder({ onSuccess }) {

  const entrar = () => {
    if (onSuccess) onSuccess();
    window.location.href = "/mi-ruedo";
  };

  return (
    <div className="auth-card">
      <h1 className="auth-title">Acceder</h1>
      <p className="auth-subtitle">Acceso libre (modo pruebas)</p>

      <input className="auth-input" placeholder="Email (no importa)" />
      <input className="auth-input" placeholder="Contraseña (no importa)" />

      <button className="auth-btn" onClick={entrar}>
        Entrar
      </button>
    </div>
  );
}
