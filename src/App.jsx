import Chatbot from "./components/Chatbot";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Chatbot />
      <Contact />
      
    </>
  );
}