import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  const swiperItems = [
    {
      id: 1,
      url: "/images/carousel-1.jpg",
      uptitle: "A legacy of flavor",
      mainTitle: "ARIANA",
      subtitle: "SINCE 1986",
      align: "center",
      justify: "start",
    },
    {
      id: 2,
      url: "/images/carousel-2.jpg",
      uptitle: "Crafting culinary memories",
      mainTitle: "ARIANA",
      subtitle: "SINCE 1986",
      align: "start",
      justify: "start",
    },
    {
      id: 3,
      url: "/images/carousel-3.jpg",
      uptitle: "Where timeless taste",
      mainTitle: "ARIANA",
      subtitle: "SINCE 1986",
      align: "end",
      justify: "end",
    },
    {
      id: 4,
      url: "/images/carousel-4.jpg",
      uptitle: "Serving tradition",
      mainTitle: "ARIANA",
      subtitle: "SINCE 1986",
      align: "end",
      justify: "start",
    },
    {
      id: 5,
      url: "/images/carousel-5.jpg",
      uptitle: "Seasoned with love",
      mainTitle: "ARIANA",
      subtitle: "SINCE 1986",
      align: "center",
      justify: "center",
    },
  ];

  return (
    <Swiper
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="absolute top-0 left-0 w-full h-screen z-10 "
    >
      {swiperItems.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full h-full p-40">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>

            {/* Text Content */}
            <div
              className={`relative z-10 flex flex-col items-${item.align} justify-${item.justify} h-full w-full px-8 md:px-16 text-white transition-opacity duration-700`}
            >
              <h2 className="text-sm md:text-lg font-medium mb-2 tracking-wide ">
                {item.uptitle}
              </h2>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-wider drop-shadow-lg">
                {item.mainTitle}
              </h1>
              <h2 className="text-md md:text-xl font-light tracking-widest">
                {item.subtitle}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;