import { contact } from "../data/portfolio";

export default function Contact() {
  const links = [
    { label: "Email Me", href: `mailto:${contact.email}` },
    { label: "GitHub", href: contact.github },
    { label: "Upwork", href: contact.upwork },
    { label: "LinkedIn", href: contact.linkedin },
    { label: "Instagram", href: contact.instagram },
  ];


  return (
    <section id="contact" className="section" style={{ textAlign: "center" }}>
      <h2 className="neon-text">Let's Work Together</h2>
      <p style={{ color: "var(--muted)", margin: "16px 0 32px" }}>
        Have an automation or AI agent idea? Send me a message and let's talk.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            <button className="btn">{l.label}</button>
          </a>
        ))}
      </div>
    </section>
  );
}