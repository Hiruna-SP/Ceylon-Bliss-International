import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './../assets/Logo.jpg';
import { FaShoppingCart, FaHeart, FaSearch, FaBars, FaTimes, FaUser} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 relative">
      {/* Mobile Layout */}
      <div className="lg:hidden flex items-center justify-between w-full px-2">
        {/* Left Side: Hamburger + Wishlist */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl hover:text-orange-500"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link to="/user" className="text-black text-xl hover:text-orange-500">
            <FaUser />
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Right Side: Search + Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/search" className="text-black text-xl hover:text-orange-500">
            <FaSearch />
          </Link>
          <div className="relative">
            <Link to="/cart" className="text-black text-xl hover:text-orange-500">
              <FaShoppingCart />
            </Link>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-3 px-4 space-y-3 font-poppins">
          <ul className="flex flex-col items-center text-base font-bold text-center divide-y divide-gray-300 w-full">
            <li className="w-full py-2"><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li className="w-full py-2"><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
            <li className="w-full py-2"><Link to="/wishlist" className="hover:text-orange-500">Wishlist</Link></li>
            <li className="w-full py-2"><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li className="w-full py-2"><Link to="/Contactus" className="hover:text-orange-500">Contact Us</Link></li>
          </ul>
         
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 w-auto ml-4" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-base font-bold font-poppins">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
          <li><Link to="/wishlist" className="hover:text-orange-500">Wishlist</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
          <li><Link to="/Contactus" className="hover:text-orange-500">Contact Us</Link></li>
        </ul>

        {/* Search Bar + Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2 border border-black rounded-full px-4 py-2 shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-400">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-44 lg:w-60 px-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:w-64 transition-all duration-300"
            />
            <button
              className="text-orange-500 hover:text-orange-600 transition-all duration-150"
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>
          <Link to="/user" className="text-gray-600 hover:text-orange-500 text-2xl">
            <FaUser />
          </Link>
          <div className="relative">
            <Link to="/cart" className="text-gray-600 hover:text-orange-500 text-2xl">
              <FaShoppingCart />
            </Link>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
