import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="neon-text">Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {projects.map((p) => (
          <div key={p.title} className="card">
            <span style={{ color: "var(--purple)", fontSize: "0.8rem" }}>
              {p.status}
            </span>
            <h3 style={{ marginTop: "6px" }}>{p.title}</h3>
            <p style={{ color: "var(--muted)", margin: "10px 0" }}>{p.desc}</p>
            <p style={{ color: "var(--blue)", fontSize: "0.9rem" }}>{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}