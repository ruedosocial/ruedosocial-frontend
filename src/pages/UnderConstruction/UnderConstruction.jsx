const UnderConstruction = ({ title }) => {
  return (
    <div style={{
      padding: "80px",
      color: "#f7d376",
      fontFamily: "var(--font-global)"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>{title}</h1>
      <p style={{ fontSize: "1.4rem", color: "#fff" }}>
        Sección en construcción. Próximamente disponible.
      </p>
    </div>
  );
};

export default UnderConstruction;
