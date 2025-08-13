import React from "react";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonials from "@/components/templates/Index/Testimonial";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials data={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  let servicesData = [];
  let menuData = [];
  let commentsData = [];

  // Fetch services
  try {
    const res = await fetch("http://localhost:4000/services");
    if (!res.ok) throw new Error("Failed to fetch services");
    servicesData = await res.json();
  } catch (error) {
    console.error("Services fetch error:", error);
  }

  // Fetch menu
  try {
    const res = await fetch("http://localhost:4000/menu");
    if (!res.ok) throw new Error("Failed to fetch menu");
    menuData = await res.json();
  } catch (error) {
    console.error("Menu fetch error:", error);
  }

  // Fetch comments
  try {
    const res = await fetch("http://localhost:4000/comments");
    if (!res.ok) throw new Error("Failed to fetch comments");
    commentsData = await res.json();
  } catch (error) {
    console.error("Comments fetch error:", error);
  }

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Index;
