import "./Aula.css";
import { useParams } from "react-router-dom";
import { cursos } from "../../data/aula/aula";

export default function AulaDetalle() {

  const { id } = useParams();
  const curso = cursos.find(c => c.id === Number(id));

  return (
    <div className="aula-detalle-container">

      <h1 className="aula-title">{curso.titulo}</h1>

      <img src={curso.imagen} className="aula-detalle-img" />

      <p className="aula-detalle-desc">
        {curso.descripcion}
      </p>

      <h2 className="aula-section-title">Lecciones incluidas</h2>

      <ul className="aula-lecciones">
        {curso.lecciones.map((l, index) => (
          <li key={index} className="aula-leccion-item">
            {l}
          </li>
        ))}
      </ul>

    </div>
  );
}
