import { journey } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="neon-text">Experience & Education</h2>
      <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
        {journey.map((item) => (
          <div key={item.title} className="card">
            <span style={{ color: "var(--primary)", fontSize: "0.8rem" }}>
              {item.status}
            </span>
            <h3 style={{ marginTop: "6px" }}>{item.title}</h3>
            <p style={{ color: "var(--muted)", marginTop: "10px" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}