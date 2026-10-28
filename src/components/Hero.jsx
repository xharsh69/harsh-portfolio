import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section style={{ textAlign: "center", padding: "80px 20px 120px" }}>

      <img src="/profile.png" alt="Harsh" className="avatar" />
      <p style={{ color: "var(--blue)" }}>HELLO, I'M</p>
      <h1 className="neon-text" style={{ fontSize: "4rem" }}>
        {profile.name}
      </h1>
      <h2>{profile.headline}</h2>
      <p style={{ color: "var(--muted)", margin: "20px 0" }}>{profile.intro}</p>
    </section>
  );
}