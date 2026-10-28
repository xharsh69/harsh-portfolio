import { useState } from "react";
import { botReplies, botFallback } from "../data/portfolio";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about Harsh's skills, services or projects." },
  ]);
  const [input, setInput] = useState("");

  function getReply(question) {
    const q = question.toLowerCase();
    const match = botReplies.find((item) =>
      item.keys.some((key) => q.includes(key))
    );
    return match ? match.reply : botFallback;
  }

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages([
      ...messages,
      { from: "user", text },
      { from: "bot", text: getReply(text) },
    ]);
    setInput("");
  }

  return (
    <section id="chatbot" className="section">
      <h2 className="neon-text">Ask My AI Assistant</h2>
      <div className="card chat-box">
        <div className="chat-messages">
          {messages.map((m, i) => (
            <p key={i} className={m.from === "bot" ? "msg bot" : "msg user"}>
              {m.text}
            </p>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a question..."
          />
          <button className="btn" onClick={send}>Send</button>
        </div>
      </div>
    </section>
  );
}