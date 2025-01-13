import React from "react";
import graph from "../assets/med-images/graph.png";
import { FaMinus } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";

const Graph = () => {
  return (
    <>
      <div className="my-20 py-5 ">
        <img src={graph} alt="Graph" className="w-full" />
        <div className="px-5 lg:px-28">
          <div className="text-left lg:my-20 md:my-20 my-10 flex lg:flex-row flex-col items-center justify-between">
            <div className="flex items-start lg:items-center gap-10 lg:flex-row flex-col">
              <div className="flex items-center ">
                <FaMinus />
                <span className="ml-2 font-light ">Glucose Levels</span>
              </div>
              <div className="flex items-center ">
                <RiBarChartFill className="text-lime-400" />
                <span className="ml-2 font-light ">Automatic Adjustments</span>
              </div>
              <div className="flex items-center ">
                <RiBarChartFill className="text-[#1010eb]" />
                <span className="ml-2 font-light ">Auto Corrections</span>
              </div>
              <div className="flex items-center ">
                <RiBarChartFill className="text-cyan-300" />
                <span className="ml-2 font-light ">Meal Detection</span>
              </div>
            </div>
            <div>
              <p className="font-light lg:mt-0 mt-5">
                For illustrative purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
