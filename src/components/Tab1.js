import React from "react";
import playstore from "../assets/med-images/playstore.png";
import apple from "../assets/med-images/white apple.png";
import glucometer from "../assets/med-images/blood-glucoze-meter.png";
export default function Tab1() {
  return (
    <div className="px-4 lg:px-28">
      <div className="grid grid-cols-12 px-5">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h1 className="text-[2.6rem] font-light">MiniMed™ Mobile app</h1>
          <div className="mt-6">
            <p>
              Your glucose levels and pump information can be viewed on your
              smartphone, allowing you to easily track your values and get
              notified on your phone if you’re going high or low.
            </p>
            <br />
            <p>Available to download for most iOS and Android smartphones.</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mt-10">
              Download the App now:
            </h1>
          </div>
          <div className="flex items-center my-6">
            <button className="px-5 lg:px-10 py-2 bg-black mx-1.5 rounded-full flex justify-center items-center text-white border-0 ">
              <div className="flex items-center">
                <img src={playstore} alt="Button Icon" className="w-6 h-6" />
                <div className="ml-0.5 lg:ml-2">
                  <h1 className="text-left text-[8px]">Get it on</h1>
                  <h1 className="text-left text-sm">Apple Store</h1>
                  {/* <h1 className="text-left text-sm ps-4">Apple Store</h1> */}
                </div>
              </div>
            </button>
            <button className="px-5 lg:px-10 py-2 bg-black mx-1.5 rounded-full flex justify-center items-center text-white border-0 ">
              <div className="flex items-center">
                <img src={apple} alt="Button Icon" className="w-auto h-6" />
                <div className="ml-0.5 lg:ml-2">
                  <h1 className="text-left text-[8px]">Download on the</h1>
                  <h1 className="text-left text-sm">Apple Store</h1>
                  {/* <h1 className="text-left text-sm ps-4">Apple Store</h1> */}
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <img src={glucometer} alt="gluco" className="mx-auto w-60 h-auto " />
        </div>
      </div>
    </div>
  );
}
