import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: number;
}

const Star: React.FC<{
  percent: number;
  size: number;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
  isInteractive: boolean;
}> = ({ percent, size, onHover, onLeave, onClick, isInteractive }) => {
  const uniqueId = `star_grad_${Math.random().toString(36).substr(2, 9)}`;
  const starStyle: React.CSSProperties = isInteractive ? { cursor: 'pointer' } : {};
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`url(#${uniqueId})`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={starStyle}
    >
      <defs>
        <linearGradient id={uniqueId}>
          <stop offset={`${percent}%`} stopColor="#facc15" /> 
          <stop offset={`${percent}%`} stopColor="#6b7280" /> 
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, size = 20 }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const isInteractive = !!onRatingChange;
  const displayRating = isInteractive ? hoverRating || rating : rating;

  return (
    <div className="flex items-center" onMouseLeave={isInteractive ? () => setHoverRating(0) : undefined}>
      {[1, 2, 3, 4, 5].map((index) => {
        const fillPercentage = Math.max(0, Math.min(100, (displayRating - (index - 1)) * 100));
        return (
          <Star
            key={index}
            percent={fillPercentage}
            size={size}
            isInteractive={isInteractive}
            onHover={isInteractive ? () => setHoverRating(index) : undefined}
            onClick={isInteractive ? () => onRatingChange(index) : undefined}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
