import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-scroll";
//import { Link } from "react-router-dom";
//import Flag from "../../assets/Flag-United-States.png";
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Booking from "../Booking";
//import SearchPackages from "../../sections/SearchPackages";

const Navbar: React.FC = () => {
  const [showRwandAirMenu, setShowRwandAirMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Dropdown Menu */}
        <div
          className="flex items-center relative"
          onMouseEnter={() => setShowRwandAirMenu(true)}
          onMouseLeave={() => setShowRwandAirMenu(false)}
        >
          <div className="text-2xl font-bold font-redressed">
            <span className="text-[#005DA8] hover:text-blue-500">
              RwandAir |
            </span>
            <span className="hover:text-blue-500"> HOLIDAYS</span>
          </div>

          {showRwandAirMenu && (
            <div className="absolute top-full left-0 mt-0 p-4 z-50">
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
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="holidays"
            smooth={true}
            duration={500}
            className="hover:text-blue-600"
          >
            Holidays
          </Link>

          <Link
            to="deals"
            smooth={true}
            duration={500}
            className="hover:text-blue-600"
          >
            Deals
          </Link>

          <Link
            to="destinations"
            smooth={true}
            duration={500}
            className="hover:text-blue-600"
          >
            Destinations
          </Link>
        </div>

        {/* Language and Contact */}
        <div className="hidden lg:flex items-center text-sm space-x-4">
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            placeholder="Select country"
            searchable
            searchPlaceholder="Search country"
            className="menu-flags"
          />

          <span className="flex items-center">
            <RiContactsFill className="mr-1" />
            <Link
              smooth={true}
              duration={500}
              to="footer"
              className="hover:text-blue-600"
            >
              Contact Us
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <div>
            <Link
              smooth={true}
              duration={500}
              to="home"
              className="block mb-2 hover:text-blue-600"
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={500}
              to="holidays"
              className="block mb-2 hover:text-blue-600"
            >
              Holidays
            </Link>
          </div>

          <Link
            smooth={true}
            duration={500}
            to="deals"
            className="block mb-4 hover:text-blue-600"
          >
            Deals
          </Link>

          <Link
            smooth={true}
            duration={500}
            to="destinations"
            className="block mb-4 hover:text-blue-600"
          >
            Destinations
          </Link>

          <Link to="footer" className="block mb-4 hover:text-blue-600">
            Contact Us
          </Link>

          <div className="flex items-center space-x-4">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select country"
              searchable
              searchPlaceholder="Search country"
              className="menu-flags"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
