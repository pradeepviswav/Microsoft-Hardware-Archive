import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Product, Review } from '../types';
import { getFunFact } from '../services/geminiService';
import StarRating from './StarRating';

interface ProductModalProps {
  product: Product | null;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
);

const ReviewForm: React.FC<{ productId: number; onAddReview: ProductModalProps['onAddReview'] }> = ({ productId, onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    onAddReview({
      productId,
      rating,
      text,
      author: author || 'Anonymous',
    });
    setRating(0);
    setText('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-lg mt-4">
      <h4 className="font-semibold text-white mb-2">Leave a Review</h4>
      <div className="mb-2">
        <StarRating rating={rating} onRatingChange={setRating} size={24} />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full bg-gray-700 text-white rounded-md p-2 h-24 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full bg-gray-700 text-white rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={rating === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
};


const ProductModal: React.FC<ProductModalProps> = ({ product, reviews, onAddReview, onClose }) => {
  const [geminiFact, setGeminiFact] = useState<string | null>(null);
  const [isLoadingFact, setIsLoadingFact] = useState<boolean>(false);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  }, [reviews]);


  useEffect(() => {
    setGeminiFact(null);
    setIsLoadingFact(false);
  }, [product]);

  const handleGetFunFact = useCallback(async () => {
    if (!product) return;
    setIsLoadingFact(true);
    const fact = await getFunFact(product.name, product.description);
    setGeminiFact(fact);
    setIsLoadingFact(false);
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-5/12 flex-shrink-0">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>

        <div className="w-full md:w-7/12 p-6 flex flex-col overflow-y-auto">
          <div>
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">{product.category}</span>
            <h2 className="text-3xl font-bold text-white mt-2">{product.name}</h2>
            <p className="text-gray-400 font-semibold mb-2">{product.year}</p>
            {reviews.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <StarRating rating={averageRating} />
                <span>{averageRating.toFixed(1)} ({reviews.length} reviews)</span>
              </div>
            )}
            <p className="text-gray-300 mt-4">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white">Discover More</h3>
            <div className="mt-3 bg-gray-900 p-4 rounded-lg">
              {!geminiFact && (
                <button onClick={handleGetFunFact} disabled={isLoadingFact} className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  {isLoadingFact ? <LoadingSpinner /> : "✨ Ask Gemini a Fun Fact"}
                </button>
              )}
              {geminiFact && (
                <div>
                  <p className="text-green-300 text-sm"><span className="font-bold">Gemini says:</span> {geminiFact}</p>
                  <button onClick={() => setGeminiFact(null)} className="text-xs text-gray-400 hover:text-white mt-2">Ask again</button>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white">Reviews</h3>
             <ReviewForm productId={product.id} onAddReview={onAddReview} />
            <div className="mt-4 space-y-4 max-h-48 overflow-y-auto pr-2">
              {reviews.length > 0 ? reviews.map(review => (
                <div key={review.id} className="bg-gray-900 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <StarRating rating={review.rating} size={16} />
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="font-semibold text-white mt-1">{review.author}</p>
                  <p className="text-sm text-gray-300">{review.text}</p>
                </div>
              )) : <p className="text-sm text-gray-400 italic mt-2">No reviews yet. Be the first!</p>}
            </div>
          </div>
          
          {product.links.length > 0 && (
            <div className="mt-auto pt-6">
              <h3 className="text-lg font-semibold text-white">Affiliate Links</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {product.links.map(link => (
                  <a key={link.store} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    {link.store}
                  </a>
                ))}
              </div>
            </div>
          )}
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

export default ProductModal;
