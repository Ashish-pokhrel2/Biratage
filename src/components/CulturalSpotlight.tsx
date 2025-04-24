import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CulturalStory } from '../types';

const featuredStory: CulturalStory = {
  id: 1,
  title: "The Significance of Janai Purnima in Biratnagar",
  excerpt: "Janai Purnima, also known as Raksha Bandhan, is one of the most important festivals in Nepal. In Biratnagar, this sacred thread ceremony has unique local customs that have been preserved for generations. Discover how the community celebrates this tradition with special rituals and foods that showcase our cultural heritage.",
  image: "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&w=1260",
  link: "#"
};

const CulturalSpotlight: React.FC = () => {
  return (
    <section id="culture" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-3">
              Cultural Spotlight
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-800">Celebrating Our Traditions</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-red-800 text-white rounded-full text-xs font-medium mb-2">
                    Traditional Festival
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-800">
                {featuredStory.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredStory.excerpt}
              </p>
              <a 
                href={featuredStory.link}
                className="inline-flex items-center text-red-800 font-medium hover:text-red-700 transition-colors group"
              >
                <span>Read the full story</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSpotlight;