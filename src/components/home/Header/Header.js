import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div
      className="w-full h-20 bg-sky-500  border-b-[1px] border-b-gray-200"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/244575.jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <div>
            <span
              className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              
            </span>
          </div>

          {/* Right Side Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-white font-bold hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-white font-bold hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              to="/shop"
              className="text-white font-bold hover:text-gray-300"
            >
              Shop
            </Link>
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
