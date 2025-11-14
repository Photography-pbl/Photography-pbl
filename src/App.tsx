import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className={`text-xl font-bold transition-colors duration-300 ${
              scrollY > 100 ? 'text-gray-900' : 'text-white'
            }`}
          >
            Portfolio
          </a>
          <div className="flex gap-8">
            <a
              href="#projects"
              className={`transition-colors duration-300 hover:opacity-70 ${
                scrollY > 100 ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 hover:opacity-70 ${
                scrollY > 100 ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Hero scrollY={scrollY} />
      <ProjectGallery />
      <Contact />

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
