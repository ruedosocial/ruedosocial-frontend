import "./styles/private-layout.css";
import "../../styles/private/private-dashboard.css";
import "../../styles/private/private-buttons.css";
import "../../styles/private/private-icons.css";
import "../../styles/private/private-animations.css";

export default function PrivateLayout({ children }) {
  return (
    <div className="private-layout">
      {children}
    </div>
  );
}
