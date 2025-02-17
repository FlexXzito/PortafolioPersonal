import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

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
      title: 'AI Chatbot Psicologia',
      description: 'A modern chat platform leveraging advanced AI to deliver personalized psychological treatment.',
      image: 'https://arespsicologia.com/wp-content/uploads/2020/03/simbolo-de-la-psicologia.jpg',
      link: 'https://github.com/FlexXzito/ChatAI',
      tags: ['React', 'Node.js', 'MySql','OpenAi']
    },
    {
      id: 2,
      title: 'AI Chatbot Juridico',
      description: 'A modern legal consultation platform leveraging advanced AI to deliver personalized case assistance and tailored legal insights.',
      image: 'https://enlinea.santotomas.cl/web/wp-content/uploads/sites/2/2023/11/WhatsApp-Image-2023-11-20-at-20.16.09-744x465.jpeg',
      link: 'https://github.com/FlexXzito/Juridico',
      tags: ['React', 'Node.js', 'MySql','OpenAi']
    },
  ]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <div 
                className="aspect-video bg-gradient-to-r from-blue-800 to-purple-800 relative"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
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