import React from 'react';
import { Calendar, Book, ShoppingBag, Film, Users, Handshake } from 'lucide-react';
import QuickAccessItem from './QuickAccessItem';
import { QuickAccessItem as QuickAccessItemType } from '../types';

const quickAccessItems: QuickAccessItemType[] = [
  {
    id: 1,
    title: "Events Calendar",
    icon: "Calendar",
    link: "#events"
  },
  {
    id: 2,
    title: "Cultural Archive",
    icon: "Book",
    link: "#archive"
  },
  {
    id: 3,
    title: "Marketplace",
    icon: "ShoppingBag",
    link: "#marketplace"
  },
  {
    id: 4,
    title: "Tutorials",
    icon: "Film",
    link: "#tutorials"
  },
  {
    id: 5,
    title: "Community Forums",
    icon: "Users",
    link: "#forums"
  },
  {
    id: 6,
    title: "Volunteer",
    icon: "Handshake",
    link: "#volunteer"
  }
];

const iconComponents = {
  Calendar,
  Book,
  ShoppingBag,
  Film,
  Users,
  Handshake
};

const QuickAccessIcons: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    return iconComponents[iconName as keyof typeof iconComponents] || Calendar;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Quick Access</h2>
            <p className="text-gray-600 mt-2">Explore different aspects of our cultural heritage</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessItems.map(item => (
              <QuickAccessItem 
                key={item.id} 
                item={item} 
                icon={getIconComponent(item.icon)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessIcons;