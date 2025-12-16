export default function PageContainer({ title, children }) {
  return (
    <div style={{
      padding: "80px 40px",
      maxWidth: "1100px",
      margin: "0 auto",
      color: "#fff",
    }}>
      {title && (
        <h1 style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "25px",
          textShadow: "0 0 8px rgba(0,0,0,0.6)"
        }}>
          {title}
        </h1>
      )}

      <div style={{
        padding: "25px",
        borderRadius: "12px",
        backdropFilter: "blur(6px)",
      }}>
        {children}
      </div>
    </div>
  );
}
