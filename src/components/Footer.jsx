import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFF4DF] border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif italic text-gray-800">
              Callister
            </h2>
            <p className="text-sm font-serif italic text-gray-600 leading-relaxed">
              A destination for timeless elegance and modern luxury. Crafted for
              those who value style, quality, and identity.
            </p>
          </div>

          {/* SHOP */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif tracking-widest text-gray-800">
              SHOP
            </h3>
            <ul className="space-y-2 text-sm font-serif italic text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer">New In</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Collections
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-orange-500 cursor-pointer">Sale</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif tracking-widest text-gray-800">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm font-serif italic text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Sustainability
              </li>
              <li className="hover:text-orange-500 cursor-pointer">Press</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-sm font-serif tracking-widest text-gray-800">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-sm font-serif italic text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Shipping & Returns
              </li>
              <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-orange-200"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-serif italic text-gray-500">
            © {new Date().getFullYear()} Callister. All rights reserved.
          </p>

          <div className="flex space-x-6 text-xs font-serif tracking-widest text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">
              INSTAGRAM
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              PINTEREST
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              TWITTER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
