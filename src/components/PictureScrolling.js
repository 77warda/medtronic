import React from "react";
import scrollingPicture from "../assets/med-images/feel_more.jpg";
import S1 from "../assets/med-images/s1.webp";
import S2 from "../assets/med-images/s2.webp";
import S3 from "../assets/med-images/s3.webp";

function PictureScrolling() {
  return (
    <>
      <section className="py-8 overflow-x-hidden">
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center">
          <div className="px-4 lg:px-28 h-[80vh] overflow-y-auto lg:col-span-6 md:col-span-6 col-span-12">
            <h2 className="text-5xl font-normal text-gray-900 mt-5">
              The MiniMed™ 780G system components
            </h2>
            <div className="my-20">
              <div>
                <img src={S1} alt="img" className="w-72 h-auto  mx-auto" />
              </div>
              <div className=" flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <p className="ml-1 text-dark font-light text-lg">
                  MiniMed™ 780G system components
                </p>
              </div>
              <h2 className="text-5xl font-light text-gray-900 mt-5">
                MiniMed™ 780G insulin pump
              </h2>
              <p className="text-gray-700 mt-7 text-lg font-light">
                Receives real-time glucose data from the sensor to calculate
                insulin adjustments and corrections. Delivers insulin
                automatically using SmartGuard™ technology, giving you more
                insulin if you’re trending high and less if you’re trending low.
              </p>
            </div>
            <div className="my-20">
              <div>
                <img src={S2} alt="img" className="w-72 h-auto mx-auto my-10" />
              </div>
              <div className=" flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <p className="ml-1 text-dark font-light text-lg">
                  MiniMed™ 780G system components
                </p>
              </div>
              <h2 className="text-5xl font-light text-gray-900 mt-5">
                Simplera Sync™ sensor
              </h2>
              <p className="text-gray-700 mt-7 text-lg font-light">
                Measures glucose levels every 5 minutes, sending information to
                the pump. It takes less than 10 seconds to insert the all-in-one
                sensor and does not require finger pricks.
              </p>
            </div>
            <div className="my-20">
              <div>
                <img src={S3} alt="img" className="w-80 h-auto mx-auto my-10" />
              </div>
              <div className=" flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <p className="ml-1 text-dark font-light text-lg">
                  MiniMed™ 780G system components
                </p>
              </div>
              <h2 className="text-5xl font-light text-gray-900 mt-5">
                Medtronic Extended Infusion Set
              </h2>
              <p className="text-gray-700 mt-7 text-lg font-light">
                Allows insulin to flow from the pump to your body with 96% fewer
                injections and only one set change needed every 7 days. Makes
                insertion simple and painless, and even reduces plastic waste.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="relative">
              {/* Images */}
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={scrollingPicture} // Replace this with the left-side image
                  alt="Devices"
                  className="ml-auto w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PictureScrolling;
