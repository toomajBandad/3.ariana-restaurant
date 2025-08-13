import Link from "next/link";
import React from "react";

function Card({ title, desc, price, img, id }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
      <div className="flex-shrink-0 w-24 sm:w-28">
        <img
          src={img}
          alt={title}
          className="w-full h-auto rounded-full mb-3 sm:mb-0"
        />
        <h5 className="text-primary font-bold text-center mt-2">${price}</h5>
      </div>
      <div className="flex-grow">
        <Link href={`/products/${id}`}>
          <h4 className="text-lg font-semibold text-gray-800 hover:text-primary transition">
            {title}
          </h4>
        </Link>
        <p className="text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default Card;