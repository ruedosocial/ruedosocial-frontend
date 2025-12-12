import { useLocation, Link } from "react-router-dom";

export default function PrivateBreadcrumb() {
  const { pathname } = useLocation();
  const parts = pathname.replace("/mi-ruedo", "").split("/").filter(Boolean);

  return (
    <div className="private-breadcrumb">
      <Link to="/mi-ruedo">Mi Ruedo</Link>
      {parts.map((p, i) => (
        <span key={i}> · {p.replace("-", " ")}</span>
      ))}
    </div>
  );
}
