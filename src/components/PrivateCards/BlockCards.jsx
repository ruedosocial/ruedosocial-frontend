import { Link } from "react-router-dom";
import "./block-cards.css";

const BlockCards = ({ title, cards }) => {
  return (
    <div className="block-wrapper">
      <h1 className="block-title-main">{title}</h1>
      <div className="cards-grid">
        {cards.map(c => (
          <Link key={c.to} to={c.to} className="block-card">
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlockCards;
