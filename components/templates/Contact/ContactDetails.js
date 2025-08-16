import React from "react";
import { useForm } from "react-hook-form";
import MapLeaflet from "@/components/modules/MapLeaflet/MapLeaflet";
import Swal from "sweetalert2";

function ContactDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const addMessage = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        Swal.fire({
          title: "Your message sent successfully !",
          icon: "success",
          confirmButtonColor: "#da9f5b",
        });
        reset(); // clears the form
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
      });
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
          <form onSubmit={handleSubmit(addMessage)} className="space-y-6">
            <input
              {...register("username", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              {...register("subject", { required: "Subject is required" })}
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}

            <textarea
              {...register("body", { required: "Message is required" })}
              rows="5"
              placeholder="Message"
              aria-label="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 text-black focus:outline-none"
            ></textarea>
            {errors.body && (
              <p className="text-red-500 text-sm">{errors.body.message}</p>
            )}

            <button
              type="submit"
              className="bg-gray-600 text-white cursor-pointer font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-200"
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
