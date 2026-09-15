import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-black dark:text-white selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <Navbar />
      <Hero />
      <Experience />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;