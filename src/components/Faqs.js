import React, { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const faqData = [
    {
      question: "Who is this insulin pump recommended for?",
      answer: (
        <>
          The MiniMed™ 780G system is approved for people with type 1 diabetes,
          age 7 and above. If you would like a stand-alone CGM and not an
          insulin pump, consider looking into{" "}
          <a href="/en-gb/SmartMDI" className="text-blue-600 hover:underline">
            Smart MDI System
          </a>
          .
        </>
      ),
    },
    {
      question: "Does the system communicate with my smartphone?",
      answer: (
        <>
          Yes. With the MiniMed™ 780G system you can easily track your glucose
          levels and view notifications and alerts on your smartphone. Up to 5
          care partners can be invited to download the CareLink™ Connect app and
          view your real-time glucose values on their phones. Available to
          download at no cost for most iOS and Android smartphones. To see if
          your smartphone is compatible, see this{" "}
          <a
            href="/en-gb/check-compatibility-app"
            className="text-blue-600 hover:underline"
          >
            reference chart
          </a>
          .
        </>
      ),
    },
    {
      question: "What’s so unique about the MiniMed™ 780G system?",
      answer: (
        <>
          The MiniMed™ 780G system automatically adjusts insulin delivery to
          your needs for an easier way to stabilize glucose levels{" "}
          <sup>1,2,3</sup>. It features an advanced level of automation for
          diabetes management, known as SmartGuard™ technology. If your glucose
          levels are trending high, it gives you more insulin. If they are
          trending low, it gives you less or no insulin at all. Now it can even
          correct high glucose levels in cases where carb counts aren’t exact.
        </>
      ),
    },
    {
      question: "How is this system different than using a pump by itself?",
      answer: `The MiniMed™ 780G system, automatically adjusts delivery of basal insulin based on Continuous Glucose Monitoring (CGM) values. This means that the pump gets glucose readings from the sensor automatically, and then delivers a variable rate of insulin, 24 hours a day based on your personal needs. This integrated system – meaning having a pump and a CGM that speak to one another – can help to stabilise your glucose levels and reduce both high and low glucose levels.`,
    },
    {
      question:
        "Do I still need to check my blood glucose with finger pricks or give myself injections?",
      answer: (
        <>
          When you use an insulin pump, you have a dramatic reduction in
          injections – by up to 90%.* The infusion set that attaches to your
          body contains a small, flexible plastic cannula that is inserted to be
          placed under the skin and changed every 7 days. A CGM glucose sensor
          is inserted every 7 days. Using the SmartGuard™ feature does not
          completely replace finger pricks but you will likely check your BG
          less frequently. Sensor readings are taken from your interstitial
          fluid (fluid surrounding the cells in your tissue) and not your blood,
          you still need to test using a BG meter. With Guardian™ 4 sensor and
          transmitter a blood glucose reading is needed when you first enter
          SmartGuard™ feature, otherwise no finger pricks are required. If
          glucose alerts and CGM readings do not match your symptoms, use a
          blood glucose meter to make diabetes treatment decisions. It is
          important to know that all blood glucose values entered & accepted are
          used for calibration. Refer to System User Guide - SmartGuard™
          feature. Some user interaction required.
          <br />
          <br />
          *Assumes four injections per day for 30 days and one infusion set
          change every two to three days.
        </>
      ),
    },
    {
      question: "Is this pump waterproof?",
      answer: `*At the time of manufacture and when the reservoir and tubing are properly inserted, your system is waterproof. Although waterproof, drops and bumps that occur over time can make it more vulnerable to damage from water: we recommend removing your pump before swimming or bathing. CGM readings may not be transmitted from the sensor to the pump while in water.`,
    },
    {
      question:
        "If I’m interested in getting started, what are the next steps?",
      answer: (
        <>
          <ol className="list-decimal list-outside px-6 space-y-4">
            <li className="text-lg">
              Get started by contacting us{" "}
              <a
                href="https://www.medtronic-diabetes.com/en-gb/contact"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.medtronic-diabetes.com/en-gb/contact
              </a>{" "}
              so we can have someone follow up with you. We will help answer any
              questions, discuss out-of-pocket costs, and if you plan to
              self-fund sensors.
            </li>
            <li className="text-lg">
              Once the system is purchased and shipped, we will work with you to
              schedule your training. We have a robust technical support team
              who will help conduct an in-person training. (With the use of CGM
              and SmartGuard™ tech. You may need a few training sessions.)
            </li>
            <li className="text-lg">
              Once you’re trained, we will continue to support you throughout
              your journey with us. We will provide ongoing educational
              resources and also offer a dedicated Technical Support team who
              are available 24/7.
            </li>
          </ol>
          <br />
          If you are a current customer, contact us
          <a className="text-blue-600 hover:underline">
            https://www.medtronic-diabetes.com/en-gb/contact-medtronic-diabetes/product
          </a>
          - to discuss your options for upgrading.
        </>
      ),
    },
    {
      question:
        "I’m a healthcare professional. Where can I go for more information?",
      answer: (
        <>
          If you are a healthcare professional we encourage you to visit
          <a
            href="https://hcp.medtronic-diabetes.com/en-GB"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://hcp.medtronic-diabetes.com/en-GB
          </a>
        </>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-8 px-5 lg:px-28">
      <h2 className="my-5 text-3xl lg:text-4xl font-light leading-[4.5rem]">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="py-2 lg:py-7 border-b border-gray-200 group"
        >
          <div className="py-1 lg:py-2">
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="p-0.5 lg:p-1.5 ml-3 text-lg md:text-2xl lg:text-2xl font-light text-black">
                {faq.question}
              </span>
              <div className="pr-5 mt-0.5 ml-2 text-gray-800 text-lg group-hover:text-gray-800">
                {openIndex === index ? (
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
          </div>
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden`}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
            }}
            ref={(el) => (contentRefs.current[index] = el)}
          >
            <div className="text-lg font-normal py-7 mx-4 text-gray-700">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faqs;
