import React from "react";
// import styles from "@/styles/Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Slider() {
  const swiperItems = [
    {
      id: 1,
      url: "/images/carousel-1.jpg",
      uptitle: "A legacy of flavor",
      mainTitle: "NEXT",
      subtitle: "SINCE 1986",
      align: "center",
      justify: "start",
    },
    {
      id: 2,
      url: "/images/carousel-2.jpg",
      uptitle: "Crafting culinary memories",
      mainTitle: "NEXT",
      subtitle: "SINCE 1986",
      align: "start",
      justify: "start",
    },
    {
      id: 3,
      url: "/images/carousel-3.jpg",
      uptitle: "Where timeless taste",
      mainTitle: "NEXT",
      subtitle: "SINCE 1986",
      align: "end",
      justify: "end",
    },
    {
      id: 4,
      url: "/images/carousel-4.jpg",
      uptitle: "Serving tradition",
      mainTitle: "NEXT",
      subtitle: "SINCE 1986",
      align: "end",
      justify: "start",
    },
    {
      id: 5,
      url: "/images/carousel-5.jpg",
      uptitle: "Seasoned with love",
      mainTitle: "NEXT",
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
      className="absolute top-0 left-0 w-full h-screen z-10"
    >
      {swiperItems.map((item) => (
        <SwiperSlide
          key={item.id}
          className="text-center bg-cover bg-center"
        >
          <div
            className="flex flex-col justify-center items-center bg-cover bg-opacity-50 p-8 bg-no-repeat h-full w-full"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <h2 className="text-primary font-medium">{item.uptitle}</h2>
            <h1 className="text-white text-4xl font-bold">{item.mainTitle}</h1>
            <h2 className="text-white text-lg">{item.subtitle}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
