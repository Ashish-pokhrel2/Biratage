import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Biratage Logo" 
              className="h-12 md:h-16 transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#events" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">Events</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#culture" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">Culture</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#community" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">Community</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#marketplace" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">Marketplace</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-white hover:text-white/80 font-medium transition-all duration-300 relative group">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-white/80 transition-colors duration-300">
              <Globe size={20} />
            </button>
            
            <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm">
              <User size={16} />
              <span>Login</span>
            </button>
          </div>
          
          <button 
            className="md:hidden text-white hover:text-white/80 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-black/90 backdrop-blur-sm animate-fadeIn">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-white/80 font-medium text-lg">
                Home
              </a>
              <a href="#events" className="text-white hover:text-white/80 font-medium text-lg">
                Events
              </a>
              <a href="#culture" className="text-white hover:text-white/80 font-medium text-lg">
                Culture
              </a>
              <a href="#community" className="text-white hover:text-white/80 font-medium text-lg">
                Community
              </a>
              <a href="#marketplace" className="text-white hover:text-white/80 font-medium text-lg">
                Marketplace
              </a>
              <a href="#about" className="text-white hover:text-white/80 font-medium text-lg">
                About
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <button className="flex items-center space-x-2 text-white hover:text-white/80">
                <Globe size={20} />
                <span>EN / नेपाली</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl backdrop-blur-sm">
                <User size={16} />
                <span>Login</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;