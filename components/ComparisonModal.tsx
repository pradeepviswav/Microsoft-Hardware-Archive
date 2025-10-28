import React, { useEffect, useRef } from 'react';
import { Product } from '../types';

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ products, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Focus trap
    useEffect(() => {
        const modalNode = modalRef.current;
        if (!modalNode) return;

        const focusableElements = modalNode.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        firstElement?.focus();

        const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;

        if (event.shiftKey) { // Shift+Tab
            if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
            }
        }
        };

        modalNode.addEventListener('keydown', handleTabKeyPress);
        return () => modalNode.removeEventListener('keydown', handleTabKeyPress);
    }, [products]);


  if (products.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="comparison-modal-title"
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-7xl max-h-[90vh] flex flex-col relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 id="comparison-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">Product Comparison</h2>
           <button onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="p-4 font-semibold sticky left-0 bg-gray-50 dark:bg-gray-900 z-10 w-1/5">Feature</th>
                {products.map(product => (
                  <th key={product.id} className="p-4 font-semibold w-1/4">
                    <div className="flex flex-col items-center text-center">
                        <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-contain mb-2 bg-white dark:bg-gray-700 rounded-md p-1" />
                        <span className="text-lg text-gray-900 dark:text-white">{product.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                    <td className="p-4 font-semibold sticky left-0 bg-white dark:bg-gray-800 z-10">Category</td>
                    {products.map(product => <td key={product.id} className="p-4 text-gray-600 dark:text-gray-300">{product.category}</td>)}
                </tr>
                 <tr>
                    <td className="p-4 font-semibold sticky left-0 bg-white dark:bg-gray-800 z-10">Year</td>
                    {products.map(product => <td key={product.id} className="p-4 text-gray-600 dark:text-gray-300">{product.year}</td>)}
                </tr>
                <tr>
                    <td className="p-4 font-semibold sticky left-0 bg-white dark:bg-gray-800 z-10 align-top">Description</td>
                    {products.map(product => <td key={product.id} className="p-4 text-gray-600 dark:text-gray-300 text-sm">{product.description}</td>)}
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ComparisonModal;
