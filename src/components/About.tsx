import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
          
          {/* Image Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-xl -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400"></div>
            </div>

            {/* Hook */}
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              AI & Full-Stack Developer building intelligent, scalable systems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’m <strong>Hitanshu Yadav</strong>, a Computer Science undergraduate at
              <strong> VIT Bhopal University</strong> (CGPA: <strong>8.6</strong>),
              passionate about transforming real-world problems into
              <strong> production-ready AI and full-stack solutions</strong>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’ve built end-to-end systems ranging from
              <strong> AI-powered healthcare explainers</strong> and
              <strong> multi-agent farming assistants</strong> to
              <strong> intelligent static code reviewers</strong>.
              My work focuses on clean architecture, scalability, and
              delivering measurable impact—not just demos.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              During my internship at <strong>Finlatics</strong>, I optimized
              machine learning models for financial forecasting, improving
              prediction efficiency and model reliability through data-driven
              tuning and evaluation.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My core stack includes <strong>Python, Java, React, FastAPI, Django,
              MongoDB</strong>, and modern AI tooling like
              <strong> LangChain, LLMs, NLP, and Computer Vision</strong>.
              I enjoy designing systems, mentoring peers, and continuously
              pushing my technical limits.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Haloween-arch/Resume"
                className="inline-block px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
