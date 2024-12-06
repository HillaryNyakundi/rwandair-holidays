import React from "react";
import Google from "../../assets/Google.png";
import App from "../../assets/App.png";
import Badge1 from "../../assets/badge 1.png";
import Badge2 from "../../assets/badge 2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const footerLinks: {
    [key: string]: (string | { icon: JSX.Element; text: string })[];
  } = {
    "Rwandair Holidays": [
      "Home",
      "Latest Offers",
      "Experience Rwanda",
      "Stopover Packages",
      "FAQs",
    ],
    Destinations: ["Africa", "Europe", "Asia", "Middle East"],
    "Holiday Types": [
      "Beach Holidays",
      "Honeymoon Packages",
      "Safari",
      "All-inclusive guided tours",
    ],
    Contact: [
      { icon: <FaPhoneAlt />, text: "+250 788 177 000" },
      { icon: <FaEnvelope />, text: "holidays@rwanda" },
    ],
  };

  return (
    <footer className="bg-[#00509E] text-white py-12">
      {/* Upper Section: Footer Links and Contact */}
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-bold font-redressed text-2xl mb-4">
              {section}
            </h4>
            <ul>
              {links.map(
                (
                  link: string | { icon: JSX.Element; text: string },
                  index: number
                ) => (
                  <li
                    key={index}
                    className="text-sm flex items-center mb-2 hover:text-blue-300"
                  >
                    {typeof link === "object" ? (
                      <>
                        <span className="mr-2 text-sm">{link.icon}</span>
                        <a href="#">{link.text}</a>
                      </>
                    ) : (
                      <a href="#">{link}</a>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-5"></div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8 flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <p className="text-sm md:text-base font-medium">
            Travel made simpler <br />
            Book and manage flights on the go!
          </p>
        </div>
        <div className="flex space-x-4">
          <img src={Badge1} alt="Badge 1" className="h-12 w-auto" />
          <img src={Badge2} alt="Badge 2" className="h-12 w-auto" />
        </div>
        <div className="flex space-x-4">
          <img src={Google} alt="Google Play Store" className="h-10 w-auto" />
          <img src={App} alt="App Store" className="h-10 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <h4 className="font-bold text-sm md:text-base">Follow us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
