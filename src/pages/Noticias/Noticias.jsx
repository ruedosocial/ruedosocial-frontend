import React from 'react';
import './Noticias.css';
import Layout from '../../layout/Layout.jsx';

const Noticias = () => {
  const fila1 = [
    { titulo: 'Últimas Noticias del Ruedo', desc: 'Actualidad taurina en tiempo real' },
    { titulo: 'Noticias de Ferias', desc: 'Anuncios, cambios y novedades' }
  ];

  const fila2 = [
    { titulo: 'Noticias de Toreros', desc: 'Entrenamientos, declaraciones y más' },
    { titulo: 'Noticias de Ganaderías', desc: 'Hierros, encierros y preparativos' },
    { titulo: 'Especial del Día', desc: 'El titular más relevante de la jornada' }
  ];

  return (
    <Layout>
      <div className="noticias-contenedor">
        <h1 className="titulo-seccion">Noticias del Ruedo</h1>

        <div className="noticias-grid fila1">
          {fila1.map((t, i) => (
            <div key={i} className="noticias-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Leer</button>
            </div>
          ))}
        </div>

        <div className="noticias-grid fila2">
          {fila2.map((t, i) => (
            <div key={i} className="noticias-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Leer</button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Noticias;
