import MapLeaflet from "@/components/modules/MapLeaflet/MapLeaflet";
import React, { useState } from "react";

function ContactDetails() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const addMessage = async (event) => {
    event.preventDefault();
    setSuccess(false);

    const message = { username, email, subject, body };

    try {
      const res = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      if (res.status === 201) {
        setUsername("");
        setEmail("");
        setSubject("");
        setBody("");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="pt-20 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-gray-600 uppercase tracking-widest text-sm font-semibold">
            Contact Us
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Feel Free To Contact
          </h1>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <i className="fa fa-map-marker-alt text-indigo-600 text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Address</h4>
            <p className="text-gray-600">Alcala de Henares, Madrid, Spain</p>
          </div>
          <div>
            <i className="fa fa-phone-alt text-indigo-600 text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Phone</h4>
            <p className="text-gray-600">+34 345 6789</p>
          </div>
          <div>
            <i className="far fa-envelope text-indigo-600 text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-gray-600">info@Ariana.com</p>
          </div>
        </div>

        {/* Contact Form & Map */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
          <MapLeaflet />

          {/* Form */}
          <form onSubmit={addMessage} className="space-y-6">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              required
              aria-label="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              placeholder="Message"
              required
              aria-label="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-600 text-white cursor-pointer font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 font-medium mt-4">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
