import React from "react";
import {
  Wifi,
  Download,
  Printer,
  Settings,
  Check,
  HelpCircle,
} from "lucide-react";

const SetupStep = ({ icon, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="mr-4 text-blue-600 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Troubleshoot = ({ title, description }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold mb-2 flex items-center">
      <HelpCircle className="mr-2 text-yellow-600" size={20} />
      {title}
    </h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

const HPPrinterWirelessSetup = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        How to Set Up Your HP Printer Wirelessly
      </h1>

      <div className="bg-gray-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          Follow these steps for 123.hp.com setup:
        </h2>

        <SetupStep
          icon={<Download size={28} />}
          title="1. Download HP Smart App"
          description="Visit 123.hp.com/setup or search for 'HP Smart' in your device's app store. Download and install the app on your computer or mobile device."
        />

        <SetupStep
          icon={<Wifi size={28} />}
          title="2. Connect to Wi-Fi"
          description="Ensure your computer or mobile device is connected to your home Wi-Fi network. Your HP printer will need to join this same network."
        />

        <SetupStep
          icon={<Printer size={28} />}
          title="3. Prepare Your Printer"
          description="Unbox your HP printer if it's new. Remove all packing materials and tape. Plug in the power cord and turn on the printer."
        />

        <SetupStep
          icon={<Settings size={28} />}
          title="4. Access Printer Settings"
          description="On your printer's control panel, navigate to the network or wireless settings. Look for an option to start the wireless setup wizard."
        />

        <SetupStep
          icon={<Wifi size={28} />}
          title="5. Connect Printer to Wi-Fi"
          description="Select your Wi-Fi network name (SSID) from the list on your printer's display. Enter the Wi-Fi password when prompted. This step connects your HP printer to wifi."
        />

        <SetupStep
          icon={<Check size={28} />}
          title="6. Complete 123.hp.com Setup"
          description="Open the HP Smart app on your device. Click 'Add Printer' and follow the on-screen instructions. The app should detect your printer on the network and complete the setup process."
        />
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          Troubleshooting 123.hp.com Setup
        </h3>

        <Troubleshoot
          title="Printer Not Detected"
          description="If the HP Smart app doesn't find your printer, ensure both your device and printer are on the same Wi-Fi network. Try restarting your printer and router."
        />

        <Troubleshoot
          title="Connection Fails"
          description="If your printer fails to connect to Wi-Fi, check if you've entered the correct password. Move the printer closer to your router and try again."
        />

        <Troubleshoot
          title="Setup Incomplete"
          description="If setup doesn't complete, visit 123.hp.com/setup from a web browser for additional guidance or to download printer-specific software."
        />
      </div>

      <div className="bg-gray-200 p-6 rounded-lg text-sm">
        <h4 className="font-semibold mb-2">Disclaimer:</h4>
        <p>
          This guide is provided by an independent printer retailer to assist
          with 123.hp.com setup. For official support and warranty services,
          please visit the official HP website or contact HP customer support
          directly.
        </p>
      </div>
    </div>
  );
};

export default HPPrinterWirelessSetup;
