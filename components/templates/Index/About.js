import React from "react";

function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-[5px] text-lg mb-2">
            About Us
          </h4>
          <h1 className="text-5xl font-bold">Serving Since 1950</h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Our Story</h1>
            <h5 className="text-lg font-medium mb-4">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </h5>
            <p className="text-gray-700 mb-4">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <a
              href="#"
              className="inline-block bg-secondary text-white font-semibold py-2 px-4 mt-2 rounded hover:bg-secondary-dark transition"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="relative min-h-[500px]">
            <img
              src="/images/about.png"
              alt="About"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Our Vision */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
            <p className="text-gray-700 mb-4">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-primary text-white font-semibold py-2 px-4 mt-2 rounded hover:bg-primary-dark transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;