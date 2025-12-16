import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { socialLinks } from './components/Hero';

import bg from '../public/bg-1.png';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Contact /> */}

      <footer className="py-8 bg-black/40 backdrop-blur-sm" >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center text-white mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} David Felipe Vasquez Pardo. All rights reserved.</p>
          </div>
          <div className="flex justify-center flex-col gap-4 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            {socialLinks.map(({ icon: Icon, href, label, text }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white hover:scale-110 transition-colors flex items-center gap-2"
                target = "blank"
              >
                <Icon size={24} />
                <span className="text-sm">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;