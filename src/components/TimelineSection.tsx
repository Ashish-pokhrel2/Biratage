import React from 'react';
import { Clock } from 'lucide-react';

const timelinePeriods = [
  { id: 1, year: '1800s', label: 'Early Settlement' },
  { id: 2, year: '1900s', label: 'Cultural Growth' },
  { id: 3, year: '1950s', label: 'Modern Era' },
  { id: 4, year: '2000s', label: 'Contemporary' }
];

const featuredEvents = [
  {
    id: 1,
    title: 'Traditional Arts Revival',
    period: '1920-1945',
    image: 'https://images.pexels.com/photos/2187383/pexels-photo-2187383.jpeg',
    description: 'A significant period of cultural renaissance in Biratnagar'
  },
  {
    id: 2,
    title: 'Heritage Preservation',
    period: '1960-1985',
    image: 'https://images.pexels.com/photos/2249606/pexels-photo-2249606.jpeg',
    description: 'Major initiatives to preserve historical architecture'
  },
  {
    id: 3,
    title: 'Modern Cultural Movement',
    period: '1990-Present',
    image: 'https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg',
    description: 'Blending traditional values with contemporary expression'
  }
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Our Cultural Timeline</h2>
            <p className="text-gray-600 mt-2">Exploring the rich history of Biratnagar</p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-800/20 -translate-y-1/2"></div>
            {timelinePeriods.map((period, index) => (
              <div 
                key={period.id}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full bg-red-800 relative z-10 group-hover:scale-125 transition-transform">
                  <div className="absolute -inset-2 rounded-full border-2 border-red-800/30 group-hover:border-red-800/60 transition-colors"></div>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-serif font-semibold text-red-800">{period.year}</div>
                  <div className="text-sm text-gray-600">{period.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-4 py-2 bg-white/90 text-red-800 rounded-full text-sm font-medium hover:bg-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-red-800 mb-2">
                    <Clock size={16} className="mr-2" />
                    <span>{event.period}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;