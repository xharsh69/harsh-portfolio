import { useState, useEffect } from "react";
import { profile, contact } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const links = ["About", "Services", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <span>{profile.name.charAt(0)}</span>
        {profile.name.slice(1)}.
      </h2>

      <div className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <a className="icon-link" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a className="icon-link" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="icon-link" href={`mailto:${contact.email}`} aria-label="Email">
          <MailIcon />
        </a>

        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}