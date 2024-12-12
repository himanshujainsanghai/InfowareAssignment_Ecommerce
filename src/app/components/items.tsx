"use client";

import CurrItem from "./currItem";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Items = ({ products }: { products: Product[] }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>; // Graceful fallback if data is empty
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <CurrItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Items;
