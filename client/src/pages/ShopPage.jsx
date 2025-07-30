import React from "react";
import cinnamon from "./../assets/Cinnamon.png";
import blackpepper from "./../assets/blackpepper.jpg";
import cardamom from "./../assets/cardamon.jpeg";
import spice from "./../assets/spice.jpg";
import { useState } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Ceylon Cinnamon",
    price: "$10.00",
    weight: "100g",
    description:
      "Pure and aromatic cinnamon sticks from Sri Lanka, known for their light, sweet flavor and smooth texture.",
    image: cinnamon,
  },
  {
    id: 2,
    name: "Sri Lankan Black Pepper",
    price: "$8.00",
    weight: "100g",
    description:
      "Premium whole peppercorns with a sharp, spicy flavor and fragrant aroma. Ideal for enhancing the taste of savory dishes with natural heat and depth.",
    image: blackpepper,
  },
  {
    id: 3,
    name: "Ceylon Cardamom",
    price: "$12.00",
    weight: "50g",
    description:
      "Fragrant green pods offering a sweet, warm, and spicy flavor. Perfect for enriching teas, desserts, and savory dishes with a unique aromatic touch.",
    image: cardamom,
  },
];

// Reusable Card component
const Card = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const increment = () => {
    if (amount < 10) setAmount(amount + 1);
  };

  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const unitPrice = parseFloat(product.price.replace("$", ""));
  const total = "$"+(unitPrice * amount).toFixed(2);

  return (
  <div className="w-full max-w-sm h-[520px] bg-white/85 hover:bg-white/75 backdrop-blur-md p-5 rounded-xl shadow-md transition-all duration-300 border border-gray-100 flex flex-col hover:scale-105 hover:drop-shadow-lg">

      {/* Top */}
      <div>
        {/* Image box */}
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name, weight, description */}
        <h3 className="text-xl font-cinzel text-orange-700 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 font-merriweather text-sm mb-1">
          {product.weight}
        </p>
        <p className="text-gray-600 font-poppins text-sm text-justify line-clamp-4">
          {product.description}
        </p>
      </div>

      {/* Spacer that pushes footer down only as needed */}
      <div className="flex-grow"></div>

      {/* Quantity Selector */}
      <div className="pt-4 mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount:
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={decrement}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
            aria-label="Decrease amount"
          >
            −
          </button>
          <input
            type="text"
            readOnly
            value={amount}
            className="w-12 text-center border border-gray-300 rounded py-1"
          />
          <button
            onClick={increment}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
            aria-label="Increase amount"
          >
            +
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-lg font-bold text-green-600">
          {total}
        </span>
        <button
          className="bg-orange-500 font-cinzel hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition duration-300"
          aria-label={`Add to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-100"
        style={{ backgroundImage: `url(${spice})` }}
      ></div>

      {/* Content: heading + cards, all centered */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center px-4 pt-16 pb-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-700 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.4)]">
          Explore Our Premium Ceylon Spices
        </h2>

        {/* Cards */}
        <div className="flex justify-center items-center space-x-6 max-w-6xl w-full">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
