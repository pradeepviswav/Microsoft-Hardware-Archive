import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface LatestAdditionsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  comparisonListIds: number[];
  onToggleComparison: (productId: number) => void;
}

const LatestAdditions: React.FC<LatestAdditionsProps> = ({ products, onSelectProduct, comparisonListIds, onToggleComparison }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-labelledby="latest-additions-heading">
      <h2 id="latest-additions-heading" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">Latest Additions</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onSelectProduct={onSelectProduct}
              isInComparison={comparisonListIds.includes(product.id)}
              onToggleComparison={onToggleComparison}
            />
          </li>
        ))}
      </ul>
      <hr className="border-t-2 border-gray-200 dark:border-gray-700 mt-8" aria-hidden="true" />
    </section>
  );
};

export default LatestAdditions;
