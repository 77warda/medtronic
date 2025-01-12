import React from "react";
import bgImage from "../assets/med-images/heroImg.webp";
export default function Hero() {
  return (
    <div>
      <div>
        <div
          className="bg-cover h-screen w-full relative"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="flex items-center justify-start h-full lg:justify-end px-6 lg:px-48">
            <div>
              <h1 className="text-white text-3xl lg:text-5xl py-2">
                Live life with more <br /> Time in Range
              </h1>
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
        </div>
      </div>
    </div>
  );
}
