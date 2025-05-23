import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
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
          
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Hitanshu Yadav, a dedicated Computer Science undergraduate at VIT Bhopal University with a CGPA of 8.64. 
              My passion lies in creating innovative tech solutions with a particular interest in machine learning and full-stack development.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Over the years, I've worked on impactful projects like a Stock Price Prediction Model using LSTM and a CNN-powered Potato Disease Detector. 
              My experience also includes an internship at Finlatics, where I optimized ML models for financial predictions.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I have hands-on experience in Python, JavaScript, React, Django, Flask, TensorFlow, and Docker. 
              I’m also certified in Machine Learning, Cloud Computing, and Python Essentials. 
              Outside of tech, I enjoy hiking, sci-fi novels, and trying out new recipes.
            </p>
            
            <div className="mt-8">
              <a 
                href="https://1drv.ms/w/c/ebe8191c21bbd6f1/EXebvuzV-gRPuyfAoFAQLd0BXFf1yOQbsfA3cH17ID7dxg?e=Imzbap" 
                className="inline-block px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
