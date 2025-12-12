import React from 'react';
import './Clasificacion.css';
import Layout from '../../layout/Layout.jsx';

const Clasificacion = () => {
  const tarjetas = [
    { titulo: 'Ranking General del Ruedo', desc: 'Top 5 toreros del momento' },
    { titulo: 'Clasificación por Ferias', desc: 'Líderes en cada feria' },
    { titulo: 'Clasificación por Ganaderías', desc: 'Mejores hierros y resultados' },
    { titulo: 'Estadísticas Especiales', desc: 'Puertas grandes, orejas y más' },
    { titulo: 'Tendencias del Ruedo', desc: 'Subidas y bajadas de la semana' }
  ];

  return (
    <Layout>
      <div className="clasificacion-contenedor">
        <h1 className="titulo-seccion">Clasificación del Ruedo</h1>

        <div className="clasificacion-grid fila1">
          {tarjetas.slice(0, 2).map((t, i) => (
            <div key={i} className="clasificacion-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Ver más</button>
            </div>
          ))}
        </div>

        <div className="clasificacion-grid fila2">
          {tarjetas.slice(2, 5).map((t, i) => (
            <div key={i} className="clasificacion-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Ver más</button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Clasificacion;
