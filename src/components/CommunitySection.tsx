import React from 'react';
import { Users } from 'lucide-react';
import CommunityPost from './CommunityPost';
import { CommunityPost as CommunityPostType } from '../types';

const communityPosts: CommunityPostType[] = [
  {
    id: 1,
    title: "My Grandmother's Traditional Recipe",
    excerpt: "I wanted to share this special recipe that has been in my family for generations. It's a traditional dish from Biratnagar that we make during special festivals.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260",
    author: "Aarav Sharma",
    timestamp: "2 days ago"
  },
  {
    id: 2,
    title: "Documenting The Old City Architecture",
    excerpt: "I've been photographing the traditional buildings in the old part of Biratnagar to document our architectural heritage before they disappear.",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260",
    author: "Priya Thapa",
    timestamp: "5 days ago"
  },
  {
    id: 3,
    title: "Teaching My Son Traditional Music",
    excerpt: "Passing down our musical traditions to the next generation. Here's a video of my son learning to play the traditional flute.",
    image: "https://png.pngtree.com/png-clipart/20240116/original/pngtree-music-teacher-giving-lessons-to-children-hand-drawn-elements-png-image_14123126.png",
    author: "Rajesh Koirala",
    timestamp: "1 week ago"
  }
];

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-3">
                Community
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-800">Latest From The Community</h2>
              <p className="text-gray-600 mt-2">Stories and contributions from our members</p>
            </div>
            
            <button className="mt-4 md:mt-0 inline-flex items-center justify-center bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition-colors">
              <Users size={18} className="mr-2" />
              <span>Join the Community</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityPosts.map(post => (
              <CommunityPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;