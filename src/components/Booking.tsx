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
  const [returnDate, setReturnDate] = useState<string>("");
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
    <div className="max-w-full px-4 sm:px-6 md:w-[700px] lg:w-[980px] xl:w-[1200px] lg:mx-auto bg-white rounded-lg shadow-lg sm:p-6">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-around mb-6">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer flex items-center space-x-2 mb-2 sm:mb-0 justify-center ${
              activeTab === tab
                ? "text-blue-600 font-semibold relative sm:after:content-[''] sm:after:absolute sm:after:h-[2px] sm:after:bg-blue-600 sm:after:w-full sm:after:bottom-[-5px]"
                : "text-gray-500"
            }`}
          >
            {tab}
            {tab === "Flights+ Hotel" && (
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
      <div className="max-w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-gray-300 rounded-lg">
        {/* Flying From */}
        <div className="flex items-start border-b sm:border-b-0 sm:border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <GiAirplaneDeparture className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Flying from</label>
            <select
              value={flyingFrom}
              onChange={(e) => setFlyingFrom(e.target.value)}
              className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>Kigali, Rwanda</option>
              <option>Frankfurt, German</option>
              <option>Cadjahoun, Benin</option>
              <option>Berlin, German</option>
            </select>
          </div>
        </div>

        {/* Flying To */}
        <div className="flex items-start border-b sm:border-b-0 sm:border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <CiLocationOn className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Flying to</label>
            <select
              value={flyingTo}
              onChange={(e) => setFlyingTo(e.target.value)}
              className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>Frankfurt, German</option>
              <option>Kigali, Rwanda</option>
              <option>Cadjahoun, Benin</option>
              <option>Berlin, German</option>
            </select>
          </div>
        </div>

        {/* Date Container - Departing and Returning */}
        <div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-gray-300">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            {/* Departing Date */}
            <div className="flex flex-col w-full sm:w-1/2">
              <div className="flex items-center space-x-1 mb-1">
                <CiLocationOn className="text-gray-500" />
                <label className="text-sm text-gray-500">Departing</label>
              </div>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1"
              />
            </div>

            {/* Returning Date */}
            <div className="flex flex-col w-full sm:w-1/2">
              <div className="flex items-center space-x-1 mb-1">
                <CiLocationOn className="text-gray-500" />
                <label className="text-sm text-gray-500">Returning</label>
              </div>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1"
              />
            </div>
          </div>
        </div>

        {/* Travelers */}
        <div className="flex items-start border-b sm:border-b-0 sm:border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <IoMdContact className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Traveler(s)</label>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>1 Room, 2 Persons</option>
              <option>2 Rooms, 4 Persons</option>
              <option>3 Rooms, 6 Persons</option>
            </select>
          </div>
        </div>

        {/* Cabin Class */}
        <div className="flex items-start border-b sm:border-b-0 sm:border-r border-gray-300 p-4">
          <div className="flex items-center justify-center w-10 h-10">
            <MdAirlineSeatReclineExtra className="text-lg text-gray-500" />
          </div>
          <div className="flex flex-col ml-2">
            <label className="text-sm text-gray-500">Cabin Class</label>
            <select
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
              className="w-full text-sm font-medium text-gray-900 border border-gray-300 rounded-md p-1 mt-1"
            >
              <option>First class</option>
              <option>Business class</option>
              <option>Economy class</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0">
        {/* Promo Code */}
        <button className="text-blue-600 text-sm hover:underline">
          + Add promo code
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
        >
          Search packages
        </button>
      </div>
    </div>
  );
};

export default SearchPackages;
