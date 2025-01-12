import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

export default function TabsBasicExample() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className=" mb-3 relative">
      <TETabs className="px-4 lg:px-20 relative z-10">
        {/* Static Horizontal Line */}
        <div className="absolute bottom-[-34px] left-0 right-0 h-[4px] bg-gray-300"></div>

        {[
          { id: "tab1", label: "MiniMed™ Mobile App" },
          { id: "tab2", label: "CareLink™ Connect App" },
          { id: "tab3", label: "Blood Glucose meter" },
        ].map((tab) => (
          <TETabsItem
            key={tab.id}
            className={` mx-4 group relative`}
            onClick={() => handleBasicClick(tab.id)}
            active={basicActive === tab.id}
          >
            {/* Tab Label */}
            <span
              className={`relative z-20 text-sm cursor-pointer ${
                basicActive === tab.id ? "text-[#1010eb]" : "text-gray-700"
              }`}
            >
              {tab.label}
            </span>

            {/* Hover/Active Underline */}
            <span
              className={`absolute left-0 right-0 bottom-[-34px] h-[4px] bg-[#1010eb] transition-transform duration-500 ease-in-out origin-left ${
                basicActive === tab.id
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </TETabsItem>
        ))}
      </TETabs>

      <TETabsContent className="mt-20">
        <TETabsPane show={basicActive === "tab1"}>
          <Tab1 />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>
          <Tab2 />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>
          <Tab3 />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
