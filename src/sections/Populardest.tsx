import React from "react";
import { ArrowUpRight } from "lucide-react";
import RwandaImage from "../assets/Fiji 2.png";
import GermanyImage from "../assets/Jamaica 2.png";

const PopularDestinationsSection: React.FC = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto py-12 px-4 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image 1 with heading and arrow */}
        <div className="relative group">
          <img
            src={RwandaImage}
            alt="Rwanda"
            className="w-full h-64 object-cover rounded-lg"
          />
          {/* Heading */}
          <h2 className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded">
            Explore Rwanda
          </h2>
          {/* Arrow */}
          <ArrowUpRight
            className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full transition-transform transform group-hover:-translate-y-1 group-hover:scale-110"
            size={32}
          />
        </div>

        {/* Image 2 with heading and arrow */}
        <div className="relative group">
          <img
            src={GermanyImage}
            alt="Germany"
            className="w-full h-64 object-cover rounded-lg"
          />
          {/* Heading */}
          <h2 className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded">
            Discover Germany
          </h2>
          {/* Arrow */}
          <ArrowUpRight
            className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full transition-transform transform group-hover:-translate-y-1 group-hover:scale-110"
            size={32}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsSection;
