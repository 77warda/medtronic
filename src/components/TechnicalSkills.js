import React, { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const specifications = [
  {
    title: "Waterproof capabilities",
    description:
      "The pump is waterproof at the time of manufacture and when the reservoir and tubing are properly inserted. It is protected against the effects of being underwater to a depth of up to 2.4 meters (8 feet) for up to 30 minutes.",
  },
  {
    title: "Environmental Conditions",
    description:
      "The MiniMed™ 780G insulin pump system is designed to withstand most conditions encountered in your daily life. Pump storage temperature range is from -4ºF (-20ºC) to 122ºF (50ºC). Air pressure range is from 700 hPa to 1060 hPa (10.2 psi to 15.4 psi).",
  },
  {
    title: "Altitude Range",
    description: (
      <ul className="list-disc list-outside px-5">
        <li>
          Pump operating range is from 10.2 psiA (70.33 kPa) to 15.4 psiA
          (106.18 kPa)
        </li>
        <li>
          Storage range is from 7.2 psiA (49.64 kPa) to 15.4 psiA (106.18 kPa)
        </li>
      </ul>
    ),
  },
  {
    title: "Insulin type",
    description:
      "Currently, the MiniMed™ 780G pump with 6.23 Software is compatible with both rapid acting insulins (NovoRapid and Humalog) and ultra rapid insulins (Fiasp and Lyumjev).",
  },

  {
    title: "Bolus delivery",
    description: (
      <div>
        <p>Bolus Speeds </p>
        <ul className="py-3 list-disc list-outside px-5">
          <li className="py-3">Standard : 1.5 units/minute</li>
          <li className="py-3">Quick : 15 units/minute</li>
        </ul>
        <p> Programming Increments </p>
        <ul className="py-3 list-disc list-outside px-5">
          <li className="py-3">0.025 units</li>
          <li className="py-3">0.05 units</li>
          <li className="py-3">0.1 units</li>
          <li className="py-3">0.25 units</li>
        </ul>
        <p>Max bolus 25 units</p>
      </div>
    ),
  },
  {
    title: "Basal Rate Delivery",
    description: "0 to 35 units per hour.",
  },
  {
    title: "Screen",
    description: (
      <div>
        <ul className="list-disc list-outside px-5">
          <li className="py-3">Colour screen with auto-brightness</li>
          <li className="py-3">
            Backlight time out 15 seconds (default), 30 seconds, one minute,
            three minutes
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Battery & Power",
    description:
      "The pump requires one new AA (1.5V) battery. For best results, use a new AA lithium (FR6) battery. The pump also accepts an AA alkaline (LR6) or a fully charged AA NiMH (HR6) nickel-metal hydride rechargeable battery.",
  },
  {
    title: "Pump memory",
    description: "At any time you can review 35 days of pump history.",
  },
  {
    title: "Size",
    description: (
      <div>
        <p>
          {" "}
          Size : PRIME : 2.11 W x 3.81 L x 0.98 H inches (5.4 cm × 9.7 cm × 2.5
          cm)
        </p>
        <p>Weight: PRIME : &lt;106 grams (without consumables and battery)</p>
      </div>
    ),
  },
  {
    title: "Warranty",
    description: "Insulin pump : 4 years",
  },
];

const compatibelProducts = [
  {
    title: "Reservoir",
    description:
      "Medtronic Extended Reservoir MMT-342, 10PK. 3.0 ml (300-units )",
  },
  {
    title: "Altitude Range",
    description: (
      <div>
        Medtronic Diabetes offers a wide range of infusion sets so that you can
        choose the right one for your comfort and safety.{" "}
        <a className="text-blue-600 hover:underline">
          https://www.medtronic-diabetes.com/en-gb/insulin-pump-therapy/insulin-delivery/infusion-sets
        </a>
      </div>
    ),
  },
  {
    title: "Guardian™ Link 4",
    description:
      "Used with your pump for Continuous Glucose Monitoring (CGM). A device that connects to a glucose sensor. The transmitter collects data measured by the sensor and wirelessly sends this data to monitoring devices.",
  },
  {
    title: "Simplera Sync™ sensor",
    description:
      "Used with your pump for Continuous Glucose Monitoring (CGM). Does not require finger pricks for calibration or to make diabetes treatment decisions.  It measures glucose levels every 5 minutes, that’s 288 times a day, and provides you and your pump with up to date information on where your glucose levels are, and where they are heading. This data can also be used by the pump to alert you about upcoming high or low.",
  },

  {
    title: "Accessories",
    description: (
      <div>
        There are many ways to wear your insulin pump. You can attach your pump
        to your waistband or belt, protect it in your pocket, or even clip it
        under clothing. See our collection of accessories here.
        <a className="text-blue-600 hover:underline">
          https://www.medtronic-diabetes.com/en-gb/minimed-insulin-pump-accessories
        </a>
      </div>
    ),
  },
  {
    title: "Accu-Chek® Guide Link Blood Glucose Meter",
    description: (
      <div>
        The MiniMed™ 780G system comes with a compatible meter. It wirelessly
        connects to your pump, allowing you to send blood glucose meter readings
        to your pump<sup>®</sup>.
      </div>
    ),
  },
];

const TechnicalSkills = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setOpen(!open);
  };
  return (
    <>
      <section className="py-8 px-4 lg:px-20">
        <div className="py-7 border-b border-gray-200 group">
          <div className="py-2 ">
            {/* Accordion Header */}
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none"
              onClick={toggleAccordion}
            >
              <h2 className="my-5 text-4xl font-light leading-[4.5rem]">
                Technical Skills
              </h2>
              <div className="pr-5 mt-0.5 ml-2 text-gray-800 text-lg group-hover:text-gray-800">
                {open ? (
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden`}
              style={{
                maxHeight: open
                  ? `${contentRef.current?.scrollHeight}px`
                  : "0px",
              }}
              ref={contentRef}
            >
              <div className="p-2">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-10 py-5 px-3 mb-6 ${
                      index % 2 !== 0 ? "bg-gray-50 " : ""
                    }`}
                  >
                    <h2 className="pr-5 col-span-2 text-lg font-light text-gray-800 mb-2">
                      {spec.title}
                    </h2>
                    <p className="col-span-8 text-gray-600">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="bg-gray-50 w-full text-center p-10 ">
                Compatible Products
              </h2>
              <div className="p-2">
                {compatibelProducts.map((spec, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-10 py-5 px-3 mb-6 ${
                      index % 2 !== 0 ? "bg-gray-50 " : ""
                    }`}
                  >
                    <h2 className="pr-5 col-span-2 text-lg font-light text-gray-800 mb-2">
                      {spec.title}
                    </h2>
                    <p className="col-span-8 text-gray-600">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSkills;
