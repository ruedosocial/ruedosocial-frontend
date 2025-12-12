import "./Perfil.css";

export default function Perfil() {
  return (
    <div className="perfil-container">

      <h1 className="titulo">👤 Perfil del Aficionado</h1>

      <div className="perfil-bloque">
        <h2>Información Personal</h2>
        <p>Muy pronto podrás editar tu nombre, alias taurino, gustos y preferencias.</p>
      </div>

      <div className="perfil-bloque">
        <h2>Actividad en RuedoSocial</h2>
        <p>Seguimiento de ferias favoritas, toreros favoritos y encastes más vistos.</p>
      </div>

      <div className="perfil-bloque">
        <h2>Estadísticas</h2>
        <p>
          Aquí aparecerán datos de tu actividad como votos, reseñas y participación 
          en el ruedo digital.
        </p>
      </div>

    </div>
  );
}
