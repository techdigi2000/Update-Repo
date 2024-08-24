import React, { useState } from "react";
import { Link } from "react-router-dom";
import { printer, bgmain } from "../../assets/images";

function Banner() {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/244575.jpg')" /* Replace with your image path */,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-lightBlue p-4">
          <h2
            className="text-3xl lg:text-5xl font-bold mb-4 text-white
          "
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Black outline effect
            }}
          >
            ALL IN ONE PRINTER
          </h2>
          <p
            className="py-2 lg:py-5 text-lg lg:text-xl font-bold mb-4 text-white"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Black outline effect
            }}
          >
            &#9658; 123 Setup And Printer Setup <br />
            &#9658; Quick and Easy Printer Setup <br />
            &#9658; Step-by-Step Printer Setup <br />
          </p>

          <p className="pt-2 mb-7">
            <Link
              to="/setup"
              className="font-bold py-4 px-6 mb-4 text-base md:text-lg bg-black rounded-lg text-white hover:bg-slate-700 animate-shake"
            >
              SETUP PRINTER NOW
            </Link>
          </p>
          <p className="pt-2 mb-4">
            <span className="text-3xl lg:text-4xl font-bold text-white">
              Printer Problems? We Can Help
            </span>
            <br />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
              24/7 Customer Care{" "}
              <a
                href="https://tawk.to/chat/66a8eee332dca6db2cb7758a/1i41uaahk" // Replace with your URL
                className="font-bold py-2 px-3 text-sm md:text-base bg-black rounded-full text-white hover:bg-gray-800"
              >
                Chat Now
              </a>
              <br />
              Your Satisfaction is Our Priority
            </span>
          </p>
        </div>

        {/* Right Div */}
        <div className="flex-1 bg-lightGreen relative">
          <div className="flex items-center justify-center">
            <img
              src={printer}
              alt="Right Image"
              className="lg:w-3/4 xl:w-4/5"
              style={{ width: "500px" }}
            />
          </div>
          <br />
          <p className="text-xl lg:text-4xl font-bold text-center lg:text-left">
            {/* Contact Number */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
