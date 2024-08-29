import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const DeviceSelection = () => {
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

  const devices = [
    {
      name: "Windows",
      icon: FaWindows,
      link: "/hp-setup-guide",
      color: "bg-blue-500",
    },
    {
      name: "Mac",
      icon: FaApple,
      link: "/hp-setup-guide",
      color: "bg-gray-700",
    },
    {
      name: "Linux",
      icon: FaLinux,
      link: "/hp-setup-guide",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="mt-6 mb-6 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Choose Your Device</h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {devices.map((device) => (
          <Link
            key={device.name}
            to={getSafeLink(device.link)}
            className={`${device.color} hover:opacity-90 text-white p-4 sm:p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
          >
            <device.icon className="text-4xl sm:text-5xl mb-4" />
            <span className="text-lg sm:text-xl font-semibold">
              {device.name}
            </span>
            <span className="mt-2 text-xs sm:text-sm">Click to setup</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeviceSelection;
