import React, { useState } from "react";
import Banner from "../../assets/subimg.jpg";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Simulate submission success after 1 second delay
      setTimeout(() => {
        setSubscribed(true);
        setError(false);
      }, 1000);
    } else {
      setError(true);
    }
  };

  AOS.init();

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white relative"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 relative z-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <form onSubmit={handleSubmit} className="relative">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded focus:outline-none focus:border-primary"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div
              data-aos="fade-up"
              className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              <FiCheckCircle className="mr-2" />
              <span>Subscribed successfully!</span>
            </div>
          )}
          {error && (
            <div
              data-aos="fade-up"
              className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              <AiOutlineClose className="mr-2" />
              <span>Please enter a valid email address</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
