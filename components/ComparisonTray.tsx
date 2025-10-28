import React from 'react';
import { Product } from '../types';

interface ComparisonTrayProps {
  products: Product[];
  onClear: () => void;
  onCompare: () => void;
  onRemove: (productId: number) => void;
  maxItems: number;
}

const ComparisonTray: React.FC<ComparisonTrayProps> = ({ products, onClear, onCompare, onRemove, maxItems }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-2xl-top transform translate-y-0 transition-transform duration-300 ease-in-out z-20 animate-slide-in-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 sm:mb-0">
            Comparing ({products.length}/{maxItems})
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            {products.map(product => (
              <div key={product.id} className="bg-gray-700 rounded-full flex items-center gap-2 p-1 text-sm">
                <img src={product.imageUrl} alt={product.name} className="w-6 h-6 rounded-full object-contain bg-white" />
                <span className="font-medium truncate max-w-[100px]">{product.name}</span>
                <button 
                  onClick={() => onRemove(product.id)} 
                  aria-label={`Remove ${product.name} from comparison`}
                  className="p-0.5 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <button 
            onClick={onClear}
            className="w-1/2 sm:w-auto flex-shrink-0 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Clear
          </button>
          <button 
            onClick={onCompare}
            className="w-1/2 sm:w-auto flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Compare
          </button>
        </div>
      </div>
       <style>{`
        @keyframes slide-in-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        .animate-slide-in-up { animation: slide-in-up 0.3s ease-out forwards; }
        .shadow-2xl-top { box-shadow: 0 -10px 15px -3px rgba(0,0,0,0.1), 0 -4px 6px -2px rgba(0,0,0,0.05); }
      `}</style>
    </div>
  );
};

export default ComparisonTray;
