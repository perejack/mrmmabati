
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedCallButton from '@/components/AnimatedCallButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative z-30">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src="https://shop.mabati.com/media/logo/stores/1/MRM_LOGO.png" alt="MRM Mabati Rolling Mills Logo" className="h-12 md:h-16" />

          </Link>

          {/* Mobile controls: Call button and Hamburger menu */}
          <div className="flex items-center">
            {/* Mobile Call Icon + Number */}
            <div className="flex items-center md:hidden mr-2 relative z-10"> {/* This div is hidden on medium screens and up */}
              <AnimatedCallButton
                phoneNumber="+254789178046"
                displayText=" " // Render only icon in the button
                className="!p-2 text-xs" // Adjusted padding for icon-only button
              />
              <a href="tel:+254789178046" className="ml-1.5 text-xs text-maisha-navy font-semibold hover:text-blue-600 transition-colors">
                +254 789178046
              </a>
            </div>
            {/* Mobile hamburger menu button */}
            <button 
              className="md:hidden flex flex-col justify-center items-center p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maisha-navy"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-maisha-navy transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-maisha-navy my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-maisha-navy transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-t-md font-medium transition-all duration-200 ease-in-out ${
                isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-maisha-navy hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-3 py-2 rounded-t-md font-medium transition-all duration-200 ease-in-out ${
                isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-maisha-navy hover:text-blue-600'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-t-md font-medium transition-all duration-200 ease-in-out ${
                isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-maisha-navy hover:text-blue-600'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-t-md font-medium transition-all duration-200 ease-in-out ${
                isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-maisha-navy hover:text-blue-600'
              }`
            }
          >
            Contact Us
          </NavLink>
          <AnimatedCallButton 
            phoneNumber="+254789178046" 
            className="hidden md:inline-flex ml-4"
          />
        </nav>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-20 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-1 py-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 font-medium transition-colors duration-200 ease-in-out rounded-md ${
                  isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-maisha-navy hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-2 px-4 font-medium transition-colors duration-200 ease-in-out rounded-md ${
                  isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-maisha-navy hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 font-medium transition-colors duration-200 ease-in-out rounded-md ${
                  isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-maisha-navy hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 font-medium transition-colors duration-200 ease-in-out rounded-md ${
                  isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-maisha-navy hover:text-blue-600 hover:bg-blue-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
