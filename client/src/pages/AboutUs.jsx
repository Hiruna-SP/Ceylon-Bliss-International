import React from "react";
import person1 from "./../assets/person1.jpg";
import Logo from "./../assets/Logo.jpg";

const AboutHeroSection = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12 min-h-[80vh] flex flex-col items-center">
      {/* Top row: Text and Logo side by side */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between max-w-7xl">
        {/* Left text block */}
        <div className="max-w-lg md:max-w-xl text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ceylon Bliss International — <br />
            Pioneering Authentic Sri Lankan Spice Excellence.
          </h1>
        </div>

        {/* Right logo block */}
        <div className="relative w-70 h-70 md:w-90 md:h-80 flex items-center justify-center">
          <img
            src={Logo}
            alt="Ceylon Bliss Logo"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="bg-white text-black rounded-3xl mt-12 w-100px max-w-7xl p-8">
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6 font-poppins">
          <h2 className="text-2xl font-semibold mb-4 font-cinzel">
            Ceylon Bliss International — Crafting Authentic Spice Experiences
          </h2>
          <p>
            At Ceylon Bliss International, we bring the authentic flavors of Sri
            Lanka’s finest spices directly to your kitchen. More than a
            supplier, we are partners in preserving tradition, quality, and
            passion.
          </p>
          <p>
            Our mission is to deliver premium, handpicked Ceylon spices that
            elevate everyday cooking. Committed to sustainable sourcing and
            supporting local farmers, we ensure only the purest flavors reach
            your table.
          </p>
          <p>
            Driven by excellence and customer satisfaction, we help you
            experience the true essence of Ceylon spices—transforming meals into
            memorable moments.
          </p>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side text */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          <h2 className="text-4xl font-cinzel font-bold text-orange-600 mb-6">
            Meet Our Team
          </h2>
          <p>
            At Ceylon Bliss International, titles don’t define us — our shared
            passion for exceptional quality and authentic flavors drives
            everything we do. Together, as one team, we work tirelessly to bring
            the best of Sri Lanka’s spices to kitchens around the world.
          </p>
          <p>
            With a diverse and talented team spanning multiple continents, we’re
            united in our commitment to sustainable sourcing, innovation, and
            supporting local communities. Our team’s dedication ensures that
            every meal tells a flavorful story, from Sri Lanka to your table.
          </p>
        </div>

        {/* Right side: Two team members side by side */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src={person1}
              alt="Mr. Nilendra panditha"
              className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-orange-400"
            />
            <p className="mt-4 font-semibold text-center">
              Mr. Nilendra Panditha
            </p>
            <p className="text-sm text-gray-600 text-center">Founder & CEO</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={person1}
              alt="Mr. Hiruna Panditha"
              className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-orange-500"
            />
            <p className="mt-4 font-semibold text-center">
              Mr. Hiruna Panditha{" "}
            </p>
            <p className="text-sm text-gray-600 text-center">Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <>
      <AboutHeroSection />
      <TeamSection />
    </>
  );
};

export default AboutUs;
