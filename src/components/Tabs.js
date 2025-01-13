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
  const [hoveredTab, setHoveredTab] = useState(null); // Track the currently hovered tab

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const handleMouseEnter = (id) => {
    setHoveredTab(id);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className="py-4 mt-20 mb-36 mb-3 relative ">
      <TETabs className="px-4 lg:px-28 relative z-10 flex-nowrap w-full overflow-x-auto py-7 overflow-y-hidden">
        {/* Static Horizontal Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gray-300"></div>

        {[
          { id: "tab1", label: "MiniMed™ Mobile App" },
          { id: "tab2", label: "CareLink™ Connect App" },
          { id: "tab3", label: "Blood Glucose meter" },
        ].map((tab) => (
          <TETabsItem
            key={tab.id}
            className="w-52 mx-4 group relative"
            onClick={() => handleBasicClick(tab.id)}
            onMouseEnter={() => handleMouseEnter(tab.id)} // Track hover
            onMouseLeave={handleMouseLeave} // Reset hover
            active={basicActive === tab.id}
          >
            {/* Tab Label */}
            <span className="text-[#1010eb] relative z-20 text-sm cursor-pointer ">
              {tab.label}
            </span>

            {/* Hover/Active Underline */}
            <span
              className={`absolute left-0 right-5 bottom-[-28px] h-[4px] bg-[#1010eb] transition-transform duration-500 ease-in-out origin-left ${
                hoveredTab === tab.id
                  ? "scale-x-100"
                  : hoveredTab
                  ? "scale-x-0"
                  : basicActive === tab.id
                  ? "scale-x-100"
                  : "scale-x-0"
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
