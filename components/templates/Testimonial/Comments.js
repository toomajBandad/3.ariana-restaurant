import TestimonialItem from "@/components/modules/TestimonialItem/TestimonialItem";
import React from "react";

function Comments({ data }) {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-lg">
            Testimonial
          </h4>
          <h1 className="text-5xl font-bold text-gray-900 mt-2">
            Our Clients Say
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.slice(0, 4).map((comment) => (
            <TestimonialItem {...comment} key={comment.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;