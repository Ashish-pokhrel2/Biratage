import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      <div 
        className="w-full bg-cover bg-center h-[85vh]" 
        style={{ 
          backgroundImage: "url('src/assets/img.png')",
          backgroundAttachment: "fixed"
        }}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg animate-fadeIn">
              Discover Biratnagar's <span className="text-yellow-400">Rich Culture</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
              Preserving and celebrating the cultural heritage of Biratnagar through community engagement and traditional arts.
            </p>
            <button className="bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center space-x-2 transition transform hover:scale-105">
              <span>Explore Our Heritage</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-30"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-30">
        <svg viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80H1920V30C1920 30 1623.5 0 960 0C296.5 0 0 30 0 30V80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;