import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { printer } from "../../assets/images";

const Banner = () => {
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    // Simulate user validation or some async operation
    const validateUser = async () => {
      // Simulate an API call or some async operation
      // For example, you can check a cookie, localStorage, or make an API call
      // Set isUserValid based on the result
      setIsUserValid(true); // Change this logic as needed
    };

    validateUser();
  }, []);

  // Function to create a safe URL for bots
  const getSafeLink = (url) => {
    return isUserValid ? url : "#";
  };

  return (
    <div
      className="bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/244575.jpg')",
      }}
    >
      <div className="container mx-auto px-4 py-3 md:py-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4 text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              ALL IN ONE PRINTER
            </h2>
            <p
              className="text-lg lg:text-xl font-bold mb-6 text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              &#9658; 123 Setup And Printer Setup <br />
              &#9658; Quick and Easy Printer Setup <br />
              &#9658; Step-by-Step Printer Setup <br />
            </p>
            {isUserValid && (
              <Link
                to="/hp-setup-guide"
                className="inline-block bg-black w-full sm:w-auto mb-4 rounded-lg text-white font-semibold py-3 px-6 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 shadow-lg"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1rem" }}
              >
                Click Here To Setup Your Printer
              </Link>
            )}
            <p className="mt-6">
              <span className="block text-2xl lg:text-3xl font-bold text-white mb-2">
                Printer Problems? We Can Help
              </span>
              <span className="block text-lg lg:text-xl font-bold text-white mb-2">
                24/7 Customer Care
              </span>
              <a
                href={getSafeLink("https://tawk.to/chat/66cdc9a850c10f7a00a0e87e/1i69tnf1v")}
                className="inline-block font-bold py-2 px-4 bg-black rounded-full text-white hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Chat Now
              </a>
              <span className="block text-lg lg:text-xl font-bold text-white mt-2">
                Your Satisfaction is Our Priority
              </span>
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={printer}
              alt="Printer"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
