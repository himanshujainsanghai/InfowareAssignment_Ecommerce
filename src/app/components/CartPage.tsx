"use client";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CurrItem from "./currItem";
import { useAppSelector } from "../lib/hooks";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // const handleRemoveItem = (id: string) => {
  //   dispatch(removeFromCart(id));
  // };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CurrItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </>
      )}
      <div>
        <Link href="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;
