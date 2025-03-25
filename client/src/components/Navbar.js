import React from 'react';
import { Link } from "react-router-dom";
import logo from './../assets/logo.png';
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between flex-wrap">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-10 text-base font-boldonse">
                <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
                <li><Link to="/cart" className="hover:text-orange-500">Cart</Link></li>
                <li><Link to="/login" className="hover:text-orange-500">Login</Link></li>
                <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            </ul>

            {/* Search + Icons (Right-aligned) */}
            <div className="flex items-center space-x-6">
                {/* Modern Search Bar with Black Border */}
                <div className="hidden md:flex items-center bg-gray-100 border border-black rounded-full px-4 py-2 shadow-md focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300">
                    <input
                    type="text"
                    placeholder="Search spices..."
                    className="bg-transparent outline-none text-sm w-40 md:w-60 px-2 placeholder-gray-500"
                    />
                    <button className="text-orange-500 hover:text-green-600 transition-all duration-300">
                    <FaSearch className="text-lg" />
                    </button>
                </div>

                {/* Icons - Aligned Right */}
                <div className="flex items-center space-x-4">
                    <Link to="/wishlist" className="text-gray-600 hover:text-green-500 text-2xl">
                    <FaHeart />
                    </Link>
                    <Link to="/cart" className="text-gray-600 hover:text-orange-500 text-2xl">
                    <FaShoppingCart />
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
