import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function DetailPage() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);

  const BASE_URL = "http://127.0.0.1:8000"; // replace with your backend

  // Fetch room details
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/rooms/${id}/`);
        setRoom(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load room details");
        setLoading(false);
        console.error("Error fetching room details:", err);
      }
    };
    fetchRoomDetails();
  }, [id]);

  // Fetch room reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviewLoading(true);
        const res = await axios.get(`${BASE_URL}/rooms/${id}/reviews/`);
        setReviews(res.data);
        setReviewLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setReviewLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  // Submit review
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Make sure room id and reviewText exist
    if (!reviewText || !rating) return;

    // Replace with your user's email from auth context or state
    const email =
      localStorage.getItem("email") || "anonymous@example.com";

    const newReview = {
      room: id, // the room id
      email: email, // use email instead of username
      rating,
      text: reviewText,
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/rooms/${id}/reviews/`,
        newReview,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Update frontend dynamically
      setRoom((prevRoom) => ({
        ...prevRoom,
        reviews: [...prevRoom.reviews, response.data],
      }));

      // Reset form
      setReviewText("");
      setRating(5);
    } catch (err) {
      console.error(
        "Error submitting review:",
        err.response?.data || err.message
      );
      alert("Failed to submit review. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-6 py-10 flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading room details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-6 py-10 flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error || "Room not found"}</p>
            <Link to="/" className="text-blue-500 hover:underline">
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        {/* Left - Image and Info */}
        <div className="md:w-1/2">
          <img
            src={`${BASE_URL}${room.image}`}
            alt={room.name}
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
          />

          {/* Facilities */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Room Facilities
            </h2>
            <ul className="grid grid-cols-2 gap-y-3 text-gray-700">
              {[
                "Air conditioner",
                "Balcony or Terrace",
                "Breakfast Included",
                "Flat Screen TV",
                "Hairdryer",
                "Ironing Board",
                "Kettle Tea",
                "Refrigerator",
                "Safe Box",
                "Telephone",
                "Towel Warmer",
                "Wifi Access",
              ].map((facility) => (
                <li key={facility} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {facility}
                </li>
              ))}
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

        {/* Right - Details and Reviews */}
        <div className="md:w-1/2 space-y-6">
          <div className="">
            <h1 className="text-2xl font-bold ">{room.title}</h1>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-600">
              {room.price} TK Per Night!
            </h4>
            <h1 className="text-4xl font-bold text-gray-800">{room.name}</h1>
          </div>

          {/* Horizontal specs */}
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li className="flex items-center">
              {room.area} m<sup>2</sup>
            </li>
            <li className="flex items-center">{room.beds} beds</li>
            <li className="flex items-center">{room.baths} baths</li>
            <li className="flex items-center">{room.guests} guests</li>
          </ul>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{room.description}</p>

          {/* Booking Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg text-white font-medium">
              Book Now
            </button>
          </div>

          {/* Customer Reviews */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            {reviewLoading ? (
              <p>Loading reviews...</p>
            ) : reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800">
                        {rev.email}
                      </h4>
                      <div className="text-yellow-500">
                        {"★".repeat(rev.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Write a Review */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Write a Review
            </h3>
            <form className="space-y-4" onSubmit={handleSubmitReview}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`text-2xl ${
                        rating >= star ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Share your experience..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md"
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
