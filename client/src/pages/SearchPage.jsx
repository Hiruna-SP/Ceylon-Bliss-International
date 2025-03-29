// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // You can add real search logic or route to search results
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 font-poppins text-gray-700">Search</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-3 shadow-md">
          <input
            type="text"
            placeholder="Search for spices, herbs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm outline-none text-gray-700"
          />
          <button type="submit" className="text-orange-500 hover:text-orange-600">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
