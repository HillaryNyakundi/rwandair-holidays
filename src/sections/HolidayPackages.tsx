import React from "react";
import MaldivesImage from "../assets/Maldives.jpg";
import RwandaImage from "../assets/Rwanda.jpg";
import LondonImage from "../assets/London.jpg";
import Mantis from "../assets/Mantis.png";
import { ArrowUpRight } from "lucide-react";

interface HolidayPackage {
  destination: string;
  price: number;
  image: string;
}

const HolidayPackages: React.FC = () => {
  const packages: HolidayPackage[] = [
    { destination: "Maldives", price: 1199, image: MaldivesImage },
    { destination: "Rwanda", price: 1199, image: RwandaImage },
    { destination: "London", price: 1199, image: LondonImage },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 bg-gray-50">
      <h2 className="text-xl font-bold text-center mb-8">
        Always Offering Amazing Holiday Packages
      </h2>

      {/* Holiday Packages Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.destination}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Destination Name and Arrow */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <h3 className="text-sm font-medium">{pkg.destination}</h3>
              <ArrowUpRight size={20} />
            </div>

            {/* Price */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
              <span className="text-sm font-medium">From ${pkg.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mantis Special Offer Section */}
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:pr-8">
          <div className="h-full w-full flex items-center justify-center">
            <img
              className="w-full h-auto object-cover rounded-md"
              src={Mantis}
              alt="Mantis"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-base md:text-2xl font-bold mb-4 text-center lg:text-left">
            Mantis Hotel and Resort Special Offer
          </h3>
          <p className="text-gray-600 mb-6 text-center lg:text-left">
            Looking to plan a trip and create lasting memories with loved ones?
            Well, it couldn't be better timing. Book your package with us and
            save £60 per adult and £45 per child on Mantis Hotel holidays when
            you fly with RwandAir.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#00509E] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Browse Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayPackages;
