import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="neon-text">About Me</h2>
      <p style={{ color: "var(--muted)", marginTop: "16px", lineHeight: 1.7 }}>
        {profile.about}
      </p>
    </section>
  );
}