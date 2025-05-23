import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", phonenumber: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-cinzel mb-6 text-center text-orange-600">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white font-poppins text-black border-2 border-gray-300 rounded-md px-4 py-3 peer focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-3 font-merriweather top-2 bg-white px-1 text-sm text-gray-500 transition-all duration-300
                      peer-focus:top-[-12px] peer-focus:text-lg
                      peer-valid:top-[-12px] peer-valid:text-md"
          >
            Full Name
          </label>
        </div>


        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white font-poppins text-black border-2 border-gray-300 rounded-md px-4 py-3 peer focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-3 font-merriweather top-2 bg-white px-1 text-sm text-gray-500 transition-all duration-300
      peer-focus:top-[-12px] peer-focus:text-lg
      peer-valid:top-[-12px] peer-valid:text-md"
          >
            Email address
          </label>
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            className="w-full bg-white font-poppins text-black border-2 border-gray-300 rounded-md px-4 py-3 peer focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder=" "
          />
          <label
            htmlFor="phonenumber"
            className="absolute left-3 font-merriweather top-2 bg-white px-1 text-sm text-gray-500 transition-all duration-300
      peer-focus:top-[-12px] peer-focus:text-lg
      peer-valid:top-[-12px] peer-valid:text-md"
          >
            Phone Number
          </label>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white font-poppins text-black border-2 border-gray-300 rounded-md px-4 py-3 peer focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 font-merriweather top-2 bg-white px-1 text-sm text-gray-500 transition-all duration-300
      peer-focus:top-[-12px] peer-focus:text-lg
      peer-valid:top-[-12px] peer-valid:text-md"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-cinzel py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
