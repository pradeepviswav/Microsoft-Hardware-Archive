import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface LatestAdditionsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const LatestAdditions: React.FC<LatestAdditionsProps> = ({ products, onSelectProduct }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Latest Additions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
        ))}
      </div>
      <hr className="border-t-2 border-gray-700 mt-8" />
    </section>
  );
};

export default LatestAdditions;
