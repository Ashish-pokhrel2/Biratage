import React from 'react';
import { Clock } from 'lucide-react';
import { CommunityPost as CommunityPostType } from '../types';

interface CommunityPostProps {
  post: CommunityPostType;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">{post.author}</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;