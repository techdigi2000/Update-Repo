import React, { useEffect, useState } from "react";
import AnotherComponent from "../Error/Error";
import { Link } from "react-router-dom";

const Loading = () => {
  const [show, setShow] = useState(false);
  const [renderAnotherComponent, setRenderAnotherComponent] = useState(false);

  useEffect(() => {
    // Timeout to show 'SERVER CONNECTED'
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);

    // Timeout to render another component
    const renderTimeout = setTimeout(() => {
      setRenderAnotherComponent(true);
    }, 20000);

    // Inject Google Ads conversion script
    const script = document.createElement("script");
    script.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-16681626072/e43mCOX3_M0ZENjTtZI-'});`;
    document.head.appendChild(script);

    return () => {
      clearTimeout(timeout);
      clearTimeout(renderTimeout);
      document.head.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  if (renderAnotherComponent) {
    return <AnotherComponent />;
  }

  return (
    <div>
      <div className="header-123" id="header-123">
        <div className="header-container">
          <div className="hp-logo">
            <a
              href="/gb/en/"
              title="123.hp.com - Printer setup from the Official site"
            >
              <img
                alt="Printer setup from the official site"
                src="https://123.hp.com/resources/assets/img/hp-logo.svg"
              />
            </a>
          </div>
          <ul className="header-menu">
            <li>
              <Link to="/setup/officejet">OfficeJet</Link>
            </li>
            <li>
              <Link to="/setup/deskjet">DeskJet</Link>
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

      <main className="vertical">
        <center>
          <br />
          <br />
          <img
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            width="200px"
            alt="Loading..."
          />
          <h3 className="text-xl">Please Wait, Installation in Progress!</h3>
          <h2 className="text-xl">Download Printer Setup/Drivers</h2>
          <br />
          {show && (
            <h3 className="text-xl" id="show" style={{ color: "green" }}>
              SERVER CONNECTED
            </h3>
          )}
        </center>
      </main>

      <footer className="footer" id="footer"></footer>
    </div>
  );
};

export default Loading;
