import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 bg-gradient-to-r from-orange-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 border-r border-gray-300 pr-8">
            <h1 className="text-3xl font-serif italic text-gray-800">
              Weavory
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center space-x-12">
            <a
              href="#home"
              className="text-md tracking-wide text-orange-400 hover:text-orange-500 transition-colors"
            >
              HOME
            </a>

            <a
              href="#shop"
              className="text-md tracking-wide text-gray-700 hover:text-orange-400 transition-colors"
            >
              SHOP
            </a>

            <a
              href="#about"
              className="text-md tracking-wide text-gray-700 hover:text-orange-400 transition-colors"
            >
              ABOUT US
            </a>

            <a
              href="#account"
              className="text-md tracking-wide text-gray-700 hover:text-orange-400 transition-colors"
            >
              ACCOUNT
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end space-x-10">
            <button
              className="text-gray-700 hover:text-orange-400 transition-colors"
              aria-label="Search"
            >
              <Search size={25} />
            </button>

            <button
              className="text-gray-700 hover:text-orange-400 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={25} />
            </button>

            <button
              className="text-gray-700 hover:text-orange-400 transition-colors"
              aria-label="User Account"
            >
              <User size={25} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
