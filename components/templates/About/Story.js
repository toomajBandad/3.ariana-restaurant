import React from "react";

function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-sm font-semibold">
            About Us
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Serving Since 1950
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="py-0 lg:py-12">
            <h1 className="text-2xl font-bold mb-4">Our Story</h1>
            <h5 className="text-lg text-gray-700 mb-4">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </h5>
            <p className="text-gray-600 mb-4">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <a
              href="#"
              className="inline-block bg-secondary text-white font-semibold py-2 px-4 rounded hover:bg-secondary-dark transition"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="py-12 lg:py-0 min-h-[500px] relative">
            <img
              src="/images/about.jpg"
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Our Vision */}
          <div className="py-0 lg:py-12">
            <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
            <p className="text-gray-600 mb-4">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;