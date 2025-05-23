import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: 'Meditalk',
      description: 'A healthcare communication platform using AI for simplified medical information.',
      image: 'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg',
      tags: ['React', 'FastAPI', 'OCR', 'NLP'],
      liveUrl: 'https://github.com/Haloween-arch/meditalk',
      githubUrl: 'https://github.com/Haloween-arch/meditalk',
      category: 'web',
    },
    {
      id: 2,
      title: 'Mausam',
      description: 'A weather chatbot using Dialogflow and APIs for real-time forecasts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['Dialogflow', 'Node.js', 'API'],
      liveUrl: 'https://github.com/Haloween-arch/mausam',
      githubUrl: 'https://github.com/Haloween-arch/mausam',
      category: 'app',
    },
    {
      id: 3,
      title: 'Hospital Management System',
      description: 'Full-featured hospital management system with Django and MySQL.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      tags: ['Django', 'MySQL', 'Bootstrap'],
      liveUrl: 'https://github.com/Haloween-arch/hospital',
      githubUrl: 'https://github.com/Haloween-arch/hospital',
      category: 'web',
    },
    {
      id: 4,
      title: 'Evolve',
      description: 'A Java-based software with BSD 3-Clause License.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['Java', 'BSD License'],
      liveUrl: 'https://github.com/Haloween-arch/evolve',
      githubUrl: 'https://github.com/Haloween-arch/evolve',
      category: 'app',
    },
    {
      id: 5,
      title: 'Juno',
      description: 'HTML-based project with sleek UI design.',
      image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
      tags: ['HTML','Dialogflow', 'Node.js', 'API'],
      liveUrl: 'https://github.com/Haloween-arch/juno',
      githubUrl: 'https://github.com/Haloween-arch/juno',
      category: 'web',
    },
    {
      id: 6,
      title: 'MERN Assignment',
      description: 'Assignment project using MERN stack.',
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg',
      tags: ['JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      liveUrl: 'https://github.com/Haloween-arch/Mern_Assignment',
      githubUrl: 'https://github.com/Haloween-arch/Mern_Assignment',
      category: 'web',
    },
    {
      id: 7,
      title: 'Flight Finder',
      description: 'A JavaScript project to search and book flights.',
      image: 'https://images.pexels.com/photos/5849562/pexels-photo-5849562.jpeg',
      tags: ['JavaScript', 'MongoDB'],
      liveUrl: 'https://github.com/Haloween-arch/Flight_Finder',
      githubUrl: 'https://github.com/Haloween-arch/Flight_Finder',
      category: 'app',
    },
    {
      id: 8,
      title: 'Potato Disease Model',
      description: 'A ML model in Jupyter Notebook for potato disease prediction.',
      image: 'https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg',
      tags: ['Jupyter', 'ML', 'Plant Pathology'],
      liveUrl: 'https://github.com/Haloween-arch/Potato_Disease_Model',
      githubUrl: 'https://github.com/Haloween-arch/Potato_Disease_Model',
      category: 'ai',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'Applications' },
    { id: 'ai', name: 'AI Projects' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work across various domains and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
