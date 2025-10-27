import React, { useState, useMemo } from 'react';
import { products, categories } from './data/products';
import { Product, Review } from './types';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import LatestAdditions from './components/LatestAdditions';

const initialReviews: Review[] = [
  {id: 1, productId: 13, author: 'Gamer_123', rating: 5, text: 'An absolute beast of a console. The load times are insane!', date: '2023-10-26'},
  {id: 2, productId: 14, author: 'CreativePro', rating: 4, text: 'The hinge is brilliant for my design work. A bit pricey but worth it.', date: '2023-09-15'},
  {id: 3, productId: 13, author: 'CasualPlayer', rating: 4, text: 'Game Pass is a game-changer. So many titles to choose from.', date: '2023-11-01'},
  {id: 4, productId: 20, author: 'Audiophile', rating: 5, text: 'Noise cancellation is top-notch. Super comfortable for long listening sessions.', date: '2023-08-20'},
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const latestProducts = useMemo(() => {
    return [...products].sort((a, b) => b.id - a.id).slice(0, 4);
  }, []);

  const filteredProducts = useMemo(() => {
    let sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    
    const categoryFiltered = selectedCategory === 'All'
        ? sortedProducts
        : sortedProducts.filter(p => p.category === selectedCategory);

    if (!searchQuery) {
        return categoryFiltered;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    return categoryFiltered.filter(p =>
        p.name.toLowerCase().includes(lowercasedQuery) ||
        p.category.toLowerCase().includes(lowercasedQuery) ||
        p.year.toString().includes(lowercasedQuery)
    );
  }, [selectedCategory, searchQuery]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  const handleAddReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
    };
    setReviews(prevReviews => [newReview, ...prevReviews]);
  };

  const reviewsForSelectedProduct = useMemo(() => {
    if (!selectedProduct) return [];
    return reviews.filter(r => r.productId === selectedProduct.id);
  }, [reviews, selectedProduct]);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <LatestAdditions products={latestProducts} onSelectProduct={handleSelectProduct} />
      <ProductGrid products={filteredProducts} onSelectProduct={handleSelectProduct} />
      {selectedProduct && (
         <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            reviews={reviewsForSelectedProduct}
            onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};

export default App;
