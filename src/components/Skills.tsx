import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [skills] = useState<Skill[]>([
    { name: 'React', level: 60, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'javascript', level: 90, category: 'languages' },
    { name: 'TypeScript', level: 40, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'AWS', level: 20, category: 'devops' },
    { name: 'Docker', level: 30, category: 'devops' },
    { name: 'MongoDB', level: 40, category: 'backend' },
    { name: 'MySQL', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 65, category: 'backend' }
  ]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'languages', name: 'Languages' }
  ];

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-blue-100">{skill.name}</p>
                <span className="text-blue-200 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;