
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
        <p className="text-sm text-gray-400">{product.year}</p>
      </div>
    </div>
  );
};

export default ProductCard;
