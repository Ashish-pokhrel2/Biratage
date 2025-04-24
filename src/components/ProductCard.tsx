import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-red-800 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
        <p className="text-red-800 font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;