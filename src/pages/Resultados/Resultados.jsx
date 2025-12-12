import React from 'react';
import './Resultados.css';
import Layout from '../../layout/Layout.jsx';

const Resultados = () => {
  const tarjetasFila1 = [
    { titulo: 'Resultados Recientes de Ferias', desc: 'Últimos festejos y puntuaciones' },
    { titulo: 'Mejores Toreros de la Semana', desc: 'Top actuaciones recientes' }
  ];

  const tarjetasFila2 = [
    { titulo: 'Ganaderías Destacadas', desc: 'Hierros con mejores encierros' },
    { titulo: 'Últimas Puertas Grandes', desc: 'Actuaciones más sobresalientes' },
    { titulo: 'Toro Más Destacado', desc: 'Toro con mayor valoración reciente' }
  ];

  return (
    <Layout>
      <div className="resultados-contenedor">
        <h1 className="titulo-seccion">Resultados del Ruedo</h1>

        <div className="resultados-grid fila1">
          {tarjetasFila1.map((t, i) => (
            <div key={i} className="resultados-card">
              <div className="card-titulo">{t.titulo}</div>
              <div className="card-desc">{t.desc}</div>
              <button className="card-btn">Ver más</button>
            </div>
          ))}
        </div>

        <div className="resultados-grid fila2">
          {tarjetasFila2.map((t, i) => (
            <div key={i} className="resultados-card">
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

export default Resultados;
