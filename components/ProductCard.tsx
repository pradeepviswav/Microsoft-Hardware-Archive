import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <button
      onClick={() => onSelectProduct(product)}
      aria-label={`View details for ${product.name}`}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20 w-full text-left shadow-md dark:shadow-none"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.imageUrl}
          alt={`Image of ${product.name}`}
          className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.year}</p>
      </div>
    </button>
  );
};

export default ProductCard;