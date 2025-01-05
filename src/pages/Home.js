import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import img from "../assets/La_Dolce.webp";

import fun from "../assets/Fun&Festire.webp";
import weddingShops from "../assets/WeddingBox.webp";
import JuttisForMen from "../assets/designer_mens.webp";
import GiftCards from "../assets/GiftCards.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      {/* New Arrivals  */}
      <div className="mx-auto px-20 my-28">
        <div className="text-center">
          <h3 className="text-2xl font-normal my-2">NEW ARRIVALS</h3>
          <Link
            to="/shop"
            class=" bg-transparent text-black p-1 border-2 text-xs"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
      {/* La Dolce Vita Right Description Section */}
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <img
              src={img}
              alt="Description"
              className="col-span-6 w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-6">
            <div className="p-6">
              <h2 className="col-span-6 text-2xl font-normal">La Dolce Vita</h2>
              <p className="col-span-6 py-4">
                For the past few years, us sisters had been dreaming of an
                Italian vacation together. We were always enamoured by the
                country’s stunning landscapes, pristine beaches and
                awe-inspiring history and culture. After months of planning, we
                visited Italy and we couldn’t be more thrilled!
                <br />
                <br />
                For this special trip, we wanted to pack with us some fun pair
                of sandals that were both versatile and comfortable to bring to
                Italy. And that is how the idea of our “La Dolce Vita”
                collection was born.
                <br />
                <br />
                We are so excited to introduce this collection to you, with the
                hope that it takes you on journeys unforgettable! ❤️
              </p>
              <button class=" bg-black text-white py-2 px-6 transition duration-300 hover:bg-gray-900">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Festive Favourites  */}
      <div className="mx-auto px-20 my-28">
        <h3 className="text-2xl font-normal my-8 text-center">
          FESTIVE FAVOURITES
        </h3>
      </div>

      {/* Fun & Festire  */}
      <Link to="/shop">
        <img
          src={fun}
          alt="Description"
          className="col-span-6 w-full h-auto object-cover my-20"
        />
      </Link>

      {/* Wedding Shops */}
      <div className="my-28">
        <div className="px-3 mb-16 text-center">
          <h3 className="text-xl font-normal my-4">THE WEDDING SHOP</h3>
          <p className="text-sm italic">
            Beautiful jutti's in gorgeous packaging for your special day
          </p>
        </div>
        <Link to="/shop">
          <img
            src={weddingShops}
            alt="Description"
            className="col-span-6 w-full h-auto object-cover"
          />
        </Link>
      </div>

      {/* Gift Cards */}
      <div className="container mx-auto px-12 my-20">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <Link to="/shop">
              <img
                src={JuttisForMen}
                alt="Description"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link to="/shop">
              <img
                src={JuttisForMen}
                alt="Description"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <div className="container mx-auto space-y-1">
              <div className="row-span-6">
                <Link to="/shop">
                  <img
                    src={GiftCards}
                    alt="Description"
                    className="w-full h-auto object-cover"
                  />
                </Link>
              </div>
              <div className="row-span-6 ">
                <Link to="/shop">
                  <img
                    src={GiftCards}
                    alt="Description"
                    className="w-full h-auto object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer Reviews  */}
      <div className="bg-red-100 my-20 p-5">
        <div className="mx-auto">
          <h3 className="uppercase text-xl font-normal text-center my-5">
            Testimonials
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
