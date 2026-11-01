import { projects } from "../data/portfolio";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="neon-text">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="card project-card">
            {p.image ? (
              <img src={p.image} alt={p.title} className="project-thumb" />
            ) : (
              <div className="project-thumb placeholder">{p.title}</div>
            )}

            <div className="project-body">
              <span className="status">{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {p.demo && (
                  <a className="pill primary" href={p.demo} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                )}
                {p.github && (
                  <a className="pill" href={p.github} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                )}
                {!p.demo && !p.github && (
                  <span className="soon">Code coming soon</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}