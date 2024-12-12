"use client";

import React from "react";
import { useAppSelector } from "../lib/hooks";

import { IoBagHandleOutline } from "react-icons/io5";

const CartItemsNumber = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className="relative">
      <IoBagHandleOutline size={30} />
      <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-red-500 font-bold text-white">
        {items.length}
      </span>
    </div>
  );
};

export default CartItemsNumber;
