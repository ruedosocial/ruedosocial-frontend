import "./RuedoRank.css";

export default function RuedoRank() {

  const ranking = [
    {
      id: 1,
      nombre: "Roca Rey",
      puntos: 98,
      imagen: "/Galeria/toreros/Ftorerook1.jpg",
    },
    {
      id: 2,
      nombre: "Morante de la Puebla",
      puntos: 92,
      imagen: "/Galeria/toreros/Ftorerook3.jpg",
    },
    {
      id: 3,
      nombre: "Daniel Luque",
      puntos: 89,
      imagen: "/Galeria/toreros/Ftorerook5.jpg",
    },
    {
      id: 4,
      nombre: "Juan Ortega",
      puntos: 88,
      imagen: "/Galeria/toreros/torero2.jpg",
    },
    {
      id: 5,
      nombre: "Talavante",
      puntos: 85,
      imagen: "/Galeria/toreros/Ftorerook4.jpg",
    }
  ];

  return (
    <div className="rank-container">
      <h1 className="rank-title">RuedoRank — Clasificación General</h1>

      <table className="rank-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Torero</th>
            <th>Puntos</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((t, idx) => (
            <tr key={t.id}>
              <td>{idx + 1}</td>
              <td>{t.nombre}</td>
              <td>{t.puntos}</td>
              <td>
                <img src={t.imagen} alt="torero" className="rank-img"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
