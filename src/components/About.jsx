import { aboutParagraphs, aboutCards } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="neon-text">About Me</h2>

      <div className="about-grid">
        <img src="/profile.png" alt="Harsh" className="about-photo" />

        <div>
          {aboutParagraphs.map((text, i) => (
            <p key={i} className="about-text">
              {text}
            </p>
          ))}

          <div className="about-cards">
            {aboutCards.map((c) => (
              <div className="card about-card" key={c.title}>
                <h3>{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}