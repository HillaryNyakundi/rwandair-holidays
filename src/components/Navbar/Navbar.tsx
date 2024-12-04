import React, { useState } from "react";
import { Link } from "react-router-dom";
import DestinationsDropdown from "./DestinationsDropdown";
import HolidaysDropdown from "./HolidaysDropdown";
import Flag from "../../assets/Flag-United-States.png";
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Booking from "../Booking";
//import SearchPackages from "../../sections/SearchPackages";

const Navbar: React.FC = () => {
  const [showHolidaysMenu, setShowHolidaysMenu] = useState(false);
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);
  const [showRwandAirMenu, setShowRwandAirMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Dropdown Menu */}
        <div
          className="flex items-center relative"
          onMouseEnter={() => setShowRwandAirMenu(true)}
          onMouseLeave={() => setShowRwandAirMenu(false)}
        >
          <div className="text-2xl font-bold font-redressed">
            <span className="text-[#005DA8]">RwandAir |</span>
            <span> HOLIDAYS</span>
          </div>

          {showRwandAirMenu && (
            <div className="absolute top-full left-0 mt-2 p-4 z-50">
              <Booking />
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <div
            className="relative"
            onMouseEnter={() => setShowDestinationsMenu(true)}
            onMouseLeave={() => setShowDestinationsMenu(false)}
          >
            <Link to="/destinations" className="hover:text-blue-600">
              Destinations
            </Link>
            {showDestinationsMenu && <DestinationsDropdown />}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowHolidaysMenu(true)}
            onMouseLeave={() => setShowHolidaysMenu(false)}
          >
            <Link to="/holidays" className="hover:text-blue-600">
              Explore Rwanda
            </Link>
            {showHolidaysMenu && <HolidaysDropdown />}
          </div>

          <Link to="/latest-offers" className="hover:text-blue-600">
            Deals
          </Link>

          <Link to="/latest-offers" className="hover:text-blue-600">
            Holidays
          </Link>
        </div>

        {/* Language and Contact */}
        <div className="hidden lg:flex items-center text-sm space-x-4">
          <span>
            <img src={Flag} alt="US flag" className="w-6 h-4" />
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            United States - EN
          </span>
          <span className="flex items-center">
            <RiContactsFill className="mr-1" />
            Contact Us
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <div
            className="relative mb-4"
            onMouseEnter={() => setShowDestinationsMenu(true)}
            onMouseLeave={() => setShowDestinationsMenu(false)}
          >
            <Link to="/destinations" className="block mb-2 hover:text-blue-600">
              Destinations
            </Link>
            {showDestinationsMenu && <DestinationsDropdown />}
          </div>

          <div
            className="relative mb-4"
            onMouseEnter={() => setShowHolidaysMenu(true)}
            onMouseLeave={() => setShowHolidaysMenu(false)}
          >
            <Link to="/holidays" className="block mb-2 hover:text-blue-600">
              Explore Rwanda
            </Link>
            {showHolidaysMenu && <HolidaysDropdown />}
          </div>

          <Link to="/latest-offers" className="block mb-4 hover:text-blue-600">
            Deals
          </Link>

          <Link to="/footer" className="block mb-4 hover:text-blue-600">
            Contact Us
          </Link>

          <div className="flex items-center space-x-4">
            <span>
              <img src={Flag} alt="US flag" className="w-6 h-4" />
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              United States - EN
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
