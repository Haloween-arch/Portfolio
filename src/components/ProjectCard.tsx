import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div>
            {project.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-blue-600/90 text-white text-xs px-2 py-1 rounded mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={18} className="text-white" />
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
      <div className="px-6 pb-6 pt-0">
        <a 
          href={project.liveUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;