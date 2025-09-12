import React from "react";
import BlinkingCarousel from "./BlinkingCarousel";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Casousel from "../components/casousel";

// Use it inside Home_page
export default function Home_page() {
  return (
    <div>
      <Navbar />
      <BlinkingCarousel />

      <Casousel/>

      <div className="flex justify-between items-center container mx-auto">
        <div className=" w-[100%] px-5">
          <h4 className="text-lg pb-5 tracking-[0.2em]">Home</h4>
          <h1 className="pb-3 text-3xl font-bold font-serif">
            A Home Away From Home
          </h1>
          <p className="text-gray-700 text-justify px-6 border-l-1 border-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aliquam amet nulla reiciendis libero aspernatur odio ab. Nisi
            possimus in, minima expedita at iure consectetur dicta adipisci,
            nemo amet quaerat eum deleniti quibusdam dolores, dolore nihil?
            Necessitatibus sit nemo doloremque, perferendis fuga esse a est.
            Excepturi ipsum aliquam laboriosam sed.
          </p>
          <button className="mt-6 px-4 py-2 bg-[#1a70cc] hover:bg-blue-700 rounded-3xl shadow-lg courser-pointer text-white transition-color duration-200 ease-in-out flex justify-center items-center">
            Read More
          </button>
        </div>
        <div className="w[50%] p-5 ml-6">
          <img
            className="rounded-3xl"
            src="/hotel_image_1.webp"
            alt="hotel_image_1"
          />
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <h4 className="text-lg pb-5 tracking-[0.2em]">EXPLORE</h4>
          <h1 className="pb-3 text-3xl font-bold font-serif">
            Choose Your Stay
          </h1>
          <p className="text-gray-700 text-center px-6 w-[400px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aliquam amet nulla reiciendis libero aspernatur odio ab.
          </p>
        </div>

        <Link to={"details"}>
          <div className="w-[90%] mx-auto relative cursor-pointer">
            {/* Image Card */}
            <div className="overflow-hidden w-[650px] rounded-xl my-10">
              <img
                className="rounded-xl hover:scale-110 duration-300 ease-in-out"
                src="hotel_image_2.webp"
                alt="hotel_image_2"
              />
            </div>

            {/* Details overlay (bottom-left) */}
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 rounded-tr-xl p-6">
              {/* Price and title */}
              <div>
                <h4 className="text-xl font-semibold text-blue-600">
                  4000 TK Per Night!
                </h4>
                <h1 className="text-4xl font-bold text-gray-800">
                  Family Suite
                </h1>
              </div>

              {/* Horizontal specs */}
              <ul className="flex gap-6 text-gray-600 font-medium mt-2">
                <li>
                  80m<sup>2</sup>
                </li>
                <li>4 beds</li>
                <li>2 baths</li>
                <li>6 guests</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center container mx-auto">
        <div className="w-[50%]">
          <h4 className="text-lg pb-5 tracking-[0.2em]">AMENITIES</h4>
          <h1 className="pb-3 text-3xl font-bold font-serif">
            Make Your Stay Memoreable
          </h1>
          <ul>
            <li>Airport Transfer</li>
            <li>Car Parking</li>
            <li>Free Tea/ Coffee</li>
            <li>Free WIFI</li>
            <li>Smart TV</li>
            <li>Weekly Housekeeping</li>
          </ul>
        </div>

        <div className="w-[50%] flex gap-8 p-8">
          <div className="">
            <img className="rounded-2xl" src="image_1.webp" alt="image_1" />
          </div>
          <div className="">
            <img className="rounded-2xl" src="image_2.webp" alt="image_2" />
          </div>
        </div>
      </div>
    </div>
  );
}
