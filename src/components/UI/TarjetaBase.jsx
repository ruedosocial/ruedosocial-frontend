export default function TarjetaBase({ children }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      border: "2px solid var(--albero)",
      transition: "0.2s ease"
    }}>
      {children}
    </div>
  );
}
