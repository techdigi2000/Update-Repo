import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import brandlogo from "../../../assets/images/hplogo.png"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Search query:", searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={brandlogo}
                alt="Company Logo"
                className="h-8 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Search Box - Hidden on small screens */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block flex-grow max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-500"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Navigation Links - Hidden on small screens */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-500 font-medium">
              Shop
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
              Contact
            </Link>
          </nav>

          {/* Menu Button - Visible only on small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu - Visible only when menu is open on small screens */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-500"
                >
                  <FaSearch className="w-5 h-5" />
                </button>
              </div>
            </form>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-blue-500 font-medium">
                Shop
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
