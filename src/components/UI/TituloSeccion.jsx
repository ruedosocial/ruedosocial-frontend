export default function TituloSeccion({ titulo }) {
  return (
    <h2 style={{
      color: "var(--sangre)",
      borderBottom: "3px solid var(--oro)",
      paddingBottom: "6px",
      marginBottom: "20px",
      fontSize: "1.6rem",
      fontWeight: "700"
    }}>
      {titulo}
    </h2>
  );
}
