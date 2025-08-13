import React from "react";

function Reservation() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-black/60 to-black/80 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side */}
            <div className="p-8 text-white">
              <div className="mb-6">
                <h1 className="text-5xl font-extrabold text-primary mb-2">30% OFF</h1>
                <h1 className="text-3xl font-bold">For Online Reservation</h1>
              </div>
              <p className="mb-6">
                Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check text-primary mr-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="bg-[#33211dcc] p-8 text-white text-center">
              <h1 className="text-3xl font-bold mb-6 mt-4">Book Your Table</h1>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Time"
                  className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  className="w-full bg-transparent border border-primary px-4 py-3 rounded-md text-white"
                >
                  <option value="">Person</option>
                  <option value="1">Person 1</option>
                  <option value="2">Person 2</option>
                  <option value="3">Person 3</option>
                  <option value="4">Person 4</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary-dark transition"
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