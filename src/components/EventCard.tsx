import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="min-w-[280px] max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-red-800 text-white px-3 py-1 rounded-bl-lg font-medium text-sm">
          Upcoming
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
        
        <div className="flex items-center mb-2 text-gray-600">
          <Calendar size={16} className="mr-2 text-red-700" />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin size={16} className="mr-2 text-red-700" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <button className="mt-auto bg-transparent hover:bg-red-50 text-red-800 border border-red-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;