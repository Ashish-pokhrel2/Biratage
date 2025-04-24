import React from 'react';
import { Award } from 'lucide-react';
import { HeritageStats } from '../types';

const stats: HeritageStats[] = [
  { count: 15, label: "Traditions Documented" },
  { count: 8, label: "Preservation Projects" },
  { count: 24, label: "Local Artisans" },
  { count: 320, label: "Community Members" }
];

const HeritageSection: React.FC = () => {
  return (
    <section className="py-16 bg-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white text-red-800 rounded-full text-sm font-medium mb-3">
              Our Impact
            </span>
            <h2 className="text-3xl font-serif font-bold">Cultural Heritage Preservation</h2>
            <p className="text-red-100 mt-2">Together we're preserving Biratnagar's unique traditions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <p className="text-red-100">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">Join Our Mission To Preserve Cultural Heritage</h3>
                <p className="text-red-100 mb-4">
                  At Biratage, we believe that our cultural heritage is our greatest asset. We're working with the community to document, preserve, and celebrate the unique traditions that make Biratnagar special.
                </p>
                <p className="text-red-100">
                  From traditional arts and crafts to music, dance, and culinary traditions, we're creating a living archive of our cultural identity for future generations.
                </p>
              </div>
              
              <div className="md:w-1/3 text-center">
                <button className="inline-flex items-center justify-center bg-white text-red-800 hover:bg-red-100 py-3 px-6 rounded-full font-medium transition-colors">
                  <Award size={18} className="mr-2" />
                  <span>Support Our Mission</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;