import React, { useEffect, useState } from "react";
import Card from "@/components/modules/Card/Card";

function Pricing({ data }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("pizza");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueCategories = [...new Set(data.map((item) => item.category))];
      setCategories(uniqueCategories);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <section className="pt-20 bg-white">
        <div className="text-center text-gray-500">Loading menu...</div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="pt-20 bg-white">
        <div className="text-center text-gray-500">No menu items available.</div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-primary uppercase tracking-widest text-sm font-semibold">
            Menu & Pricing
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Best Quality
          </h1>

          {/* Category Buttons */}
          <div className="flex justify-center items-center gap-3 my-5 flex-wrap">
            {categories.map((item) => (
              <button
                key={item}
                className={`p-2 rounded-md w-25 cursor-pointer transition-colors ${
                  category === item
                    ? "bg-amber-500 text-white"
                    : "bg-lightgold text-white hover:bg-amber-400"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data
              .filter((item) => item.category === category)
              .slice(0, 6)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;