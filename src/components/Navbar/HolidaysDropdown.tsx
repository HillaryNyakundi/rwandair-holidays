import React from "react";
import { Link } from "react-router-dom";

const HolidaysDropdown: React.FC = () => {
  const holidayTypes = [
    {
      category: "Beach Holidays",
      options: ["Maldives", "Seychelles", "Mauritius"],
    },
    {
      category: "Adventure Packages",
      options: ["Safari Tours", "Mountain Treks", "Cultural Expeditions"],
    },
    {
      category: "Romantic Getaways",
      options: ["Honeymoon Packages", "Couples Retreats", "Luxury Resorts"],
    },
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white border rounded-lg shadow-lg p-4 z-50">
      {holidayTypes.map((type, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold text-blue-800 mb-2">{type.category}</h4>
          <ul className="space-y-1">
            {type.options.map((option, i) => (
              <li
                key={i}
                className="hover:bg-blue-50 px-2 py-1 rounded cursor-pointer"
              >
                <Link
                  to={`/holidays/${option.toLowerCase().replace(" ", "-")}`}
                >
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HolidaysDropdown;
