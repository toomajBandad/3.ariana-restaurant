import React from "react";

function Reservation() {
  return (
    <div className="py-15 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-0">
        <div className="p-30 bg-[url('/images/reservation-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
          <div className="flex justify-center items-center">
            {/* Left Side */}
            <div className="p-5 text-white">
              <div className="mb-6">
                <h1 className="text-5xl font-extrabold text-primary mb-2 text-[#da9f5b]">
                  30% OFF
                </h1>
                <h1 className="text-3xl font-bold">For Online Reservation</h1>
              </div>
              <p className="mb-6 text-white/80 leading-relaxed">
                Enjoy an exclusive 30% discount when you book your table online.
                Whether you're planning a romantic dinner, a family gathering,
                or a celebration with friends, our cozy ambiance and gourmet
                dishes are here to make your evening unforgettable. Reserve now
                and indulge in a premium dining experience at a fraction of the
                price.
              </p>
              <ul className="space-y-3 text-[#da9f5b]">
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Fresh, locally sourced ingredients
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Elegant atmosphere with personalized service
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Exclusive online-only discount
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="p-5 text-white text-center">
              <h1 className="text-3xl font-bold mb-6 mt-4">Book Your Table</h1>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border border-white px-4 py-3 rounded-md focus:ring-2 text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-white px-4 py-3 rounded-md focus:ring-2 text-white"
                />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-full border border-white px-4 py-3 rounded-md focus:ring-2 text-white"
                />
                <input
                  type="text"
                  placeholder="Time"
                  className="w-full border border-white px-4 py-3 rounded-md focus:ring-2 text-white"
                />
                <select className="w-full border border-white px-4 py-3 rounded-md text-white">
                  <option value="" className="bg-gray-800">
                    Person
                  </option>
                  <option value="1" className="bg-gray-800">
                    Person 1
                  </option>
                  <option value="2" className="bg-gray-800">
                    Person 2
                  </option>
                  <option value="3" className="bg-gray-800">
                    Person 3
                  </option>
                  <option value="4" className="bg-gray-800">
                    Person 4
                  </option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-white mt-5 text-black font-bold py-3 rounded-md transition cursor-pointer hover:bg-gray-400"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
