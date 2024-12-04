import React, { useState } from "react";

interface SearchPackagesProps {
  onSearch?: (searchParams: any) => void;
}

const SearchPackages: React.FC<SearchPackagesProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<string>("Flights + Hotel");
  const [flyingFrom, setFlyingFrom] = useState<string>("");
  const [flyingTo, setFlyingTo] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [travelers, setTravelers] = useState<string>("1 Room, 2 Persons");

  const tabs = ["Flights + Hotel", "Flights + Cars", "Hotels"];

  const handleSearch = () => {
    const searchParams = {
      tab: activeTab,
      flyingFrom,
      flyingTo,
      departureDate,
      travelers,
    };
    onSearch && onSearch(searchParams);
  };

  return (
    <div className="w-[1300px] bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto -mt-16 relative z-40">
      {/* Tabs */}
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Inputs */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flying from
          </label>
          <input
            type="text"
            value={flyingFrom}
            onChange={(e) => setFlyingFrom(e.target.value)}
            placeholder="Enter departure"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flying to
          </label>
          <input
            type="text"
            value={flyingTo}
            onChange={(e) => setFlyingTo(e.target.value)}
            placeholder="Enter destination"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departing
          </label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
      </div>

      {/* Additional Options */}
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Travelers
          </label>
          <select
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          >
            <option>1 Room, 2 Persons</option>
            <option>2 Rooms, 4 Persons</option>
            <option>3 Rooms, 6 Persons</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Search Packages
          </button>
        </div>
      </div>

      {/* Promo Code Option */}
      <div className="mt-4 text-center">
        <button className="text-blue-500 hover:underline">
          + Add Promo Code
        </button>
      </div>
    </div>
  );
};

export default SearchPackages;
