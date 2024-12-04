import React from "react";
import MaldivesImage from "../assets/Maldives.jpg";
import RwandaImage from "../assets/Rwanda.jpg";
import LondonImage from "../assets/London.jpg";
import Mantis from "../assets/Mantis.png";

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
    <div className="max-w-screen-xl mx-auto py-12 px-4 bg-gray-50">
      <h2 className="text-xl font-bold text-center mb-8">
        Always Offering Amazing Holiday Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
          >
            {/* Image for each destination */}
            <img
              src={pkg.image}
              alt={pkg.destination}
              className="mx-auto mb-4 w-full h-auto object-cover rounded-md"
            />
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold mb-2">
                {pkg.destination} Holidays
              </h3>
              <p className="text-lg font-bold text-green-600">
                From ${pkg.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 flex items-center">
        <div className="w-1/2 pr-8">
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-gray-500">
              <img
                className="w-full h-auto object-cover"
                src={Mantis}
                alt="Mantis"
              />
            </span>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Mantis Hotel and Resort Special Offer
          </h3>
          <p className="text-gray-600 mb-6">
            Looking to plan a trip and create lasting memories with loved ones?
            Well, it couldn't be better timing. Book your package with us and
            save £60 per adult and £45 per child on Mantis Hotel holidays when
            you fly with RwandAir.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Browse Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;
