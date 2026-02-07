import React from "react";
import { ChevronRight } from "lucide-react";
import shopImg from "../assets/shopImg.jpg";
import prod1 from "../assets/prod1.jpg";
import "../index.css";

const ShopCollection = () => {
  const collections = [
    {
      id: 1,
      image: prod1,
      title: "Athleisure",
      subtitle: "White Tank Top",
    },
    {
      id: 2,
      image: prod1,
      title: "White Linen",
      subtitle: "Coat",
    },
    {
      id: 3,
      image: prod1,
      title: "Orange Summer",
      subtitle: "Dress",
    },
    {
      id: 4,
      image: prod1,
      title: "Athleisure",
      subtitle: "White Tank Top",
    },
    {
      id: 5,
      image: prod1,
      title: "White Linen",
      subtitle: "Coat",
    },
    {
      id: 6,
      image: prod1,
      title: "Orange Summer",
      subtitle: "Dress",
    },
    {
      id: 7,
      image: prod1,
      title: "Orange Summer",
      subtitle: "Dress",
    },
    {
      id: 8,
      image: prod1,
      title: "Orange Summer",
      subtitle: "Dress",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-peach-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE – HERO IMAGE */}
          <div className="relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <img
                src={shopImg}
                alt="New In Town Collection"
                className="w-full h-full object-cover"
              />

              {/* Curved Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    <path
                      id="curve"
                      d="M 50,150 A 100,100 0 0,1 250,150"
                      fill="transparent"
                    />
                  </defs>
                  <text className="text-4xl font-serif fill-white tracking-[0.3em]">
                    <textPath
                      href="#curve"
                      startOffset="30%"
                      textAnchor="middle"
                    >
                      TOWN
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – COLLECTION */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif italic text-orange-900/80">
              Shop The Collection
            </h2>

            {/* PRODUCT GRID (SCROLLABLE) */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 max-h-[610px] overflow-y-auto pr-2 luxury-scroll">
                {collections.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    {/* Product Image */}
                    <div className="relative aspect-[3/4] overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center space-y-1">
                      <h3 className="text-sm font-serif italic text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm font-serif italic text-gray-600">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
