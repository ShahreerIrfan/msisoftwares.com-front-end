/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ProfessionalExperience.css';

const experiences = [
  { id: 1, category: 'Design', title: 'Dashboard Design', description: 'Creative Design', image: '/images/Dashboard.webp' },
  { id: 2, category: 'Development', title: 'Landing Pages', description: 'Creative Design', image: '/images/landing-page.webp' },
  { id: 3, category: 'Branding', title: 'Illustration Design', description: 'Creative Design', image: '/images/Illustration_Design.webp' },
  { id: 4, category: 'SEO', title: 'SEO Optimization', description: 'SEO', image: '/images/seo.webp' },
  { id: 5, category: 'UX/UI Design', title: 'Mobile App Design', description: 'UX/UI Design', image: '/images/Mobile_App_Design.webp' },
 
];

const categories = ['Show All', 'Design', 'Branding', 'Development', 'SEO', 'UX/UI Design'];

const ProfessionalExperience = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredExperiences = selectedCategory === 'Show All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <span className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Latest Work</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Experience</h2>
        <p className="mt-4 text-lg text-gray-600">
          Professional Design Agency to provide solutions
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="experience-card p-6 border border-gray-200 rounded-lg">
              <img src={exp.image} alt={exp.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
