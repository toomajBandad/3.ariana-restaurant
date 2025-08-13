import React, { useState } from "react";

function ContactDetails() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const addMessage = async (event) => {
    event.preventDefault();

    const message = { username, email, subject, body };

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
      alert("Message sent successfully :))");
    }
  };

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-sm font-semibold">
            Contact Us
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Feel Free To Contact
          </h1>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <i className="fa fa-map-marker-alt text-primary text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Address</h4>
            <p className="text-gray-600">123 Street, New York, USA</p>
          </div>
          <div>
            <i className="fa fa-phone-alt text-primary text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Phone</h4>
            <p className="text-gray-600">+012 345 6789</p>
          </div>
          <div>
            <i className="far fa-envelope text-primary text-2xl mb-3"></i>
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
          {/* Map */}
          <div>
            <iframe
              className="w-full h-[443px] rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Form */}
          <form onSubmit={addMessage} className="space-y-6">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              required
              className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              placeholder="Message"
              required
              className="w-full bg-transparent border border-primary px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-5 rounded-md hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;