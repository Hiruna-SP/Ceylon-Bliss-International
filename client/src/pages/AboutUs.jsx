import React from "react";

const directors = [
  {
    name: "Mr. Sanjeewa Perera",
    imageUrl: "./../assets/Hero-bg.jpg", // Replace with actual images
  },
  {
    name: "Ms. Anjali Fernando",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Nimal Jayasinghe",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-cinzel font-bold text-orange-600 mb-8 text-center">
        About Ceylon Bliss International
      </h1>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Founded over two decades ago, <strong>Ceylon Bliss International</strong> has
          grown to become one of Sri Lanka’s most trusted exporters of premium spices.
          Rooted deeply in the heritage of Ceylon’s spice-growing regions, we are
          committed to delivering the authentic taste and aroma of our island’s
          finest natural ingredients directly to your kitchen.
        </p>

        <p>
          Our company works closely with dedicated local farmers and communities to
          source spices such as cinnamon, black pepper, cardamom, cloves, and
          nutmeg — all cultivated through sustainable and ethical farming
          practices. This ensures not only the highest quality products but also
          contributes to the preservation of traditional cultivation methods and
          supports rural livelihoods.
        </p>

        <p>
          At Ceylon Bliss, quality and purity are at the heart of everything we do.
          Each spice batch undergoes rigorous testing and careful packaging to
          maintain freshness and flavor integrity. We strive to connect global
          chefs, food enthusiasts, and households with the unique essence of Sri
          Lanka’s spice heritage, enriching culinary experiences worldwide.
        </p>

        <p>
          Our mission extends beyond business — we aim to celebrate and promote
          Sri Lanka’s rich agricultural traditions and environmental stewardship,
          making Ceylon Bliss a symbol of excellence, trust, and sustainability in
          the spice industry.
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mt-14 mb-6 text-center">
        Our Directors
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {directors.map((director) => (
          <div
            key={director.name}
            className="max-w-xs w-full bg-orange-50 rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={director.imageUrl}
              alt={director.name}
              className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-orange-400"
            />
            <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
