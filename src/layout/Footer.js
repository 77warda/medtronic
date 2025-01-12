import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

const navigation = {
  "Get Help": [
    { name: "eShop", href: "#" },
    { name: "WeCare", href: "#" },
    { name: "Health Care Professional", href: "#" },
  ],

  Policies: [
    { name: "Terms of Sale", href: "#" },
    { name: "Privacy Statement", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Cookie preferences", href: "#" },
  ],
  "Social Media": [
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "YouTube", href: "#", icon: FaYoutube },
  ],
};

function Footer() {
  return (
    <footer className="max-w-[1270px] mx-auto relative">
      <div className="py-5 px-1 lg:px-10 md:px-10">
        <div className="flex items-center justify-between py-7">
          <div>
            <h3 className="font-semibold text-2xl">Medtronic</h3>
          </div>
          <div className="flex items-center justify-between">
            {navigation["Get Help"].map((item, index) => (
              <p key={index} className="flex items-center">
                <a
                  href={item.href}
                  className="text-lg font-semibold text-[#1010eb] hover:opacity-110"
                >
                  {item.name}
                </a>
                {index < navigation["Get Help"].length - 1 && (
                  <span className="text-[#1010eb] mx-5">
                    <div className="h-3 w-[1px] bg-[#1010eb]"></div>
                  </span>
                )}
              </p>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {navigation["Social Media"].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-2xl ${
                  item.name === "Instagram"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                    : ""
                }`}
                style={{
                  color:
                    item.name === "Facebook"
                      ? "#1877F2"
                      : item.name === "YouTube"
                      ? "#FF0000"
                      : "inherit",
                }}
                aria-label={item.name}
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300">
          <p className="my-3 text-gray-500 text-base text-center">
            For 24/7 diabetes technical product support please contact 01923
            205167
          </p>
          <div className="my-4 mx-auto flex items-center justify-center">
            {navigation["Policies"].map((item, index) => (
              <p key={index} className="flex items-center">
                <a
                  href={item.href}
                  className="text-center text-sm font-semibold text-gray-800 hover:opacity-110"
                >
                  {item.name}
                </a>
                {index < navigation["Policies"].length - 1 && (
                  <span className="text-gray-800 mx-5">
                    <div className="h-3 w-[1px] bg-black"></div>
                  </span>
                )}
              </p>
            ))}
          </div>
          <p className="my-3 text-gray-500 text-sm text-center">
            See the device manuals for detailed information regarding the
            instructions for use, indications, contraindications, warnings,
            precautions, and potential adverse events. For further information,
            contact your local Medtronic representative. © 2024 Medtronic. All
            rights reserved Medtronic. Medtronic logo and Further, Together are
            trademarks of Medtronic.
          </p>
          <p className="font-semibold my-3 text-gray-800 text-sm text-center">
            Building 9, Croxley Park, Watford, Hertfordshire, WD18 8WW.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-2 right-5 text-[#1010eb] px-4 py-2 flex items-center justify-center"
        aria-label="Back to Top"
      >
        <span className="text-sm font-semibold">Back to Top </span>
        <FaArrowUpLong className="border-2 border-[#1010eb] ml-1 text-[#1010eb] hover:bg-[#1010eb] hover:text-white rounded-full h-9 w-9 p-2 flex-items-center justify-center" />
      </button>
    </footer>
  );
}

export default Footer;
