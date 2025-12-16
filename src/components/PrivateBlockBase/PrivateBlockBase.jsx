import "./PrivateBlockBase.css";

export default function PrivateBlockBase({ title, subtitle, cards }) {
  return (
    <section className="private-block-base">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>

      <div className="card-grid">
        {cards.map(card => (
          <div key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
