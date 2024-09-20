import React from "react";
import { Link } from "react-router-dom";

function Setup() {
  React.useEffect(() => {
    // Preload important images
    const imagesToPreload = [
      "https://123.hp.com/resources/assets/img/hp-logo.svg",
      "https://123.hp.com/resources/assets/img/defaultPrinterSetup.png",
      "https://123.hp.com/resources/assets/img/person_assist.svg",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      {/* Keep all your existing CSS links */}
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
        href="https://123.hp.com/resources/assets/css/page/index.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/vendor/owlCarousel/owl.carousel.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://123.hp.com/resources/assets/css/vendor/owlCarousel/owl.theme.default.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://www8.hp.com/etc.clientlibs/HPIT-AEM-GLOBALNAV/clientlibs-globalnav/clientlibs-fonts/us/en/clientlib-hf-fontface.e416b85cad0cf264bdbe92bc18c4af0a.css"
        type="text/css"
        media="screen, print"
      />
      <link
        rel="stylesheet"
        href="https://www8.hp.com/etc.clientlibs/HPIT-AEM-GLOBALNAV/clientlibs-globalnav/clientlib-hpi-hf-r-css.e416b85cad0cf264bdbe92bc18c4af0a.css"
        type="text/css"
        media="screen, print"
      />

      <title>123.hp.com - Printer setup from the HP® Official site</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="hp_inav_version" content="ihfcaas.5.r" />

      {/* Rest of your component JSX */}
      <div className="header-123" id="header-123">
        <div className="header-container">
          <div className="hp-logo">
            <Link to="/">
              <img
                src="https://123.hp.com/resources/assets/img/hp-logo.svg"
                width="50"
                height="50"
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

      {/* Hidden inputs */}
      <div>
        <input id="deviceId" type="hidden" defaultValue="" />
        <input id="languageDirection" defaultValue="ltr" type="hidden" />
        <input
          id="gotoHPUrl"
          defaultValue="https://h20180.www2.hp.com/apps/Nav?h_product=known&h_client=S-A-10020-1&h_lang=en&h_cc=us&h_pagetype=s-002"
          type="hidden"
        />
        <input id="localePath" defaultValue="/us/en" type="hidden" />
        <input
          id="printerSetupUrl"
          defaultValue="https://support.hp.com/us-en/printer-setup"
          type="hidden"
        />
      </div>

      <div id="one23-overlay" />

      <main className="vertical">
        {/* Main content */}
        <div className="standard-bg horizontal centered top-content shrink-off">
          <div className="main-content vertical has-side-content">
            <div className="page-header vertical centered shrink-off">
              <div>Set up your HP printer</div>
            </div>
            <div className="sub-header">
              Enter your HP product name and model number to get the right HP
              Smart software and drivers for you
            </div>
            <div id="ljAlertMessage">&nbsp;</div>
            <div id="printerlist-content" className="horizontal">
              <div className="searchbar input">
                <form action="" id="typeahead-form" name="typeahead-form">
                  <div className="typeahead__container">
                    <div className="typeahead__field">
                      <span className="typeahead__query">
                        <span className="input-cancel" />
                        <input
                          autoComplete="off"
                          className="js-typeahead"
                          id="printer-searchlist"
                          name="printer-searchlist"
                          required="required"
                          spellCheck="false"
                          title="Please fill out this field."
                          type="search"
                          placeholder="Enter your product name here. Example: OfficeJet 9010"
                        />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="searchbar button">
                <Link to="/setup/downloading" id="btn-begin-link">
                  <button className="btn" disabled="" id="btn-begin">
                    Next
                  </button>
                </Link>
              </div>
            </div>
            <div className="whereis-printer-model">
              <div className="no-device" id="device-not-listed">
                <Link to="/setup/downloading">My device is not listed</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="horizontal centered">
          <div className="main-content vertical bottom">
            <div className="vertical">
              <div className="side-images always-visible printer-container">
                <img
                  alt="printer"
                  className="welcome-selected-printer"
                  id="printers-image"
                  src="https://123.hp.com/resources/assets/img/defaultPrinterSetup.png"
                  width="300"
                  height="200"
                />
              </div>
              <div className="vertical main-text bottom-text">
                <div id="copy1">
                  Install HP Smart software and drivers on each mobile device or
                  computer you want to print from. Add the printer on the new
                  device.
                </div>
                <div className="support-item">
                  <div className="support-header horizontal">
                    <div className="support-header-icon">
                      <img
                        src="https://123.hp.com/resources/assets/img/person_assist.svg"
                        alt="Support icon"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div className="support-header-note main-text" id="copy2">
                      Need additional help with setup? Visit{" "}
                      <a
                        href="https://tawk.to/chat/66a8eee332dca6db2cb7758a/1i41uaahk"
                        id="support-url"
                      >
                        HP Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Setup;
