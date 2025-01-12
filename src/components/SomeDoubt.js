import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
export default function SomeDoubt() {
  return (
    <div className="px-4 lg:px-20 bg-[#f5f5f5] py-8 h-60 mt-20">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
          <h1 className="text-2xl text-blue-navy">Still have some doubts?</h1>
          <div className="flex items-start gap-4 mt-4">
            <CiCircleQuestion className="w-12 h-12 " />
            <div>
              <h1 className="text-lg text-gray-700">
                You can find our most frequently asked questions here
              </h1>
              <a
                href="/help-center"
                className="flex items-center text-[#1010eb] hover:text-[#0d0dbc] text-lg font-medium"
              >
                Go to the Help Centre
                <FaLongArrowAltRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
          <div className="flex items-start gap-4 mt-12">
            <FiPhone className="w-10 h-10 " />
            <div>
              <h1 className="text-lg text-gray-700">You can contact us here</h1>
              <a
                href="/contact-page"
                className="flex items-center text-[#1010eb] hover:text-[#0d0dbc] text-lg font-medium"
              >
                Go to the Contact page
                <FaLongArrowAltRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
