import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Moon, Calendar, Bed } from "lucide-react";
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
      destination: "Kamembe exclusive offer",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Thailand,
    },
    {
      destination: "San Francisco exclusive offer",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Kilimanjaro,
    },
    {
      destination: "Abu dhabi exclusive offer",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Mangalore,
    },
    {
      destination: "South Coast exclusive offer",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Israel,
    },
    {
      destination: "Sheraton exclusive offer",
      price: 1199,
      nights: 3,
      type: "Return fare all-inclusive",
      mealPlan: "Bed and Breakfast",
      checkIn: "21st May 2024",
      hotel: null,
      image: Fiji,
    },
    {
      destination: "Paradisus exclusive offer",
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
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Popular Package Deals
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border"
          >
            {/* Destination Image */}
            <img
              src={deal.image}
              alt={deal.destination}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3">{deal.destination}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Moon className="mr-2 text-black" size={20} />
                  {deal.nights} nights
                </div>
                <div className="flex items-center">
                  <Bed className="mr-2 text-black" size={20} />
                  {deal.mealPlan}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-black" size={20} />
                  Check-in: {deal.checkIn}
                </div>
                <div className="flex items-center">
                  <GiAirplaneDeparture className="mr-2 text-black" size={20} />
                  {deal.type}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="text-sm text-gray-500">From</h2>
                <h2 className="text-lg font-bold">${deal.price}</h2>
                <h2 className="text-sm text-gray-500">total per person</h2>
              </div>
              <button className="w-full bg-[#00509E] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageDeals;
