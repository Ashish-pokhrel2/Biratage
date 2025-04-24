import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const socialImages = [
  "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2187383/pexels-photo-2187383.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2860705/pexels-photo-2860705.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2249606/pexels-photo-2249606.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400"
];

const SocialFeed: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Follow Us On Social Media</h2>
            <p className="text-gray-600 mt-2">Stay connected with our latest updates and community activities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {socialImages.map((image, index) => (
              <a 
                key={index} 
                href="#" 
                className="block overflow-hidden rounded-lg aspect-square hover:opacity-90 transition-opacity group relative"
              >
                <img 
                  src={image} 
                  alt="Social media content"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start">
                  <span className="p-3 text-white text-sm font-medium">View Post</span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-[#E4405F] text-white rounded-full px-6 py-3 hover:bg-opacity-90 transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">Instagram</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-[#1877F2] text-white rounded-full px-6 py-3 hover:bg-opacity-90 transition-colors"
            >
              <Facebook size={20} />
              <span className="font-medium">Facebook</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white rounded-full px-6 py-3 hover:bg-opacity-90 transition-colors"
            >
              <Twitter size={20} />
              <span className="font-medium">Twitter</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-[#FF0000] text-white rounded-full px-6 py-3 hover:bg-opacity-90 transition-colors"
            >
              <Youtube size={20} />
              <span className="font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;