const PrivateSection = ({ title, subtitle, children }) => {
  return (
    <section className="private-section" style={{
      padding: "90px",
      minHeight: "100vh",
      color: "#fff"
    }}>
      <h1 style={{
        color: "#f7d376",
        fontSize: "3.2rem",
        marginBottom: "8px"
      }}>
        {title}
      </h1>

      <p style={{
        color: "#ff9f43",
        fontSize: "1.3rem",
        marginBottom: "50px"
      }}>
        {subtitle}
      </p>

      {children}
    </section>
  );
};

export default PrivateSection;
