import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bigimage, hplogo } from "../../assets/images";
import img2 from "../../assets/Imagecn.jpg";

const CanonError = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  // Function to handle "Esc" key press event
  const handleEscKeyPress = (event) => {
    if (event.keyCode === 27) {
      // "Esc" key is pressed
      setShowNavigation(!showNavigation); // Toggle navigation visibility
    }
  };

  useEffect(() => {
    // Add event listener for "Esc" key press
    document.addEventListener("keydown", handleEscKeyPress);

    // Clean up function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [showNavigation]); // Re-run effect whenever showNavigation state changes

  return (
    <html country="GB" lang="en" dir="ltr">
      <head>
        <style>
          {`
            .header-123 .header-menu {
              display: ${showNavigation ? "block" : "none"};
            }

            .live-chat-button {
              animation: moveUpDown 2s infinite alternate;
            }

            @keyframes moveUpDown {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-10px);
              }
            }
          `}
        </style>
      </head>
      <body>
        <div
          className={`header-123 ${showNavigation ? "" : "hide-navigation"}`}
          id="header-123"
        >
          <div className="header-container">
            <div className="hp-logo">
              <a href="/canon-setup-guide" className="block">
                <img
                  src={img2}
                  alt="Canon Setup Guide"
                  className="w-16 h-16 md:w-24 md:h-24 object-contain mx-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div id="one23-overlay"></div>

        <main className="vertical">
          <center>
            <br />
            <br />
            <img src={bigimage} style={{ maxWidth: "55%" }} />

            <a
              href="https://tawk.to/chat/66a8eee332dca6db2cb7758a/1i41uaahk"
              className="font-bold text-2xl bg-yellow-300 py-1 px-5 rounded-lg live-chat-button"
            >
              Live Chat Now
            </a>
          </center>
        </main>
      </body>
    </html>
  );
};

export default CanonError;
