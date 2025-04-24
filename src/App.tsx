import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventsCarousel from './components/EventsCarousel';
import CulturalSpotlight from './components/CulturalSpotlight';
import QuickAccessIcons from './components/QuickAccessIcons';
import TimelineSection from './components/TimelineSection';
import CommunitySection from './components/CommunitySection';
import ProductsSection from './components/ProductsSection';
import HeritageSection from './components/HeritageSection';
import NewsletterSection from './components/NewsletterSection';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';

import biratageLogoUrl from './assets/logo.png';

function App() {
  React.useEffect(() => {
    const img = new Image();
    img.src = biratageLogoUrl;
    
    document.title = "Biratage - Preserving Biratnagar's Cultural Heritage";
    
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1.2s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <EventsCarousel />
      <CulturalSpotlight />
      <QuickAccessIcons />
      <TimelineSection />
      <CommunitySection />
      <ProductsSection />
      <HeritageSection />
      <NewsletterSection />
      <SocialFeed />
      <Footer />
    </div>
  );
}

export default App;