import "./Buscador.css";
import { useState } from "react";

import { ferias } from "../../data/ferias";
import toreros from "../../data/toreros";
import ganaderias from "../../data/ganaderias";
import { noticias } from "../../data/noticias/noticias";
import { festejos } from "../../data/festejos/festejos";

export default function Buscador() {

  const [q, setQ] = useState("");

  const query = q.toLowerCase();

  const resultados = [
    ...ferias
      .filter(f => f.nombre.toLowerCase().includes(query))
      .map(f => ({ tipo: "Feria", nombre: f.nombre, imagen: f.imagen, ruta: "/ferias" })),

    ...toreros
      .filter(t => t.nombre.toLowerCase().includes(query))
      .map(t => ({ tipo: "Torero", nombre: t.nombre, imagen: t.imagen, ruta: "/toreros" })),

    ...ganaderias
      .filter(g => g.nombre.toLowerCase().includes(query))
      .map(g => ({ tipo: "Ganadería", nombre: g.nombre, imagen: g.imagen, ruta: "/ganaderias" })),

    ...noticias
      .filter(n => n.titulo.toLowerCase().includes(query))
      .map(n => ({ tipo: "Noticia", nombre: n.titulo, imagen: n.imagen, ruta: `/noticias/${n.id}` })),

    ...festejos
      .filter(f => f.feria.toLowerCase().includes(query))
      .map(f => ({ tipo: "Festejo", nombre: f.feria, imagen: f.imagen, ruta: `/festejos/${f.id}` }))
  ];

  return (
    <div className="buscar-container">

      <h1 className="buscar-title">Buscador Taurino</h1>

      <input
        type="text"
        className="buscar-input"
        placeholder="Busca toreros, ferias, ganaderías..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="buscar-resultados">
        {q.length > 0 && resultados.length === 0 && (
          <p className="buscar-nores">Sin resultados</p>
        )}

        {resultados.map((r, index) => (
          <a key={index} href={r.ruta} className="buscar-item">
            <img src={r.imagen} className="buscar-img" />
            <div className="buscar-info">
              <span className="buscar-nombre">{r.nombre}</span>
              <span className="buscar-tipo">{r.tipo}</span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
