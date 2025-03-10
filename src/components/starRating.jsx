import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarChange = (e) => {
    setRating(Number(e.target.value));
  };

  const resetRating = () => {
    setRating(0);
  };

  return (
    <div className="flex items-center justify-center p-4">
      {/* Container wraps only the necessary content */}
      <form id="form" className="inline-block">
        <fieldset className="stars relative inline-block">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="inline-block">
              <input
                type="radio"
                name="stars"
                id={`star${star}`}
                value={star}
                onChange={handleStarChange}
                checked={rating === star}
                className="hidden"
              />
              <label
                htmlFor={`star${star}`}
                className="cursor-pointer transition-colors duration-200 text-2xl"
              >
                {/* 
                  If rating >= star, use the solid star (fas fa-star).
                  Otherwise, use the regular (outline) star (far fa-star).
                */}
                <i
                  className={`${
                    rating >= star ? 'fas' : 'far'
                  } fa-star ${
                    rating >= star ? 'text-yellow-500' : 'text-gray-500'
                  }`}
                ></i>
              </label>
            </div>
          ))}

          {/* Reset functionality */}
          <input
            type="radio"
            name="stars"
            id="star-reset"
            onClick={resetRating}
            className="hidden"
          />
          <label
            htmlFor="star-reset"
            className="reset hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-full cursor-pointer hover:bg-yellow-300 font-semibold uppercase"
          >
            Reset
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default StarRating;
