import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  FaClock,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaTshirt,
} from "react-icons/fa";

function ReservationDetail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    alert("Reservation submitted!");
  };
  return (
    <div className="pt-15 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-0">
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Reservation Information
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
                To ensure the highest level of service, we recommend reserving
                your table in advance. Our team is dedicated to creating a
                refined and memorable dining experience for every guest.So
                please just fill out the form below to book your table and
                enjoy.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
              {/* Hours of Operation */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-gray-900 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Hours of Operation
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="block mb-1">
                    Monday to Friday: <strong>12:00 – 22:00</strong>
                  </span>
                  <span>
                    Saturday & Sunday: <strong>13:00 – 23:00</strong>
                  </span>
                </p>
              </div>

              {/* Contact & Policies */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaPhoneAlt className="text-gray-900 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Contact & Policies
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="block mb-1">
                    <FaPhoneAlt className="inline mr-2 text-gold-500" />
                    <span className="font-medium text-gray-900">
                      +34 912 345 678
                    </span>
                  </span>
                  <span className="block mb-1">
                    <FaEnvelope className="inline mr-2 text-gold-500" />
                    <span className="font-medium text-gray-900">
                      reservas@restaurant.com
                    </span>
                  </span>
                  <span>
                    <FaTshirt className="inline mr-2 text-gold-500" />
                    Dress Code:
                    <span className="font-medium text-gray-900">
                      Smart casual
                    </span>
                    . No sportswear or beachwear.
                  </span>
                </p>
              </div>

              {/* Group Reservations */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className="text-gray-900 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Group Reservations
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-justify">
                  For parties of 8 or more, please contact us directly. We offer
                  tailored menus and private dining options for special
                  occasions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-16 bg-white">
          <div className="w-full mx-auto">
            <div
              className="p-40 bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{ backgroundImage: "url('/images/reservation-bg.jpg')" }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left Side */}
                <div className="text-white max-w-xl">
                  <div className="mb-6">
                    <h1 className="text-5xl font-extrabold text-[#da9f5b] mb-2">
                      30% OFF
                    </h1>
                    <h2 className="text-3xl font-bold">
                      For Online Reservation
                    </h2>
                  </div>
                  <p className="mb-6 text-white/80 leading-relaxed text-justify">
                    Enjoy an exclusive 30% discount when you book your table
                    online. Whether you're planning a romantic dinner, a family
                    gathering, or a celebration with friends, our cozy ambiance
                    and gourmet dishes are here to make your evening
                    unforgettable. Reserve now and indulge in a premium dining
                    experience at a fraction of the price.
                  </p>
                  <ul className="space-y-3 text-[#da9f5b]">
                    <li className="flex items-center">
                      <FaCheck className="text-white mr-3" />
                      Fresh, locally sourced ingredients
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-white mr-3" />
                      Elegant atmosphere with personalized service
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-white mr-3" />
                      Exclusive online-only discount
                    </li>
                  </ul>
                </div>

                {/* Right Side */}
                <div className="text-white text-center w-full max-w-md">
                  <h2 className="text-3xl font-bold mb-6">Book Your Table</h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                      aria-label="Name"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                      aria-label="Email"
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                      aria-label="Date"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                      aria-label="Time"
                    />
                    <select
                      name="person"
                      value={formData.person}
                      onChange={handleChange}
                      className="w-full border border-white bg-transparent px-4 py-3 rounded-md text-white"
                      aria-label="Number of Persons"
                    >
                      <option value="" disabled>
                        Select number of persons
                      </option>
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num} className="bg-gray-800">
                          Person {num}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-white mt-5 text-black font-bold py-3 rounded-md transition hover:bg-gray-700 hover:text-[#da9f5b] cursor-pointer"
                    >
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;
