import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function ServicesDetails({ data }) {
  return (
    <div className="pt-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-lg">
            Our Services
          </h4>
          <h1 className="text-5xl font-bold text-gray-900 mt-2">
            Fresh & Organic Dishes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;