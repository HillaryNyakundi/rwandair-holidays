/* // AirportNavigation.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface Airport {
  name: string;
  location: string;
}

const AirportNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Define the airport data directly in the component
  const airports: Airport[] = [
    { name: "Kigali International Airport", location: "Rwanda" },
    { name: "Berlin Brandenburg Airport (U.C.)", location: "German" },
    { name: "Frankfurt am Main Airport", location: "German" },
    { name: "Cadjehoun Airport", location: "Benin" },
    { name: "Berlin Brandenburg Airport", location: "German" },
    { name: "Kigali International Airport", location: "Rwanda" },
  ];

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovering(true);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsOpen(false);
    };

    if (dropdownRef.current) {
      dropdownRef.current.addEventListener("mouseenter", handleMouseEnter);
      dropdownRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener("mouseenter", handleMouseEnter);
        dropdownRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleAirportSelect = (airport: Airport) => {
    // Implement airport selection logic here
    console.log(`Selected airport: ${airport.name}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`absolute z-10 w-64 bg-white rounded-md shadow-lg mt-2 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2">
          {airports.map((airport, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleAirportSelect(airport)}
            >
              <h3 className="text-lg font-medium">{airport.name}</h3>
              <p className="text-gray-500">{airport.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AirportNavigation;
 */

import React from "react";
import { Link } from "react-router-dom";

const DestinationsDropdown: React.FC = () => {
  const destinations = [
    {
      region: "Africa",
      airports: [
        { name: "Kigali International Airport", country: "Rwanda" },
        { name: "Other African Airports", country: "Various" },
      ],
    },
    {
      region: "Europe",
      airports: [
        { name: "Frankfurt am Main Airport", country: "Germany" },
        { name: "Berlin Brandenburg Airport", country: "Germany" },
      ],
    },
    {
      region: "Asia",
      airports: [{ name: "Coming Soon", country: "Check back for updates" }],
    },
    {
      region: "Middle East",
      airports: [{ name: "Abu Dhabi Airport", country: "UAE" }],
    },
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-96 bg-white border rounded-lg shadow-lg p-4 z-50">
      {destinations.map((dest, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold text-blue-800 mb-2">{dest.region}</h4>
          {dest.airports.length > 0 ? (
            <ul className="space-y-1">
              {dest.airports.map((airport, i) => (
                <li
                  key={i}
                  className="hover:bg-blue-50 px-2 py-1 rounded cursor-pointer"
                >
                  <Link to={`/destinations/${airport.country.toLowerCase()}`}>
                    <span className="font-medium">{airport.name}</span>
                    <span className="text-gray-500 ml-2 text-sm">
                      ({airport.country})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No airports available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DestinationsDropdown;
