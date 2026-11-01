import { useState } from "react";
import { contact, formEndpoint } from "../data/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  InstagramIcon,
  UpworkIcon,
} from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // bots fill the hidden field, real people never see it
    if (data._gotcha) return;

    // no form service connected yet: open the visitor's email app instead
    if (!formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(
        `${data.message}\n\nFrom: ${data.name} (${data.email})`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="neon-text">Contact Me</h2>

      <div className="contact-grid">
        <div>
          <p className="contact-lead">
            Have an automation or AI agent idea? Send me a message and let's
            talk about it.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-ico"><MailIcon /></span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="contact-ico"><UpworkIcon /></span>
              <a href={contact.upwork} target="_blank" rel="noreferrer">
                Hire me on Upwork
              </a>
            </li>
            <li>
              <span className="contact-ico"><span className="dot"></span></span>
              <span>Open to freelance projects</span>
            </li>
          </ul>

          <div className="social-row">
            <a className="social-btn" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="social-btn" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="social-btn" href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />

          {/* hidden trap for spam bots */}
          <input
            type="text"
            name="_gotcha"
            className="hp"
            tabIndex="-1"
            autoComplete="off"
          />

          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="form-note ok" role="status">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-note err" role="status">
              Something went wrong. Please email me directly at {contact.email}.
            </p>
          )}
        </form>
      </div>

      <p className="footer-note">© 2026 Harsh. All rights reserved.</p>
    </section>
  );
}