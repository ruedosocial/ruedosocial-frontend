import "./styles/dashboard.css";

const cards = [
  { title: "Faenas Activas", value: "3" },
  { title: "Saldo Actual", value: "0,00 €" },
  { title: "Ranking", value: "#128" },
  { title: "Rendimiento", value: "+12%" }
];

export default function DashboardCards() {
  return (
    <div className="dashboard-grid">
      {cards.map(c => (
        <div key={c.title} className="dashboard-card">
          <span className="card-title">{c.title}</span>
          <span className="card-value">{c.value}</span>
        </div>
      ))}
    </div>
  );
}
