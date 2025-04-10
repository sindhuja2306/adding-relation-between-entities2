import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/200",
    avgRating: 4.0,
    totalRatings: 2,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and stay connected on the go.",
    image: "https://via.placeholder.com/200",
    avgRating: 3.5,
    totalRatings: 4,
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating =
            ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;

          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Product Ratings</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
