import { services } from "../data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="neon-text">Services</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p style={{ color: "var(--muted)", marginTop: "10px" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}