import RankingTable from "../../../components/PrivateRanking/RankingTable";

export default function Ranking() {
  return (
    <div className="rs-section">

      <h1 className="rs-title">Mi Ranking</h1>
      <p className="rs-subtitle">
        Consulta tu posición, evolución y comparación con otros aficionados.
      </p>

      <div className="rs-section-main">
        <div className="private-card primary">
          <h3 className="private-card-title">Posición Actual</h3>
          <p className="private-card-subtitle">
            Situación actual dentro del ranking general.
          </p>
        </div>
      </div>

      <RankingTable />

    </div>
  );
}
