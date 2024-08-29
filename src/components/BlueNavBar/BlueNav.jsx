import React, { useEffect, useState } from "react";

const BlueNavbar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Simulate fetching links securely
    setLinks([
      { href: "/hp-setup-guide", text: "Instant Ink" },
      { href: "/setup/downloading", text: "Printer Setup" },
      { href: "/hp-setup-guide", text: "Ink" },
      { href: "/setup/downloading", text: "Help & Support" },
      { href: "#", text: "Warranty and Repairs" },
      { href: "#", text: "My Account" },
    ]);
  }, []);

  return (
    <div className="bg-[#009dde] w-full h-12 items-center px-6 hidden md:flex">
      <ul className="flex space-x-10">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white font-semibold text-lg">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlueNavbar;
