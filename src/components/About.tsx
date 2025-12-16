import { Code2, Rocket, Briefcase, Bot, BookOpen, User } from 'lucide-react';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_HV_DavidFVasquezP.pdf';
    link.download = 'CV_HV_DavidFVasquezP.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
  {
    icon: Code2,
    title: 'Desarrollo web',
    description: 'Creación de aplicaciones web modernas y adaptables con soluciones innovadoras.',
    color: 'blue'
  },
  {
    icon: Rocket,
    title: 'Innovación',
    description: 'Explorando tecnologías emergentes y enfoques creativos para resolver desafíos complejos.',
    color: 'blue'
  },
  {
    icon: Briefcase,
    title: 'Experiencia',
    description: 'Experiencia práctica adquirida a través de diversos proyectos universitarios y aprendizaje práctico.',
    color: 'blue'
  },
  {
    icon: Bot,
    title: 'Exploración de IA',
    description: 'Adentrándome en inteligencia artificial para crear soluciones de próxima generación.',
    color: 'blue'
  },
  {
    icon: BookOpen,
    title: 'Aprendizaje Continuo',
    description: 'Expandiendo constantemente mis habilidades a través de desafíos académicos y proyectos personales.',
    color: 'blue'
  },
  {
    icon: User,
    title: 'Trabajo en Equipo',
    description: 'Colaborando eficazmente con equipos multidisciplinarios para alcanzar objetivos comunes.',
    color: 'blue'
  }
];

  return (
    <section className="py-20 bg-black/30 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/bg-1.png)` }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">SOBRE MI</h2>
        <div className="max-w-7xl mx-auto text-blue-100 flex flex-col items-center">
          <p className="mb-6 text-justify max-w-3xl">
            Como Ingeniero de Sistemas, soy un profesional proactivo y perseverante, impulsado por la innovación y el aprendizaje continuo de nuevas tecnologías. Poseo experiencia práctica y sólida en el desarrollo de software, abarcando las áreas de frontend y backend en contextos tanto académicos como profesionales. Mi objetivo es aplicar mis conocimientos y experiencia para consolidar mi trayectoria y alcanzar la meta de convertirme en un Desarrollador Full Stack.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className={`p-6 rounded-lg bg-${color}-900/30 backdrop-blur-sm hover:scale-105`}>
                <Icon className={`w-8 h-8 text-${color}-300 mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-blue-200">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold transition-transform hover:scale-105 cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 4v12m0 0l-4-4m4 4 4-4M4 20h16"
              />
            </svg>
            Descargar Hoja de Vida
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;