import React from "react";
import Navbar from "../components/Navbar";

export default function Detail_page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src="hotel_image_2.webp"
            alt="hotel_image_2"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="">
            {/* Facilities */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Room Facilities
              </h2>
              <ul className="grid grid-cols-2 gap-y-3 text-gray-700">
                <li>Air conditioner</li>
                <li>Balcony or Terrace</li>
                <li>Breakfast Included</li>
                <li>Flat Screen TV</li>
                <li>Hairdryer</li>
                <li>Ironing Board</li>
                <li>Kettle Tea</li>
                <li>Refrigerator</li>
                <li>Safe Box</li>
                <li>Telephone</li>
                <li>Towel Warmer</li>
                <li>Wifi Access</li>
              </ul>
            </div>

            {/* Room Rules */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Room Rules
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Check-in: 2:00 PM onwards</li>
                <li>Check-out: Before 11:00 AM</li>
                <li>No smoking inside the room</li>
                <li>No pets allowed</li>
                <li>Parties/events are not allowed</li>
                <li>Quiet hours: 10:00 PM – 7:00 AM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Room details */}
        <div className="md:w-1/2 space-y-6">
          {/* Price and title */}
          <div>
            <h4 className="text-xl font-semibold text-blue-600">
              4000 TK Per Night!
            </h4>
            <h1 className="text-4xl font-bold text-gray-800">Family Suite</h1>
          </div>

          {/* Horizontal specs */}
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li>
              80m<sup>2</sup>
            </li>
            <li>4 beds</li>
            <li>2 baths</li>
            <li>6 guests</li>
          </ul>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English.
          </p>

          {/* Button */}
          <button className="mt-4 px-6 py-3 bg-[#1a70cc] hover:bg-blue-600 rounded-3xl shadow-lg cursor-pointer text-white font-medium transition-colors duration-200 ease-in-out">
            Check Availability
          </button>

          {/* Customer Reviews */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">Rahim Uddin</h4>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Amazing room! Super clean and very comfortable. Staff were
                  friendly and helpful.
                </p>
              </div>

              {/* Review 2 */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">Nusrat Jahan</h4>
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Good facilities, but breakfast options could be improved.
                </p>
              </div>

              {/* Review 3 */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">Arif Khan</h4>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Loved the stay! Spacious suite and excellent service. Will
                  definitely come back.
                </p>
              </div>
            </div>
          </div>

          {/* Write a Review */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Write a Review
            </h3>
            <form className="space-y-4">
              {/* Input field */}
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Share your experience..."
              ></textarea>

              {/* Submit button */}
              <button
                type="submit"
                className="px-6 py-2 bg-[#1a70cc] hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition-colors duration-200"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
