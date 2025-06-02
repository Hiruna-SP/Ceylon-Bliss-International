import React from "react";
import person1 from "./../assets/person1.jpg";
import person2 from "./../assets/person2.jpeg";
import person3 from "./../assets/person3.jpeg";
import Logo from "./../assets/Logo.jpg";

const AboutHeroSection = () => {
  return (
    <div className="relative bg-black min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-12 text-white">
      {/* Left text block */}
      <div className="max-w-lg md:max-w-xl text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">
          Ceylon Bliss International — <br></br>
         Pioneering Authentic Sri Lankan Spice Excellence.
        </h1>
      </div>

      {/* Right logo block */}
      <div className="relative w-70 h-70 md:w-90 md:h-80 flex items-center justify-center">
        <img
          src={Logo}
          alt="WSO2 Logo"
          className="object-contain w-full h-full"
        />
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
            Meet Our Global Team
          </h2>
          <p>
            At WSO2, titles don’t matter because we believe that with our
            collective mind power we can do great things - and we have! We
            embrace what each team member has to offer and work as one team to
            support the growth of the company.
          </p>
          <p>
            We have over 900 employees worldwide with offices in Australia,
            Brazil, Germany, India, Malaysia, Sri Lanka, Singapore, the UAE, the
            UK, and the US.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md font-mono hover:bg-orange-600 transition">
            Meet Team
          </button>
        </div>

        {/* Right side images cluster */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative w-full h-96">
            {/* Positioned images for cluster effect */}
            <img
              src={person1}
              alt="Mr. Sanjeewa Perera"
              className="absolute top-8 left-0 w-28 h-28 rounded-lg object-cover border-4 border-orange-400 shadow-lg"
              style={{ zIndex: 5 }}
            />
            <img
              src={person2}
              alt="Ms. Anjali Fernando"
              className="absolute top-20 left-24 w-32 h-32 rounded-lg object-cover border-4 border-orange-500 shadow-lg"
              style={{ zIndex: 10 }}
            />
            <img
              src={person3}
              alt="Dr. Nimal Jayasinghe"
              className="absolute top-0 left-48 w-28 h-28 rounded-lg object-cover border-4 border-orange-600 shadow-lg"
              style={{ zIndex: 8 }}
            />
            {/* Add more images similarly if you want */}
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
