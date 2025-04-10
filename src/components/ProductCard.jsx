import React from "react";
import PropTypes from "prop-types";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="mb-3 text-sm text-yellow-500 font-semibold">
        Average Rating: {product.avgRating.toFixed(1)} ⭐ ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
