export default function ContenedorSeccion({ children }) {
  return (
    <div style={{
      display: "grid",
      gap: "20px",
      padding: "10px"
    }}>
      {children}
    </div>
  );
}
