import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bigimage, hplogo } from "../../assets/images";

const Error = () => {
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
              <a
                href=".//"
                title="123.hp.com - Printer setup from the HP® Official site"
              >
                <img
                  alt="123.hp.com - Printer setup from the HP® Official site"
                  src="https://123.hp.com/resources/assets/img/hp-logo.svg"
                />
              </a>
            </div>
            <ul className="header-menu">
              <li>
                <Link to="/setup/officejet">OfficeJet</Link>
              </li>
              <li>
                <Link to="/setup/officejet">DeskJet</Link>
              </li>
              <li>
                <Link to="/setup/envy">ENVY</Link>
              </li>
              <li>
                <Link to="/setup/laserjet">LaserJet</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="one23-overlay"></div>

        <main className="vertical">
          <center>
            <br />
            <br />
            <img src={bigimage} style={{ maxWidth: "55%" }} />

            <a
              href="https://tawk.to/chat/66cdc9a850c10f7a00a0e87e/1i69tnf1v"
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

export default Error;
