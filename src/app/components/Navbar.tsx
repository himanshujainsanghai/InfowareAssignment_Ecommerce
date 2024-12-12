"use client";

import Link from "next/link";
import Image from "next/image";
import CartItemsNumber from "./cartItemsNumber";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo and Links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Men
          </Link>
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Women
          </Link>
        </div>
      </div>

      {/* Bag Icon */}
      <div className="flex items-center">
        <CartItemsNumber />
      </div>

      {/* Mobile Menu Button */}

      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
