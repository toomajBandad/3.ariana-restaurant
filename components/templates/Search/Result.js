import Card from "@/components/modules/Card/Card";
import React from "react";

function Result({ searchResult }) {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hot Coffee */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hot Coffee</h2>
            {searchResult
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>

          {/* Cold Coffee */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cold Coffee</h2>
            {searchResult
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;