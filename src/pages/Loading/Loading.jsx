import React, { useEffect, useState } from "react";
import AnotherComponent from "../Error/Error";
import { Link } from "react-router-dom";

const Loading = () => {
  const [show, setShow] = useState(false);
  const [renderAnotherComponent, setRenderAnotherComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);
    const renderTimeout = setTimeout(() => {
      setRenderAnotherComponent(true);
    }, 20000);

    // Google Conversion Tracking
    const script = document.createElement('script');
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-16681626072/1zLlCKCnls4ZENjTtZI-',
        'value': 50.0,
        'currency': 'INR'
      });
    `;
    document.body.appendChild(script);

    return () => {
      clearTimeout(timeout);
      clearTimeout(renderTimeout);
      document.body.removeChild(script);
    };
  }, []);

  if (renderAnotherComponent) {
    return <AnotherComponent />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="header-123 w-full bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hp-logo">
            <Link to="/gb/en/" title="123 Printer Setup">
              <img
                alt="123 Printer Setup Logo"
                src="https://123.hp.com/resources/assets/img/hp-logo.svg"
                className="h-8"
              />
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li><Link to="/setup/officejet" className="text-gray-700">OfficeJet</Link></li>
            <li><Link to="/setup/deskjet" className="text-gray-700">DeskJet</Link></li>
            <li><Link to="/setup/envy" className="text-gray-700">ENVY</Link></li>
            <li><Link to="/setup/laserjet" className="text-gray-700">LaserJet</Link></li>
          </ul>
        </div>
      </div>

      <main className="vertical text-center mt-8">
        <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" width="200px" alt="Loading" />
        <h3 className="text-xl mt-4">Please Wait, Installation in Progress!</h3>
        <h2 className="text-xl mt-2">Download Printer Setup/Drivers</h2>
        <br />
        {show && (
          <h3 className="text-xl text-green-600" id="show">SERVER CONNECTED</h3>
        )}
      </main>

      <footer className="footer w-full bg-gray-800 text-white py-4 text-center">
        Footer Content Here
      </footer>
    </div>
  );
};

export default Loading;
