import React from "react";
import dreaMed from "../assets/med-images/dream.png";
import roche from "../assets/med-images/Roche.png";
import medronic from "../assets/med-images/Medronic.png";

export default function DreaMed() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={dreaMed} alt="gluco" className="w-52 h-auto mx-8 " />
        <img src={roche} alt="gluco" className="w-36 h-auto  mx-8" />
        <img src={medronic} alt="gluco" className="w-36 h-auto mx-8" />
      </div>
      <div className="mx-auto max-w-6xl py-8 px-4 lg:px-28 text-center">
        <p>
          Information contained herein is not medical advice and should not be
          used as an alternative to speaking with your doctor. Discuss
          indications, contraindications, warnings, precautions, potential
          adverse events and any further information with your health care
          professional. Please consult your healthcare professional for a full
          list of benefits, indications, precautions, clinical results, and
          other important medical information that pertains to the therapy or
          products discussed. See the device manuals for detailed information
          regarding the instructions for use, indications, contraindications,
          warnings, precautions, and potential adverse events. For further
          information, contact your local Medtronic representative.
        </p>
        <br />
        <p>
          UK-BGM-2400005© Medtronic 2024. All rights reserved. Medtronic,
          Medtronic logo, and Engineering the extraordinary are trademarks of
          Medtronic. ™* Third-party brands are trademarks of their respective
          owners. All other brands are trademarks of a Medtronic company.
          DreaMed Diabetes is a trademark of DreaMed Diabetes, Ltd. The MiniMed™
          780G system algorithm includes technology developed by DreaMed
          Diabetes.
        </p>
      </div>
    </div>
  );
}
