import "./RuedoRank.css";

export default function RankCard({ name, score, image }) {
  return (
    <div className="rank-card">
      <div
        className="rank-card-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="rank-card-content">
        <h3 className="rank-name">{name}</h3>
        <p className="rank-score">Puntuación: {score}</p>
      </div>
    </div>
  );
}
