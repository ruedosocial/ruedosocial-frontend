import "./styles/notificaciones.css";
import { useNavigate } from "react-router-dom";

export default function Notificaciones() {
  const navigate = useNavigate();

  return (
    <section className="private-section mi-tendido">
      <header className="mc-header">
        <h1>Notificaciones</h1>
        <p>Actividad relevante de tu cuenta</p>
      </header>

      <div className="mc-cards">

        <div className="mc-card mc-card-new">
          <h3>Apuesta liquidada</h3>
          <p>Tu faena en San Isidro ha sido cerrada con beneficio.</p>
          <button className="rs-btn" onClick={() => navigate("/mi-ruedo/memoria-taurina")}>
            Ver detalle
          </button>
        </div>

        <div className="mc-card mc-card-new">
          <h3>Nueva feria disponible</h3>
          <p>Ya puedes apostar en la Feria de Bilbao.</p>
          <button className="rs-btn" onClick={() => navigate("/mi-ruedo/tentadero")}>
            Ir a la feria
          </button>
        </div>

        <div className="mc-card">
          <h3>Cambio de cuota</h3>
          <p>Una de tus faenas ha modificado su cuota.</p>
          <button className="rs-btn" onClick={() => navigate("/mi-ruedo/faenas")}>
            Revisar
          </button>
        </div>

        <div className="mc-card">
          <h3>Actualización de cuenta</h3>
          <p>Tus datos de seguridad se han actualizado correctamente.</p>
          <button className="rs-btn" onClick={() => navigate("/mi-ruedo/centro-cuenta")}>
            Aceptar
          </button>
        </div>

      </div>
    </section>
  );
}
