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

    // Adding Google Conversion Tracking Script (New Conversion Code)
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-16681626072/_e4MCPGFnc4ZENjTtZI-'
      });
    `;
    document.head.appendChild(script);

    return () => {
      clearTimeout(timeout);
      clearTimeout(renderTimeout);
      document.head.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  if (renderAnotherComponent) {
    return <AnotherComponent />;
  }

  return (
    <div>
      {/* External CSS Links */}
      <link
        media="screen"
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/page/123fontstyles.css"
      />
      <link
        media="screen"
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/dist/application.min.css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/vendor/jquery.typeahead.min.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/page/flex-design.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/page/desktop-app-store.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/page/swls-delay.css"
        type="text/css"
      />

      <div className="header-123">
        <div className="header-container">
          <div className="hp-logo">
            <Link to="/gb/en/" title="123.hp.com">
              <img
               
                src="https://123.hp.com/resources/assets/img/hp-logo.svg"
              />
            </Link>
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
            alt="Loading"
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

    
    </div>
  );
};

export default Loading;
