import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

import bg from '../../public/bg-1.png';
import psicology from '../../public/psicology.jpg';
import juridico from '../../public/juridico.png';
import ecomerce from '../../public/ecomerce.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Chatbot IA Psicología',
      description: 'Chat conversacional potenciado por IA para brindar apoyo psicológico y orientación personalizada, conservando contexto y enfoque en privacidad del usuario. Proyecto en desarrollo.',
      image: psicology,
      link: 'https://github.com/FlexXzito/ChatAI',
      tags: ['React', 'Node.js', 'MySql','OpenAi']
    },
    {
      id: 2,
      title: 'Chatbot IA Jurídico',
      description: 'Asistente legal con IA para consultas jurídicas, análisis de casos y generación de resúmenes, pensado para acelerar la investigación y primeras orientaciones legales. Actualmente en construcción.',
      image: juridico,
      link: 'https://github.com/FlexXzito/Juridico',
      tags: ['React', 'Node.js', 'MySql','OpenAi']
    },
    {
      id: 3,
      title: 'Tienda en Línea',
      description: 'Plataforma e-commerce enfocada en productos gaming y cultura geek, con catálogo, carrito y optimización de experiencia de usuario. Desarrollo en progreso.',
      image: ecomerce,
      link: 'https://github.com/FlexXzito/E_ComerceNeek-',
      tags: ['React', 'Node.js', 'mariadb']
    }
  ]);

  return (
    <section className="py-20 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">PROYECTOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg border-2 border-white/20 shadow-lg">
                <div 
                className="aspect-video bg-gradient-to-r from-blue-800 to-purple-800 relative"
                style={{
                  backgroundImage: `url(${project.image}) `,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                >
                <div className="absolute inset-0 bg-black/80">
                  <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-200 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                    ))}
                  </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.link} className="text-white flex items-center gap-2 hover:text-blue-300 transition-colors">
                  View Project <ExternalLink size={20} />
                  </a>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;