/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './AgencyStatistics.css';

const statistics = [
  { id: 1, icon: 'fas fa-rocket', number: 256, label: 'Project Complete' },
  { id: 2, icon: 'fas fa-users', number: 783, label: 'Satisfied Clients' },
  { id: 3, icon: 'fas fa-award', number: 97, label: 'Awards Winning' },
  { id: 4, icon: 'fas fa-briefcase', number: 35, label: 'Years Of Experience' },
];

const AgencyStatistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-white text-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <span className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold mb-4">Agency Statistics</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why People Like Us</h2>
        <p className="mt-4 text-lg text-gray-600">Professional Design Agency to provide solutions</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="stat-card p-6 border border-gray-200 rounded-lg shadow-lg">
              <i className={`${stat.icon} text-4xl text-blue-600 mb-4`}></i>
              <h3 className="text-2xl font-bold text-gray-900">
                {inView && <CountUp start={0} end={stat.number} duration={2.5} />}+
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyStatistics;
