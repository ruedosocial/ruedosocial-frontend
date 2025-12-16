import React from 'react';
import './Multimedia.css';
import Layout from '../../layout/Layout.jsx';

const Multimedia = () => {
  const fila1 = [
    { titulo: 'Fotos del Ruedo', desc: 'Momentos destacados en imágenes' },
    { titulo: 'Vídeos de Festejos', desc: 'Resumen audiovisual de las faenas' }
  ];

  const fila2 = [
    { titulo: 'Galería de Ganaderías', desc: 'Toros, hierros y campo bravo' },
    { titulo: 'Galería de Toreros', desc: 'Faenas y entrenamientos' },
    { titulo: 'Especial Multimedia', desc: 'Contenido exclusivo del día' }
  ];

  return (
    <Layout>
      <div className="multimedia-contenedor">
        <h1 className="titulo-seccion">Multimedia del Ruedo</h1>

        <div className="multimedia-grid fila1">
          {fila1.map((t, i) => (
            <div key={i} className="multimedia-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Ver</button>
            </div>
          ))}
        </div>

        <div className="multimedia-grid fila2">
          {fila2.map((t, i) => (
            <div key={i} className="multimedia-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Ver</button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Multimedia;
