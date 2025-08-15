import Link from "next/link";
import React from "react";

function Card({ title, desc, price, img, id }) {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <div className="flex-shrink-0 w-24 sm:w-28">
          <img
            src={img}
            alt={title}
            className="w-full h-auto rounded-md mb-3 sm:mb-0"
          />
        </div>
        <div className="flex-grow">
          <h4 className="text-lg font-semibold text-gray-800 hover:text-primary transition">
            {title}
          </h4>

          <p className="text-gray-600 mt-1">{desc}</p>
          <h5 className="text-primary font-bold mt-2">${price}</h5>
        </div>
      </div>
    </Link>
  );
}

export default Card;
