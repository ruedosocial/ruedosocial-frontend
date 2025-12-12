import FaenasList from "../../../components/PrivateFaenas/FaenasList";

export default function Faenas() {
  return (
    <div className="rs-section">
      <h1 className="rs-title">Mis Faenas</h1>
      <p className="rs-subtitle">Historial reciente de tus participaciones.</p>
      <FaenasList />
    </div>
  );
}
