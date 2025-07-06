import React from 'react';
import cinnamon from "./../assets/Cinnamon.png";
import blackpepper from "./../assets/blackpepper.jpg";
import cardamom from "./../assets/cardamon.jpeg";
import spice from "./../assets/spice.jpg";

// Product data
const products = [
  {
    id: 1,
    name: 'Ceylon Cinnamon',
    price: '$10.00',
    weight: '100g',
    description: 'Authentic hand-rolled Ceylon cinnamon sticks.',
    image: cinnamon,
  },
  {
    id: 2,
    name: 'Sri Lankan Black Pepper',
    price: '$8.00',
    weight: '100g',
    description: 'Premium grade whole black pepper from Sri Lanka.',
    image: blackpepper,
  },
  {
    id: 3,
    name: 'Ceylon Cardamom',
    price: '$12.00',
    weight: '50g',
    description: 'Aromatic green cardamom pods grown in the highlands.',
    image: cardamom,
  },
];

// Reusable Card component
const Card = ({ product }) => (
  <div className="w-full max-w-sm h-[430px] bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col">
    
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
      <h3 className="text-xl font-semibold text-orange-700 mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{product.weight}</p>
      <p className="text-gray-600 text-sm text-justify line-clamp-3">{product.description}</p>
    </div>

    {/* Spacer that pushes footer down only as needed */}
    <div className="flex-grow"></div>

    {/* Bottom */}
    <div className="flex items-center justify-between pt-4">
      <span className="text-lg font-bold text-green-600">{product.price}</span>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition duration-300"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  </div>
);




const ShopPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🔲 Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-90"
        style={{ backgroundImage: `url(${spice})` }} // replace with your path
      ></div>

      {/* 🔳 Foreground Content */}
      <div className="relative z-10 px-4 py-12 flex flex-col items-center min-h-screen">
        {/* 🧾 Heading */}
        <h2 className="text-4xl font-cinzel font-bold text-orange-600 text-center mb-12">
          Explore Our Premium Ceylon Spices
        </h2>

        {/*  Horizontal Card Row */}
        <div className="flex space-x-10 w-full max-w-6xl justify-center items-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
