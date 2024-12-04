import React from "react";
import { MapPin, Calendar, Hotel } from "lucide-react";
import Thailand from "../assets/Thailand 3.png";
import Kilimanjaro from "../assets/Kilimanjaro sm 3.png";
import Mangalore from "../assets/Mangalore sm 2.png";
import Israel from "../assets/Israel 2.png";
import Fiji from "../assets/Fiji 2.png";
import Jamaica from "../assets/Jamaica 2.png";

interface PackageDeal {
  destination: string;
  price: number;
  nights: number;
  type: string;
  mealPlan: string;
  checkIn: string;
  hotel?: string | null;
  image: string;
}

const PackageDeals: React.FC = () => {
  const deals: PackageDeal[] = [
    {
      destination: "Kamembe",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Thailand,
    },
    {
      destination: "Abu Dhabi",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Kilimanjaro,
    },
    {
      destination: "San Francisco",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Mangalore,
    },
    {
      destination: "South Coast",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Israel,
    },
    {
      destination: "Paradisus",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Fiji,
    },
    {
      destination: "Sheraton",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Jamaica,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Popular Package Deals
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Placeholder for destination image */}
            <img
              src={deal.image}
              alt={deal.destination}
              className="w-full h-auto object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-800">
                  {deal.destination}
                </h3>
                <span className="text-xl font-semibold text-green-600">
                  ${deal.price}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2 text-blue-500" size={20} />
                  <span>{deal.destination} Exclusive Offer</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2 text-blue-500" size={20} />
                  <span>
                    {deal.nights} nights | {deal.type}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Hotel className="mr-2 text-blue-500" size={20} />
                  <span>{deal.mealPlan}</span>
                </div>

                {deal.hotel && (
                  <div className="text-sm text-gray-500 italic">
                    Hotel: {deal.hotel}
                  </div>
                )}

                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2 text-blue-500" size={20} />
                  <span>Check-in: {deal.checkIn}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDeals;
