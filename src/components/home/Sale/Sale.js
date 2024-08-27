import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  saleImgFive,
} from "../../../assets/images/index";

const Sale = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row p-4">
        <div className="lg:w-1/2 pr-4">
          <p className="text-xl lg:text-3xl font-semibold mb-4">
            Why Printer Scanner Setup
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Discover tips, tools, and resources to enhance your computer and
            printer experience. Learn how to troubleshoot common issues and
            maximize productivity.
          </p>
          <Link
            to="/hp-setup-guide"
            className="text-white bg-black py-2 px-4 rounded-full inline-block"
          >
            Setup Now
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src={saleImgOne}
            alt="Image"
            className="w-full h-auto lg:max-w-md lg:mx-auto"
          />
        </div>
      </div>

      {/* Left Right image */}

      <div className="flex flex-col lg:flex-row">
        {/* Left Image Div with padding */}
        <div className="lg:w-1/2 p-2">
          <img
            className="w-full h-auto max-w-full mx-auto object-cover"
            src={saleImgTwo}
            alt="Left Image"
          />
        </div>

        <div className="lg:w-1/2 p-2">
          <img
            className="w-full h-auto max-w-full mx-auto object-cover"
            src={saleImgThree}
            alt="Right Image"
          />
        </div>
      </div>

      {/* left image right text */}

      <div className="flex flex-col lg:flex-row p-6">
        <div className="lg:w-1/2">
          <img
            src={saleImgFive}
            alt="Image"
            className="w-full h-auto lg:max-w-md lg:mx-auto"
          />
        </div>
        <div className="lg:w-1/2 pr-4">
          <p className="text-xl lg:text-3xl font-semibold mb-4">
            Quick Start Guide for Your Printer
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Discover essential tips and tricks for setting up your printer
            effortlessly. Access our comprehensive guide for a smooth setup
            process.
          </p>
          <Link
            to="/hp-setup-guide"
            className="text-white bg-black py-2 px-4 rounded-full inline-block"
          >
            Start Setup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
