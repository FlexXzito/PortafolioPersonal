import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { socialLinks } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}

      <footer className="py-8 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center text-blue-200 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} David Felipe Vasquez Pardo. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-4 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;