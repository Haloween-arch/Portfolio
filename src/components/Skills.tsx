import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 95 },
        { name: 'C/C++', level: 85 },
        { name: 'SQL', level: 90 },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 90 },
        { name: 'Django', level: 95 },
        { name: 'FastAPI', level: 92 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      name: 'AI / ML',
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'Deep Learning (CNNs)', level: 85 },
        { name: 'NLP', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'LLMs & Prompt Engineering', level: 88 },
        { name: 'OCR & Document AI', level: 90 },
      ],
    },
    {
      name: 'System & Architecture',
      skills: [
        { name: 'Microservices Architecture', level: 88 },
        { name: 'API Gateway Design', level: 85 },
        { name: 'Multi-Agent Systems', level: 90 },
        { name: 'MVC & Clean Architecture', level: 92 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker (Basics)', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Postman', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical skills and areas of expertise developed through projects,
            problem-solving, and real-world systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technologies I've Worked With
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              'Python',
              'Java',
              'C++',
              'SQL',
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'FastAPI',
              'Django',
              'MongoDB',
              'Express',
              'LangChain',
              'LLMs',
              'Docker',
              'Git',
              'Tailwind CSS',
              'REST APIs',
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
