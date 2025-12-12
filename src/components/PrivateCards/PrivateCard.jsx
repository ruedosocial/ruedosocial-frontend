import { useNavigate } from "react-router-dom";

export default function PrivateCard({ title, subtitle, to, primary, icon }) {
  const navigate = useNavigate();

  return (
    <div
      className={`private-card ${primary ? "primary" : ""}`}
      onClick={() => to && navigate(to)}
      style={{ cursor: to ? "pointer" : "default" }}
    >
      {icon && <div className="rs-icon">{icon}</div>}
      <h3 className="private-card-title">{title}</h3>
      {subtitle && <p className="private-card-subtitle">{subtitle}</p>}
    </div>
  );
}
