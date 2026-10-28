export const profile = {
  name: "Harsh",
  headline: "AI Automation & Agentic AI Developer",
  intro: "I build Python automations and AI agents using LangChain.",
  about:
    "I'm learning Python, LangChain, AI Automation and Agentic AI, and I turn what I learn into real projects. I'm building my portfolio step by step and I'm open to freelance work.",
};

export const skills = [
  { name: "Python", level: "Learning" },
  { name: "LangChain", level: "Learning" },
  { name: "AI Automation", level: "Learning" },
  { name: "Agentic AI", level: "Learning" },
];

export const services = [
  {
    title: "AI Automation Workflows",
    desc: "Automate repetitive tasks like emails, data entry and reports.",
  },
  {
    title: "Python Scripts & Tools",
    desc: "Custom Python scripts that save you hours of manual work.",
  },
  {
    title: "LangChain AI Agents",
    desc: "AI agents that can answer questions and use tools to finish tasks.",
  },
];

export const projects = [
  {
    title: "Email Summarizer Automation",
    desc: "Python script that reads emails and creates short summaries.",
    tech: "Python, AI API",
    status: "In progress",
  },
  {
    title: "Research Agent",
    desc: "LangChain agent that searches the web and writes a short report.",
    tech: "Python, LangChain",
    status: "Planned",
  },
  {
    title: "This Portfolio Website",
    desc: "Cyberpunk portfolio built from scratch with React and Vite.",
    tech: "React, Vite, CSS",
    status: "In progress",
  },
];

export const contact = {
  email: "harshrajsinghx@gmail.com",
  github: "https://github.com/xharsh69",
  upwork: "https://www.upwork.com/freelancers/~01680c44c705531432",
  linkedin: "https://www.linkedin.com/in/harsh-raj-264b3a405",
  instagram: "https://www.instagram.com/oxharshs/",
};

export const journey = [
  {
    title: "Python Fundamentals",
    status: "Learning",
    desc: "Writing scripts, working with APIs and automating small tasks.",
  },
  {
    title: "LangChain & Agentic AI",
    status: "Learning",
    desc: "Building AI agents that use tools and finish multi-step tasks.",
  },
  {
    title: "Portfolio Website",
    status: "In progress",
    desc: "Building this site with React, Vite and CSS.",
  },
];

export const botReplies = [
  {
    keys: ["hello", "hi", "hey"],
    reply: "Hi! I'm Harsh's portfolio assistant. Ask me about his skills, projects, services or how to contact him.",
  },
  {
    keys: ["skill", "know", "tech"],
    reply: "Harsh is learning Python, LangChain, AI Automation and Agentic AI.",
  },
  {
    keys: ["service", "offer", "hire", "work"],
    reply: "Harsh can help with AI automation workflows, Python scripts and LangChain AI agents.",
  },
  {
    keys: ["project", "built", "portfolio"],
    reply: "Current projects: an Email Summarizer Automation, a Research Agent, and this portfolio website. Check the Projects section for details.",
  },
  {
    keys: ["contact", "email", "reach", "upwork"],
    reply: "You can reach Harsh through the Contact section: email, GitHub, Upwork, LinkedIn or Instagram.",
  },
];

export const botFallback =
  "I'm a simple demo bot. Try asking about skills, services, projects or contact.";