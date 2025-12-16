import "./Rankings.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { rankingToreros, rankingGanaderias, rankingFerias } from "../../data/rankings/rankings";

export default function Rankings() {

  const [tab, setTab] = useState("toreros");

  const data =
    tab === "toreros" ? rankingToreros :
    tab === "ganaderias" ? rankingGanaderias :
    rankingFerias;

  const tipo = 
    tab === "toreros" ? "toreros" :
    tab === "ganaderias" ? "ganaderias" :
    "ferias";

  return (
    <div className="rank-container">

      <h1 className="rank-title">Rankings Taurinos</h1>

      <div className="rank-tabs">
        <button className={tab==="toreros"?"active":""} onClick={()=>setTab("toreros")}>Toreros</button>
        <button className={tab==="ganaderias"?"active":""} onClick={()=>setTab("ganaderias")}>Ganaderías</button>
        <button className={tab==="ferias"?"active":""} onClick={()=>setTab("ferias")}>Ferias</button>
      </div>

      <div className="rank-list">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/rankings/${tipo}/${item.id}`}
            className="rank-card"
          >
            <img src={item.imagen} className="rank-img" />
            <div className="rank-info">
              <h3 className="rank-nombre">{item.nombre}</h3>
              <p className="rank-puntos">{item.puntos} puntos</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
