import React, { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating
      setHoveredRating(0);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <div>
      <div className="flex space-x-1 mb-2">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className={`text-2xl transition-colors ${
              (hoveredRating || rating) >= star ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white py-1 px-3 rounded hover:bg-indigo-700 transition"
      >
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
