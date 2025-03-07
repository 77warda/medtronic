import React from "react";
import bgImage from "../assets/med-images/heroImg.webp";
import hero from "../assets/med-images/hero-mobile.png";
export default function Hero() {
  return (
    <div>
      {/* <div
        className="bg-cover h-screen w-full relative mt-20 flex items-center justify-center h-[70vh] px-6 lg:px-48"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="lg:ml-auto lg:max-w-lg md:ml-auto md:max-w-l w-full">
          <div>
            <p className="text-white text-3xl lg:text-5xl py-2 leading-8 lg:leading-[5rem]">
              Live life with more Time in Range
              <sup className="text-xl">1</sup>
            </p>
            <p className="text-white text-xl mt-4 text-center lg:text-left">
              For people with Type 1 Diabetes
            </p>
            <div className="mt-12 flex lg:justify-start">
              <button className="px-12 py-4 bg-[#1010eb] mx-1.5 rounded-full flex justify-center items-center text-white hover:bg-[#0e0ec4] border-0 ">
                Request call back
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* mobile section  */}
      <div className="h-[70vh] md:h-screen lg:h-screen w-full relative flex lg:flex-row flex-col lg:items-center items-start justify-start lg:justify-center px-0 lg:px-48">
        <img
          src={bgImage} // Default image for larger screens
          alt="Devices"
          className="static lg:absolute -top-3 w-full h-[55vh] lg:h-[100vh] lg:block md:block hidden object-cover" // Hide on small screens, visible on lg and above
        />
        <img
          src={hero} // Image for mobile screens
          alt="Devices"
          className="md:hidden block w-full h-[45vh] md:h-[65vh] lg:h-[90vh] lg:hidden object-cover " // Hide on large screens, visible on small screens
        />

        <div className="px-5 z-40 lg:ml-auto lg:max-w-lg md:ml-auto md:max-w-lg w-full">
          <div>
            <p className="text-black lg:text-white text-3xl lg:text-5xl py-2 leading-8 lg:leading-[5rem]">
              Live life with more Time in Range
              <sup className="text-xl">1</sup>
            </p>
            <p className="text-black lg:text-white text-xl mt-4 lg:text-left">
              For people with Type 1 Diabetes
            </p>
            <div className="mt-12 flex lg:justify-start">
              <button className="px-12 py-4 bg-[#1010eb] mx-1.5 rounded-full flex justify-center items-center text-white hover:bg-[#0e0ec4] border-0 ">
                Request call back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
