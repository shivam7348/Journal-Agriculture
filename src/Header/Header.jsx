import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArchivesOpen, setIsArchivesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleArchivesDropdown = (open) => {
    setIsArchivesOpen(open);
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-green-50 to-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto my-auto py-4 flex justify-between items-center">
          {/* Logo and Journal Name */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png" // Change this path to your actual logo location
                alt="Journal Logo"
                className="h-12"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}
          >
            <button
              onClick={closeMenu}
              className="lg:hidden absolute top-4 right-4 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 text-gray-800 font-semibold text-lg p-4 lg:p-0 lg:mr-5">
              <li>
                <Link
                  to="/"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 pb-2 lg:pb-2"
                  onClick={closeMenu}
                >
                  Home
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 pb-2 lg:pb-2"
                  onClick={closeMenu}
                >
                  About us
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/editorialboard"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 pb-2 lg:pb-2"
                  onClick={closeMenu}
                >
                  Editorial Board
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/guideline"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 lg:pb-2"
                  onClick={closeMenu}
                >
                  Guidelines
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li
                onMouseEnter={() => toggleArchivesDropdown(true)}
                onMouseLeave={() => toggleArchivesDropdown(false)}
                className="relative"
              >
                <Link
                  to="/archives"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 lg:pb-2"
                  onClick={closeMenu}
                >
                  Archives
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                {isArchivesOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 transform transition-all duration-300 ease-in-out">
                    <li>
                      <Link
                        to="/archives/volume1"
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
                        onClick={closeMenu}
                      >
                        Volume 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/archives/volume2"
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
                        onClick={closeMenu}
                      >
                        Volume 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative group text-gray-700 hover:text-green-600 transition-colors duration-300 pb-2 lg:pb-2"
                  onClick={closeMenu}
                >
                  Contact Us
                  <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;