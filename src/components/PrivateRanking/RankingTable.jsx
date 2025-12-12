import { usePrivate } from "../../context/private/PrivateContext";

export default function RankingTable() {
  const { ranking } = usePrivate();

  if (!ranking || ranking.length === 0) {
    return <div className="rs-empty">Ranking no disponible.</div>;
  }

  return (
    <div className="ranking-table">
      <div className="ranking-row header">
        <span>#</span>
        <span>Aficionado</span>
        <span>Puntos</span>
      </div>

      {ranking.map(r => (
        <div key={r.pos} className={`ranking-row ${r.alias === "ToreroDigital" ? "highlight" : ""}`}>
          <span>{r.pos}</span>
          <span>{r.alias}</span>
          <span>{r.puntos}</span>
        </div>
      ))}
    </div>
  );
}
