import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EventCard from './EventCard';
import { Event } from '../types';

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Teej Festival Celebration",
    date: "September 15, 2025",
    location: "Koshi Tappu Park, Biratnagar",
    image: "https://images.pexels.com/photos/2187383/pexels-photo-2187383.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 2,
    title: "Traditional Music Concert",
    date: "September 22, 2025",
    location: "Main Theatre, Cultural Center",
    image: "https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 3,
    title: "Mithila Art Exhibition",
    date: "October 5, 2025",
    location: "City Art Gallery",
    image: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 4,
    title: "Food Festival of Nepal",
    date: "October 12, 2025",
    location: "City Center Plaza",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 5,
    title: "Traditional Dance Performance",
    date: "October 25, 2025",
    location: "Community Hall",
    image: "https://images.pexels.com/photos/2249606/pexels-photo-2249606.jpeg?auto=compress&cs=tinysrgb&w=1260"
  }
];

const EventsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">Explore and participate in our cultural activities</p>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-300 hover:bg-red-800 hover:text-white hover:border-red-800 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-300 hover:bg-red-800 hover:text-white hover:border-red-800 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar"
        >
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
          
          <div className="min-w-[200px] flex items-center justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-800 hover:text-white transition-colors"
            >
              <span>View All Events</span>
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;