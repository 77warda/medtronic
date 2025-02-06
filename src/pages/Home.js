import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import img from "../assets/La_Dolce.webp";

// import fun from "../assets/Fun&Festire.webp";
import skyblue1 from "../assets/med-images/2.webp";
import skyblue2 from "../assets/med-images/3.webp";
import mobiles from "../assets/med-images/4.webp";
import liveLife1 from "../assets/med-images/n1.webp";
import liveLife2 from "../assets/med-images/n2.webp";
import liveLife3 from "../assets/med-images/feel_more.jpg";
import playstore from "../assets/med-images/playstore.png";
import apple from "../assets/med-images/Apple-Logosu.png";
import first from "../assets/med-images/1.webp";
import { IoCheckmarkOutline } from "react-icons/io5";
import Faqs from "../components/Faqs";
import TechnicalSkills from "../components/TechnicalSkills";
import References from "../components/References";
import Tabs from "../components/Tabs";
import DreaMed from "../components/DreaMed";
import SomeDoubt from "../components/SomeDoubt";
import Hero from "../components/Hero";
import Graph from "../components/Graph";
import PictureScrolling from "../components/PictureScrolling";

const Home = () => {
  return (
    <>
      <Header />
      {/* hero section  */}
      <Hero />
      {/* time in range  */}
      <section className="bg-white flex flex-col items-center py-8 px-4 lg:px-28">
        <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Section */}
          <div className="lg:col-span-7 md:col-span-7 col-span-12">
            <div className="relative">
              {/* Images */}
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={first} // Replace this with the left-side image
                  alt="Devices"
                  className="w-[80%] h-auto"
                />
              </div>
            </div>
          </div>
          {/* Right Text Section */}
          <div className="lg:col-span-5 md:col-span-5 col-span-12">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-red-600"></div>
              <p className="ml-1 text-dark font-light text-lg">
                MiniMed™ 780G system with Simplera Sync™ sensor
              </p>
            </div>
            <h2 className="text-5xl font-light text-gray-900 mt-5">
              More Time in Range<sup className="text-sm align-super">1,®</sup>,
              day and night.
            </h2>
            <p className="text-gray-700 mt-7 text-2xl font-light">
              The MiniMed™ 780G system automatically<sup>®</sup> adjusts insulin
              delivery and corrects glucose levels every 5 minutes 24/7.
            </p>
            <p className="text-gray-700 mt-10 text-2xl font-light">
              Now with Simplera Sync™ sensor—an all-in-one, easy to apply
              sensor, requiring no finger pricks.<sup>®</sup>
            </p>
          </div>
        </div>
      </section>
      {/* Advance insulin pump system  */}
      <section className="max-w-6xl py-8 px-4 lg:px-28">
        <div className="">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-red-600"></div>
            <p className="ml-1 text-dark font-normal text-lg">
              SmartGuard™ technology
            </p>
          </div>
          <p className="text-4xl font-normal text-gray-900 mt-5 leading-[3.5rem]">
            Our most advanced insulin pump system with SmartGuard{" "}
            <sup className="text-sm align-super font-bold">TM</sup> technology
          </p>
          <p className="max-w-4xl text-gray-700 mt-7 text-xl font-normal">
            SmartGuard <sup>TM</sup> technology continuously anticipates your
            insulin needs, adjusts insulin delivery, and corrects highs
            automatically,<sup>®</sup> while helping to protect you from lows.
            <sup>1</sup>
            And with the Meal Detection feature, the system can detect if you’ve
            missed a meal dose and give you more insulin when you need it to
            help reduce post-meal highs.
          </p>
        </div>
      </section>
      {/* Graph section  */}
      <Graph />
      {/* picture scrolling section  */}
      <PictureScrolling />
      {/* Minimed Action (dark blue section ) */}
      <section className="h-[80vh] flex items-center justify-center bg-[#1010eb]">
        <div className="mx-auto text-left md:text-center lg:text-center py-8 px-4 lg:px-16 text-white">
          <h3 className="my-5 text-5xl md:text-6xl lg:text-6xl font-light leading-[3.5rem] md:leading-[4.5rem] lg:leading-[4.5rem]">
            {" "}
            Want to see the MiniMed™ 780G in action?
          </h3>
          <p className="my-10 lg:text-3xl md:text-3xl text-xl  font-light ">
            {" "}
            Learn how the MiniMed™ 780G can fit into your life everyday.
          </p>
          <button className="mt-20 border-2 border-white mx-auto px-10 py-3 bg-[#1010eb] rounded-full flex justify-center items-center text-white hover:bg-[#0e0ec4] ">
            Join a Presentation
          </button>
        </div>
      </section>
      {/* Live Life section  */}
      <section className="bg-[#f5f5f5] flex flex-col items-center pb-28 pt-10 px-4 lg:px-16">
        <h2 className="my-16 text-5xl text-dark font-light">
          Live life with more Time in Range <sup className="text-xl">1,®</sup>
        </h2>
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Section */}
          <div className="lg:col-span-4 md:col-span-4 col-span-12">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="opacity-1 transform transition duration-400 ease-in-out transform hover:scale-125 transition-all duration-1000 ease-in-out">
                  <img
                    src={liveLife1}
                    alt="titleImage"
                    className="w-full h-[70vh] object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mt-5">
                Sleep better at night knowing the system helps prevent highs and
                lows <sup className="text-lg font-light">1</sup>
              </h2>
              <p className="mt-7 text-dark font-light text-xl">
                Users spend an average of 83% Time in Range during the night{" "}
                <sup>3,4</sup>
              </p>
            </div>
          </div>
          {/* second column  */}
          <div className="lg:col-span-4 md:col-span-4 col-span-12">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="opacity-1 transform transition duration-400 ease-in-out transform hover:scale-125 transition-all duration-1000 ease-in-out">
                  <img
                    src={liveLife2}
                    alt="titleImage"
                    className="w-full h-[70vh] object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mt-5">
                Sleep better at night knowing the system helps prevent highs and
                lows <sup className="text-lg font-light">1</sup>
              </h2>
              <p className="mt-7 text-dark font-light text-xl">
                Users spend an average of 83% Time in Range during the night{" "}
                <sup>3,4</sup>
              </p>
            </div>
          </div>
          {/* third column  */}
          <div className="lg:col-span-4 md:col-span-4 col-span-12">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="opacity-1 transform transition duration-400 ease-in-out transform hover:scale-125 transition-all duration-1000 ease-in-out">
                  <img
                    src={liveLife3}
                    alt="titleImage"
                    className="w-full h-[70vh] object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mt-5">
                Sleep better at night knowing the system helps prevent highs and
                lows <sup className="text-lg font-light">1</sup>
              </h2>
              <p className="mt-7 text-dark font-light text-xl">
                Users spend an average of 83% Time in Range during the night{" "}
                <sup>3,4</sup>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Minimed Quotes (sky blue section ) */}
      <section className="bg-[#e9faff] py-32 flex flex-col items-center py-8 px-4 lg:px-28">
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Section */}
          <div className="lg:w-3/4 md:w-3/4 w-100 lg:col-span-6 md:col-span-6 col-span-12">
            <div className="relative z-10 flex justify-start items-center">
              <div className="rounded-full p-2 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-500">
                <img
                  src={skyblue1} // Replace this with your image source
                  alt="Devices"
                  className="w-full h-auto rounded-full bg-white"
                />
              </div>
            </div>
          </div>
          {/* Right Text Section */}
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="md:w-10/12 lg:w-10/12 w-100 relative px-6 py-10">
              <div className="absolute top-2 left-4 text-5xl md:text-7xl lg:text-7xl font-semibold text-[#1010eb]">
                <i>"</i>
              </div>
              <div className="absolute bottom-2 right-4 text-5xl md:text-7xl lg:text-7xl font-semibold text-[#1010eb]">
                <i>"</i>
              </div>

              <div className="mt-10">
                <p className="text-2xl md:text-4xl lg:text-4xl font-normal text-[#1010eb] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[3.5rem]">
                  I can just eat, maybe make a wrong calculation but it will fix
                  it by itself.
                </p>
                <p className=" mt-5 text-2xl text-dark text-xl">
                  MiniMed™ 780G user
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* different tab view sections  */}
      <Tabs />
      {/* Minimed Quotes (sky blue section ) */}
      <section className="bg-[#e9faff] py-32 flex flex-col items-center py-8 px-4 lg:px-28">
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Picture Section */}
          <div className="ml-auto lg:w-3/4 md:w-3/4 w-100 lg:col-span-6 md:col-span-6 col-span-12 order-first lg:order-last">
            <div className="relative z-10 flex justify-start items-center">
              <div className="rounded-full p-2 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-500">
                <img
                  src={skyblue2} // Replace this with your image source
                  alt="Devices"
                  className="w-full h-auto rounded-full bg-white"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-6 md:col-span-6 col-span-12 order-last lg:order-first">
            <div className="md:w-11/12 lg:w-11/12 w-100 relative px-6 py-10">
              <div className="absolute top-2 left-3 text-5xl md:text-7xl lg:text-7xl font-semibold text-[#1010eb]">
                <i>"</i>
              </div>
              <div className="absolute bottom-2 right-16 text-5xl md:text-7xl lg:text-7xl font-semibold text-[#1010eb]">
                <i>"</i>
              </div>

              <div className="mt-10">
                <p className="text-2xl md:text-4xl lg:text-4xl font-normal text-[#1010eb] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[3.5rem]">
                  I finally sleep through the night! No more waking up because
                  of sugar swings.
                </p>
                <p className="mt-5 text-2xl text-dark text-xl">
                  MiniMed™ 780G user
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* innovation section  */}
      <section className="bg-white py-32 bg-white flex flex-col items-center py-8 px-4 lg:px-28">
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Image Section */}
          <div className="w-full lg:col-span-6 md:col-span-6 col-span-12">
            <div className="relative ">
              <img
                src={mobiles} // Replace this with your image source
                alt="Devices"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
          {/* Right Text Section */}
          <div className="w-full lg:w-5/6 lg:col-span-6 md:col-span-6 col-span-12">
            <div class="bg-white py-12 px-6">
              <h1 class="text-[2.5rem] font-light text-dark mb-4 leading-[3.5rem]">
                Transforming lives through innovation
              </h1>

              <p class="font-light text-2xl text-dark mb-8">
                We are here 24/7 to support you manage your diabetes with more
                ease and confidence.
              </p>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex justify-center items-center rounded-full border-2 border-[#1010eb] text-[#1010eb]">
                    <IoCheckmarkOutline className="text-2xl" />
                  </div>
                  <div class="text-left">
                    <p class="text-2xl font-light text-dark">
                      StartRight<sup>SM</sup> programme
                    </p>
                    <p class="text-dark font-light text-lg">
                      What you need to know about your new device.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex justify-center items-center rounded-full border-2 border-[#1010eb] text-[#1010eb]">
                    <IoCheckmarkOutline className="text-2xl" />
                  </div>
                  <div class="text-left">
                    <p class="text-2xl font-light text-dark">
                      Support & training
                    </p>
                    <p class="text-lg font-light text-dark">
                      The best trainers to master your device and a 24/7
                      helpline.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 flex-shrink-0 flex justify-center items-center rounded-full border-2 border-[#1010eb] text-[#1010eb]">
                    <IoCheckmarkOutline className="text-2xl" />
                  </div>
                  <div class="text-left">
                    <p class="text-2xl font-light text-dark">WeCare app</p>
                    <p class="text-lg font-light text-dark">
                      Educational content, personalised data and instant help.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <button class="w-2/3 py-3 text-[#1010eb] border-2 border-[#1010eb] rounded-full font-semibold hover:bg-[#1010eb] hover:text-white transition duration-300">
                  Discover more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* medtroonic apps  */}
      <section className="h-[55vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-6xl mx-auto text-center py-8 px-4 lg:px-16 text-dark">
          <h3 className="my-5 text-3xl md:text-5xl lg:text-5xl font-light lg:leading-[4.5rem] md:leading-[4.5rem] leading-[2.8rem]">
            {" "}
            Is your mobile phone compatible with Medtronic apps?
          </h3>
          <div className="gap-10 flex items-center justify-center">
            <img
              src={playstore} // Replace this with your image source
              alt="Devices"
              className="w-20 h-auto"
            />
            <img
              src={apple} // Replace this with your image source
              alt="Devices"
              className="w-32 h-auto"
            />
          </div>
          <button className="font-medium w-96 text-[#1010eb] text-xl mt-20 border-2 border-[#1010eb] mx-auto px-10 py-5 bg-transparent rounded-full flex justify-center items-center hover:text-white hover:bg-[#1010eb] ">
            Check compatibility
          </button>
        </div>
      </section>
      {/* technical skills  */}
      <TechnicalSkills />
      {/* faqs  */}
      <Faqs />
      {/* references  */}
      <References />
      {/* after references section  */}
      <DreaMed />
      {/* some doubts  */}
      <SomeDoubt />
      <Footer />
    </>
  );
};

export default Home;
