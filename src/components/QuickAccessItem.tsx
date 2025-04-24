import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { QuickAccessItem as QuickAccessItemType } from '../types';

interface QuickAccessItemProps {
  item: QuickAccessItemType;
  icon: LucideIcon;
}

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ item, icon: Icon }) => {
  return (
    <a
      href={item.link}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-b-4 border-red-800"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-red-800 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-gray-800 font-medium text-lg">{item.title}</h3>
    </a>
  );
};

export default QuickAccessItem;