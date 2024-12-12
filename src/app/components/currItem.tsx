"use client";

import { useState } from "react";
import Image from "next/image";
import { addToCart } from "@/app/lib/cartSlice";
import { useAppDispatch } from "../lib/hooks";

interface CurrItemProps {
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

const CurrItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: CurrItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle "See More"
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Limit description to 40 words
  const descriptionWords = description.split(" ");
  const shortDescription = descriptionWords.slice(0, 15).join(" ");
  const isLongDescription = descriptionWords.length > 40;

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        category: category,
        rating: {
          rate: rating.rate,
          count: rating.count,
        },
      })
    );

    // console.log("State after AddToCart:", makeStore.getState());
  };
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}

      <Image
        src={image}
        alt={title}
        layout="responsive" // Ensures the image scales based on its container
        width={500} // aspect ratio (not a fixed size)
        height={500} // Adjusting  the ratio to match your image's aspect ratio
        className="object-cover w-full h-full" // Ensures the image covers the parent div
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">
          {isExpanded ? description : shortDescription}
          {isLongDescription && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 ml-1 underline hover:text-blue-600"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          )}
        </p>

        {/* Price and Category */}
        <p className="text-gray-800 font-bold text-lg mt-4">${price}</p>
        <p className="text-gray-500 text-sm">Category: {category}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.floor(rating.rate) ? "★" : "☆"}</span>
            ))}
          </span>
          <span className="text-gray-500 text-sm ml-2">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrItem;
