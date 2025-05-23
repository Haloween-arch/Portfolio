import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[30%] w-72 h-72 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-[15%] w-48 h-48 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            <span className="block">Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hitanshu Yadav</span></span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 dark:from-blue-400 dark:via-teal-300 dark:to-purple-400">
              Full Stack & AI Developer
              </span>
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
             I craft robust web applications and intelligent AI systems. Passionate about building scalable full stack solutions and applying machine learning to solve real-world problems.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-10 flex space-x-6">
            <a 
              href="https://github.com/Haloween-arch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hitanshu-yadav-468538251/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:hitanshuyadav04@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email me"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
