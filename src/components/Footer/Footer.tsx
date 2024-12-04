import React from "react";

const Footer: React.FC = () => {
  const footerLinks = {
    "Rwandair Holidays": [
      "Home",
      "Latest Offers",
      "Experience Rwanda",
      "Stopover Packages",
    ],
    Destinations: ["Africa", "Europe", "Asia", "Middle East", "Beach Holidays"],
    "Holiday Types": [
      "Honeymoon Packages",
      "Safari",
      "All-inclusive guided tours",
    ],
    Contact: ["+250 788 177 000", "holidays@rwandair.com"],
  };

  return (
    <footer className="bg-[#00509E] text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-bold mb-4">{section}</h4>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="mb-2 hover:text-blue-300">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
        <p>
          &copy; {new Date().getFullYear()} RwandAir Holidays. All Rights
          Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
