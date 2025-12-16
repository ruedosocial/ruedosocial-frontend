import "./Calendario.css";
import { festejos } from "../../data/festejos/festejos";

export default function Calendario() {

  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  const agrupado = {};

  festejos.forEach(f => {
    const mes = new Date(f.fecha).getMonth();
    if (!agrupado[mes]) agrupado[mes] = [];
    agrupado[mes].push(f);
  });

  return (
    <div className="cal-container">
      <h1 className="cal-title">Calendario Taurino 2025</h1>

      <div className="cal-grid">
        {meses.map((mes, idx) => (
          <div key={idx} className="cal-mes-box">

            <h2 className="cal-mes-title">{mes}</h2>

            <div className="cal-festejos-list">
              {(agrupado[idx] || []).map((f) => (
                <a key={f.id} href={"/festejos/" + f.id} className="cal-card">
                  <span className="cal-card-feria">{f.feria}</span>
                  <span className="cal-card-fecha">{f.fecha}</span>
                </a>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
