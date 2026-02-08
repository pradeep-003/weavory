import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import "../index.css";

const navbar = () => {
  return (
    <>
      <nav className="w-full border-b border-gray-300 bg-gradient-to-r from-orange-50 via-pink-50 to-orange-50 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 border-r border-gray-300 pr-8">
              <h1 className="text-3xl font-serif italic text-gray-800 ">
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
      <div className=" absolute  -top-75 -left-50 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="570"
          height="570"
          viewBox="0 0 570 570"
          fill="none"
        >
          <g filter="url(#filter0_f_1_25)">
            <circle
              cx="285"
              cy="285"
              r="182"
              fill="#FFA793"
              fill-opacity="0.68"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_25"
              x="0"
              y="0"
              width="570"
              height="570"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5"
                result="effect1_foregroundBlur_1_25"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default navbar;
