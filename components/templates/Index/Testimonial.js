import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Testimonial from "@/components/modules/TestimonialItem/TestimonialItem";

function Testimonials({ data }) {
  return (
    <section className="py-20 bg-white" aria-label="Client Testimonials">
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {data?.length ? (
            data.slice(0, 8).map((comment) => (
              <SwiperSlide key={comment.id} className="mb-10">
                <Testimonial {...comment} />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-gray-500">No testimonials available.</p>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;