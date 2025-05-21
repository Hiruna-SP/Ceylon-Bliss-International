import React from 'react';
import { useNavigate } from "react-router-dom";

import heroImg from './../assets/Hero-bg.jpg';

const HeroSection = () => {

  const navigate = useNavigate();

  const shopNowButtonNavigation = () => {
    navigate('/shop');
  }


  return (
    <div
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-start text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-left px-6 md:pl-16 max-w-2xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-700 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.4)]">
          Discover the Essence of Ceylon Spices
        </h1>
        <p className="text-orange-200 text-2xl mt-4 mb-6 font-lobster drop-shadow-lg">
          Finely selected spices, crafted to capture true Ceylon flavor.
        </p>
        <button 
        onClick={shopNowButtonNavigation}
        className="px-7 py-3 font-cinzel font-large text-white bg-orange-500 rounded-xl border-none hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:scale-110 transform transition-all duration-300 ease-in-out shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
