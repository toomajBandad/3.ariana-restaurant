import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ services }) {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-sm font-semibold">
            Our Services
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Fresh & Organic Dishes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services?.length ? (
            services.map((service) => (
              <ServiceItem
                key={service.id}
                title={service.title}
                desc={service.desc}
                img={service.img}
                icon={service.icon}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No services available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
