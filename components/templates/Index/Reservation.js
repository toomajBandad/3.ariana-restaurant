import React from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

function Reservation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });

    if (response.ok) {
      Swal.fire({
        title: "Reservation Confirmed!",
        html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Persons:</strong> ${data.person}</p>
      `,
        icon: "success",
        confirmButtonColor: "#da9f5b",
      });

      reset();
    } else {
      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="py-16 bg-white">
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
                <h2 className="text-3xl font-bold">For Online Reservation</h2>
              </div>
              <p className="mb-6 text-white/80 leading-relaxed text-justify">
                Enjoy an exclusive 30% discount when you book your table online.
                Whether you're planning a romantic dinner, a family gathering,
                or a celebration with friends, our cozy ambiance and gourmet
                dishes are here to make your evening unforgettable. Reserve now
                and indulge in a premium dining experience at a fraction of the
                price.
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
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm block text-left">
                    Name is required
                  </span>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm block text-left">
                    Email is required
                  </span>
                )}

                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                />
                {errors.date && (
                  <span className="text-red-400 text-sm block text-left">
                    Date is required
                  </span>
                )}

                <input
                  type="time"
                  {...register("time", { required: true })}
                  className="w-full border border-white bg-transparent px-4 py-3 rounded-md focus:ring-2 focus:ring-[#da9f5b] text-white placeholder-white/70"
                />
                {errors.time && (
                  <span className="text-red-400 text-sm block text-left">
                    Time is required
                  </span>
                )}

                <select
                  {...register("person", { required: true })}
                  className="w-full border border-white bg-transparent px-4 py-3 rounded-md text-white"
                >
                  <option value="">Select number of persons</option>
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num} className="bg-gray-800">
                      Person {num}
                    </option>
                  ))}
                </select>
                {errors.person && (
                  <span className="text-red-400 text-sm block text-left">
                    Number of persons is required
                  </span>
                )}

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
  );
}

export default Reservation;
