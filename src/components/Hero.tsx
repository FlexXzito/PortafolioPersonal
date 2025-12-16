import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

import bg from '../../public/bg-1.png';

export const socialLinks = [
  { icon: Github, href: 'https://github.com/FlexXzito', label: 'GitHub', text: 'FlexXzito' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/david-felipe-vasquez-pardo-3369902b2/', label: 'LinkedIn', text: 'David Felipe Vasquez Pardo' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=davidfe0545@gmail.com', label: 'Email', text: 'davidfe0545@gmail.com' },
  { icon: MessageCircle, href: 'https://wa.me/+573127061275', label: 'Instagram', text: '+57 312 706 1275' },
];

const Hero = () => {

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div>
            <image>
              <img
                src="https://avatars.githubusercontent.com/u/152346670?v=4"
                alt="David Vasquez"
                className="w-46 h-46 rounded-full mx-auto mb-6 border-2 border-white shadow-lg animate-fade animate-once animate-duration-10000 animate-ease-in-out"
              />
            </image>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            David Vasquez
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            Ingeniero de Sistemas | Desarrollador Jr. 
          </p>
          <div className="flex justify-center gap-4 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white hover:text-white transition-colors hover:scale-110"
                target = "blank"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;