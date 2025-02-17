import React from 'react';
import { Code2, Rocket, Briefcase, Bot, BookOpen } from 'lucide-react';

const About = () => {
  const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Crafting modern and responsive web applications with innovative solutions.',
    color: 'indigo'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Exploring emerging technologies and creative approaches to solve complex challenges.',
    color: 'indigo'
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Gained practical experience through diverse university projects and hands-on learning.',
    color: 'indigo'
  },
  {
    icon: Bot, // Asegúrate de que este icono esté disponible en tu librería
    title: 'AI Exploration',
    description: 'Diving into artificial intelligence to pioneer next-gen solutions.',
    color: 'indigo'
  },
  {
    icon: BookOpen, // Puedes cambiarlo por otro icono si lo prefieres
    title: 'Continuous Learning',
    description: 'Constantly expanding my skillset through academic challenges and personal projects.',
    color: 'indigo'
  }
];

  

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="max-w-7xl mx-auto text-blue-100 flex flex-col items-center">
          <p className="mb-6 text-justify max-w-3xl">
            I am a fifth semester student of Systems Engineering and I am passionate about web development. Throughout my experience in various projects, I have learned to merge creativity and logic to create innovative solutions. I am excited to explore new technologies and approaches, dive into the field of artificial intelligence and face every challenge as an opportunity to grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className={`p-6 rounded-lg bg-${color}-900/30 backdrop-blur-sm`}>
                <Icon className={`w-8 h-8 text-${color}-300 mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-blue-200">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;