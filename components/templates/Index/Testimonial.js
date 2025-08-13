import Testimonial from "@/components/modules/TestimonialItem/TestimonialItem";
import React from "react";

function Testimonials({ data }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-sm font-semibold">
            Testimonial
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Our Clients Say
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4 scrollbar-hide">
          {data.slice(0, 4).map((comment) => (
            <div
              key={comment.id}
              className="snap-center shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <Testimonial {...comment} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;