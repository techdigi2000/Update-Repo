import React, { useState } from "react";
import { Link } from "react-router-dom";
import { printer, bgmain } from "../../assets/images";

function Banner() {
  return (
    <div className="relative bg-cover" style={{ backgroundColor: "F0F8FF" }}>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-lightBlue p-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            ALL IN ONE PRINTER
          </h2>
          <p className="py-2 lg:py-5 text-lg lg:text-xl font-bold mb-4">
            How To Setup Remote Printer <br /> 123 Setup And Printer Setup
            <br /> Printer Scanner Setup
          </p>
          <p className="pt-2 mb-7">
            <Link
              to="/setup"
              className="font-bold py-4 px-6 mb-4 text-base md:text-lg bg-black border border-white rounded-lg text-white hover:bg-gray-800"
            >
              CLICK HERE FOR PRINTER SETUP
            </Link>
          </p>
          <p className="pt-2 mb-4">
            <span className="text-3xl lg:text-4xl font-bold">
              Having Inconvenience With Printer?
            </span>
            <br />

            <img
              src="https://i.ibb.co/HDsN9g1/Screenshot-2024-08-06-212652.png"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
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
