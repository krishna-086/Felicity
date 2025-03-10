import React from 'react';

const StarRatingDisplay = ({ rating = 4.5 }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push('full');
    } else if (rating >= i - 0.5) {
      stars.push('half');
    } else {
      stars.push('empty');
    }
  }

  return (
    <div className="flex items-center">
      {stars.map((star, index) => {
        if (star === 'full') {
          return (
            <i
              key={index}
              className="fas fa-star text-yellow-500"
            ></i>
          );
        } else if (star === 'half') {
          return (
            <i
              key={index}
              className="fas fa-star-half-alt text-yellow-500"
            ></i>
          );
        } else {
          return (
            <i
              key={index}
              className="far fa-star text-yellow-500"
            ></i>
          );
        }
      })}
    </div>
  );
};

export default StarRatingDisplay;
