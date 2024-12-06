import React from "react";
import { FaPercentage, FaGlobe, FaPlane, FaShieldAlt } from "react-icons/fa";

const WhyBookWithUs: React.FC = () => {
  const reasons = [
    {
      title: "Save up to 30%",
      description:
        "Unlock savings of up to 30% on your next purchase! Don't miss out on this incredible opportunity to save big.",
      icon: <FaPercentage className="text-[#00509E] text-2xl" />, // Save Icon
    },
    {
      title: "Worldwide Coverage",
      description:
        "Enjoy worldwide coverage with our unbeatable savings offer! Wherever your destination, our discounts have you covered.",
      icon: <FaGlobe className="text-[#00509E] text-2xl" />, // Globe Icon
    },
    {
      title: "Collect & Spend Miles",
      description:
        "Collect and spend miles with ease! Our offer lets you earn and utilize miles for your dream holiday.",
      icon: <FaPlane className="text-[#00509E] text-2xl" />, // Plane Icon
    },
    {
      title: "World's Safest Airline",
      description:
        "Choose the world's safest airline for peace of mind during your travels. Safety is our top priority.",
      icon: <FaShieldAlt className="text-[#00509E] text-2xl" />, // Shield Icon
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      <h2 className=" text-base md:text-2xl font-bold text-center mb-4">
        Why Book with RwandAir Holidays
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              {reason.icon}
            </div>
            <h3 className="font-bold mb-2 text-base">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBookWithUs;
