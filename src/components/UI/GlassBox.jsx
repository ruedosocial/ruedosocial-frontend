export default function GlassBox({ children }) {
  return (
    <div
      style={{
        padding: "25px",
        borderRadius: "14px",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.12)",
        width: "260px",
        textAlign: "center",
        color: "#fff"
      }}
    >
      {children}
    </div>
  );
}
