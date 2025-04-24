import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Traditional Nepali Singing Bowl",
    price: "Rs 2,500",
    image: "https://images.pexels.com/photos/6279516/pexels-photo-6279516.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 2,
    name: "Handwoven Dhaka Fabric Scarf",
    price: "Rs 1,200",
    image: "https://images.pexels.com/photos/6920104/pexels-photo-6920104.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 3,
    name: "Mithila Art Painting",
    price: "Rs 3,500",
    image: "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=1260"
  },
  {
    id: 4,
    name: "Handcrafted Copper Water Jug",
    price: "Rs 1,800",
    image: "https://images.pexels.com/photos/3785558/pexels-photo-3785558.jpeg?auto=compress&cs=tinysrgb&w=1260"
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="marketplace" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-3">
              Marketplace
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-800">Featured Traditional Products</h2>
            <p className="text-gray-600 mt-2">Handcrafted items from local artisans</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition-colors"
            >
              <ShoppingBag size={18} className="mr-2" />
              <span>Visit Marketplace</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;