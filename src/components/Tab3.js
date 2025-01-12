import React from "react";
import glucometer from "../assets/med-images/blood-glucoze-meter.png";
export default function Tab3() {
  return (
    <div className="px-4 lg:px-20">
      <div className="grid grid-cols-12 px-5">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h1 className="text-[2.6rem] font-light">Blood glucose meter</h1>
          <div className="pe-[15rem] mt-6">
            <p>
              Test results from the Accu-Chek® Guide Link blood glucose meter
              are sent wirelessly to the pump.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <img src={glucometer} alt="gluco" className="mx-auto w-60 h-auto " />
        </div>
      </div>
    </div>
  );
}
