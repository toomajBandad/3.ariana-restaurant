import React, { useState } from "react";

function Offer() {
  const [email, setEmail] = useState("");

  const addEmail = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/newsLetters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 201) {
      setEmail("");
      alert("Join Successfully :))");
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-black/60 to-black/80 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-primary mb-4">50% OFF</h1>
        <h1 className="text-3xl text-white font-bold mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-normal mb-6">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <form
          onSubmit={addEmail}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white font-bold px-6 py-3 rounded-md hover:bg-primary-dark transition"
          >
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Offer;
