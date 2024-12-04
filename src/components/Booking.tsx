import React, { useState } from "react";
import { GiCommercialAirplane, GiAirplaneDeparture } from "react-icons/gi";
import { FaBed, FaCarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

interface SearchPackagesProps {
  onSearch?: (searchParams: any) => void;
}

const SearchPackages: React.FC<SearchPackagesProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<string>("Flights + Hotel");
  const [flyingFrom, setFlyingFrom] = useState<string>("");
  const [flyingTo, setFlyingTo] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [travelers, setTravelers] = useState<string>("1 Room, 2 Persons");
  const [cabin, setCabin] = useState<string>("First class");

  const tabs = ["Flights + Hotel", "Flights + Cars", "Hotels"];

  const handleSearch = () => {
    const searchParams = {
      tab: activeTab,
      flyingFrom,
      flyingTo,
      departureDate,
      travelers,
      cabin,
    };
    onSearch && onSearch(searchParams);
  };

  return (
    <div className="w-[1350px] bg-white rounded-lg shadow-lg p-6">
      {/* Tabs */}
      <div className="flex justify-around mb-6">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer flex items-center space-x-2 ${
              activeTab === tab
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:w-full after:bottom-[-5px]"
                : "text-gray-500"
            }`}
          >
            {tab}
            {tab === "Flights + Hotel" && (
              <>
                <GiCommercialAirplane className="ml-1" />
                <FaBed />
              </>
            )}
            {tab === "Flights + Cars" && (
              <>
                <GiCommercialAirplane className="ml-1" />
                <FaCarAlt />
              </>
            )}
            {tab === "Hotels" && <FaBed className="ml-1" />}
          </span>
        ))}
      </div>

      {/* Table-Like Structure */}
      <div className="grid grid-cols-5 border border-gray-300 rounded-lg">
        {/* Flying From */}
        <div className="flex items-start border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <GiAirplaneDeparture className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Flying from</label>
            <select
              value={flyingFrom}
              onChange={(e) => setFlyingFrom(e.target.value)}
              className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>Kigali, Rwanda</option>
              <option>Frankfurt, German</option>
              <option>Cadjahoun, Benin</option>
              <option>Berlin, German</option>
            </select>
          </div>
        </div>

        {/* Flying To */}
        <div className="flex items-start border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <CiLocationOn className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Flying to</label>
            <select
              value={flyingTo}
              onChange={(e) => setFlyingTo(e.target.value)}
              className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>Frankfurt, German</option>
              <option>Kigali, Rwanda</option>
              <option>Cadjahoun, Benin</option>
              <option>Berlin, German</option>
            </select>
          </div>
        </div>

        {/* Departing and Returning */}
        <div className="flex flex-col border-r border-gray-300 p-4">
          <div className="flex justify-between items-center space-x-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Departing</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
              />
            </div>
            {/* <div className="flex flex-col">
              <label className="text-sm text-gray-500">Returning</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
              />
            </div> */}
          </div>
        </div>

        {/* Travelers */}
        <div className="flex items-start border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <IoMdContact className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Traveler(s)</label>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>1 Room, 2 Persons</option>
              <option>2 Rooms, 4 Persons</option>
              <option>3 Rooms, 6 Persons</option>
            </select>
          </div>
        </div>

        {/* Cabin Class */}
        <div className="flex items-start border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <MdAirlineSeatReclineExtra className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Cabin Class</label>
            <select
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
              className="text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>First class</option>
              <option>Business class</option>
              <option>Economy class</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Promo Code */}
        <button className="text-blue-600 text-sm hover:underline">
          + Add promo code
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
        >
          Search packages
        </button>
      </div>
    </div>
  );
};

export default SearchPackages;