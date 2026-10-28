import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="neon-text">Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {skills.map((skill) => (
          <div key={skill.name} className="card">
            <h3>{skill.name}</h3>
            <p style={{ color: "var(--blue)", marginTop: "8px" }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}