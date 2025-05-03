import React from 'react';
import heroImg from './../assets/Hero-bg.jpg'; // 

const HeroSection = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-xl font-cinzel tracking-wider text-white ">
        Discover the Essence of Ceylon Spices
        </h1>
        <p className="text-orange-200 text-2xl md:text-2xl mt-4 mb-6 font-lobster drop-shadow-lg">
        Finely selected spices, crafted to capture true Ceylon flavor.
        </p>
        <button className="px-7 py-3 font-cinzel font-medium text-white bg-orange-500 rounded-xl border-none hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
            Shop Now
        </button>

      </div>
    </div>
  );
};

export default HeroSection;
