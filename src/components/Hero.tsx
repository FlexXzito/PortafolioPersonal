import React from 'react';
import { Github, Linkedin, Mail, Instagram, CircleFadingPlus } from 'lucide-react';

export const socialLinks = [
  { icon: Github, href: 'https://github.com/FlexXzito', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/david-felipe-vasquez-pardo-3369902b2/', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=davidfe0545@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/flexxzitoo/', label: 'Instagram' },
];

const Hero = () => {

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587465511660-05c929e0e874?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            David Vasquez
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade animate-once animate-duration-10000 animate-ease-in-out">
            Systems Engineer & Software Developer 
          </p>
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
      </div>
    </header>
  );
};

export default Hero;