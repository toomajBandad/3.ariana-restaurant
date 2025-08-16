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
              A legacy of flavor, tradition, and community.
            </h5>
            <p className="text-gray-600 mb-4">
              Our journey began in 1950, when our founders opened a small bakery
              with a dream: to share the warmth of homemade bread and pastries
              with their neighbors. Over the decades, we've grown from a single
              storefront into a cherished institution, known for our dedication
              to craft, quality, and heartfelt service. Every loaf we bake
              carries the spirit of tradition and the joy of sharing.
            </p>
            <button className="cursor-pointer inline-block text-black border-1  hover:bg-black hover:text-white font-semibold py-2 px-4 rounded transition">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="py-12 lg:py-0 min-h-[500px] relative">
            <img
              src="/images/about.jpg"
              alt="Our Bakery"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Our Vision */}
          <div className="py-0 lg:py-12">
            <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
            <p className="text-gray-600 mb-4">
              We envision a future where tradition meets innovation — where
              every bite connects people to their roots while embracing new
              possibilities. Our goal is to continue crafting exceptional baked
              goods, nurturing our community, and inspiring joy through food.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>
                Sustainably sourced ingredients
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>
                Handcrafted recipes passed down generations
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fa fa-check text-primary mr-3"></i>A commitment to
                community and care
              </li>
            </ul>
            <button className="cursor-pointer inline-block text-black border-1 hover:bg-black hover:text-white font-semibold py-2 px-4 rounded transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
