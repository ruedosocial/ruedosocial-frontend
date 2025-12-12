export default function StandardCard({ title, text }) {
  return (
    <div style={{
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      width: "260px",
      backdropFilter: "blur(4px)",
      color: "#fff",
      boxShadow: "0 0 12px rgba(0,0,0,0.4)"
    }}>
      <h3 style={{ marginBottom: "10px", fontSize: "22px" }}>{title}</h3>
      <p style={{ fontSize: "16px", opacity: 0.9 }}>{text}</p>
    </div>
  );
}
