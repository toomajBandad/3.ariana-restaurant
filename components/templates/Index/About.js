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
              From a humble corner bakery to a beloved community staple.
            </h5>
            <p className="text-gray-700 mb-4">
              Founded in 1950 by Maria and José Alvarez, our bakery began as a
              small family-run shop in the heart of Alcalá de Henares. With a
              passion for traditional recipes and a commitment to quality, we
              quickly became known for our warm breads, flaky croissants, and
              unforgettable pastries. Today, three generations later, we
              continue to bake with the same love and care, using locally
              sourced ingredients and time-honored techniques.
            </p>
            <button className="cursor-pointer inline-block text-black border-1  hover:bg-black hover:text-white font-semibold py-2 px-4 mt-2 rounded transition">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative min-h-[500px]">
            <img
              src="/images/about.jpg"
              alt="Our Bakery"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Our Vision */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
            <p className="text-gray-700 mb-4">
              We believe in the power of food to bring people together. Our
              vision is to preserve the art of baking while embracing innovation
              and sustainability. We aim to be more than a bakery — a place
              where memories are made, traditions are honored, and every bite
              tells a story.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Handcrafted baked goods made daily</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Locally sourced, organic ingredients</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-check text-primary mr-3"></i>
                <span>Committed to sustainability and community</span>
              </li>
            </ul>
            <button className="cursor-pointer inline-block text-black border-1  hover:bg-black hover:text-white font-semibold py-2 px-4 mt-2 rounded transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
