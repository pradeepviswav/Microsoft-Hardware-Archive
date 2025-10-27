import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: number;
}

// The visual Star component, now purely decorative
const StarIcon: React.FC<{ percent: number; size: number }> = ({ percent, size }) => {
  const uniqueId = `star_grad_${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`url(#${uniqueId})`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" // The icon is decorative, the button/label provides context
    >
      <defs>
        <linearGradient id={uniqueId}>
          <stop offset={`${percent}%`} stopColor="#facc15" /> {/* yellow-400 */}
          <stop offset={`${percent}%`} stopColor="#6b7280" /> {/* gray-500 */}
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, size = 20 }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const isInteractive = !!onRatingChange;

  // Non-interactive version for displaying ratings
  if (!isInteractive) {
    return (
      <div className="flex items-center" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((index) => {
          const fillPercentage = Math.max(0, Math.min(100, (rating - (index - 1)) * 100));
          return <StarIcon key={index} percent={fillPercentage} size={size} />;
        })}
      </div>
    );
  }

  // Interactive version for forms
  const displayRating = hoverRating || rating;

  return (
    <div
      className="flex items-center"
      role="group"
      aria-label="Rate this product"
      onMouseLeave={() => setHoverRating(0)}
    >
      {[1, 2, 3, 4, 5].map((index) => {
        const fillPercentage = Math.max(0, Math.min(100, (displayRating - (index - 1)) * 100));
        return (
          <button
            key={index}
            type="button"
            className="p-0 border-none bg-transparent cursor-pointer"
            aria-pressed={index === rating}
            aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
            onMouseEnter={() => setHoverRating(index)}
            onClick={() => onRatingChange(index)}
          >
            <StarIcon percent={fillPercentage} size={size} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
