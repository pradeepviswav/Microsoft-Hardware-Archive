import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isInComparison: boolean;
  onToggleComparison: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct, isInComparison, onToggleComparison }) => {
  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the modal from opening when compare is clicked
    onToggleComparison(product.id);
  };

  return (
    <div className={`relative group transition-all duration-300 ${isInComparison ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
      <button
        onClick={() => onSelectProduct(product)}
        aria-label={`View details for ${product.name}`}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20 w-full text-left shadow-md dark:shadow-none"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
          <img
            src={product.imageUrl}
            alt={`Image of ${product.name}`}
            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={handleCompareClick}
              aria-label={isInComparison ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full p-3 shadow-lg transform hover:scale-110"
            >
              {isInComparison ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{product.year}</p>
        </div>
      </button>
    </div>
  );
};

export default ProductCard;
