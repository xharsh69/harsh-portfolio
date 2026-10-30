import { profile, contact } from "../data/portfolio";

// splits text into single letters so each one can zoom on its own
function Letters({ text }) {
  const words = text.split(" ");
  return words.map((word, w) => (
    <span key={w}>
      <span className="word">
        {[...word].map((ch, i) => (
          <span className="letter" key={i}>
            {ch}
          </span>
        ))}
      </span>
      {w < words.length - 1 && " "}
    </span>
  ));
}

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 aria-label={`Hi, I'm ${profile.name}.`}>
          <span aria-hidden="true">
            <Letters text="Hi, I'm" />
            <br />
            <span className="neon-text">
              <Letters text={`${profile.name}.`} />
            </span>
          </span>
        </h1>
        <h2 className="hero-sub">{profile.headline}</h2>
        <p className="hero-text">{profile.intro}</p>
        <div className="hero-buttons">
          <a href="#projects">
            <button className="btn">View my work →</button>
          </a>
          <a href={`mailto:${contact.email}`}>
            <button className="btn btn-outline">Email me ✉</button>
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img src="/profile.png" alt="Harsh" className="avatar" />
        <div className="avail-card">
          <p>
            <span className="dot"></span>Available for work
          </p>
          <p>I'm open to freelance AI automation projects.</p>
          <a href={contact.upwork} target="_blank" rel="noreferrer">
            View my Upwork profile →
          </a>
        </div>
      </div>
    </section>
  );
}