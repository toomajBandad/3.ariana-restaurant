import React, { useState } from "react";
import Swal from "sweetalert2";

function Offer() {
  const [email, setEmail] = useState("");

  const addEmail = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (response.ok) {
      setEmail("");
      Swal.fire({
        title: "Join to club successfully!",
        icon: "success",
        confirmButtonColor: "#da9f5b",
      });
    } else {
      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative py-40 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 bg-[url('/images/offer-bg.jpg')] bg-cover bg-center blur-sm"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#da9f5b] mb-4 tracking-tight">
          50% OFF
        </h1>
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-3">
          Sunday Special Offer
        </h2>
        <p className="text-white/80 mb-8 text-sm sm:text-base">
          Only on Sundays from 1st Jan to 30th Jan 2045. Don’t miss out!
        </p>

        <form
          onSubmit={addEmail}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-72 px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#da9f5b] transition"
            required
          />
          <button
            type="submit"
            className="bg-[#da9f5b] hover:bg-[#c88a4a] text-white font-semibold px-6 py-3 rounded-md transition duration-300 cursor-pointer"
          >
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Offer;
