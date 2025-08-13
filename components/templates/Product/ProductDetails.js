import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";

const ProductsDetails = ({ data }) => {
  const filledStars = Math.trunc(data.score);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
      {/* Product Image */}
      <img
        src={data.img}
        alt={data.title}
        className="w-64 h-64 object-cover rounded-lg shadow-md mb-4 sm:mb-0"
      />

      {/* Product Info */}
      <div className="max-w-md text-white">
        <h4 className="text-2xl font-bold mb-3">{data.title}</h4>
        <hr className="border-white mb-4" />

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 mb-4">
          {[...Array(filledStars)].map((_, i) => (
            <FaStar />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar />
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4 mb-4 text-lg">
          {data.off ? (
            <>
              <p className="text-green-400 font-semibold">
                ${data.price - (data.price * data.off) / 100}
              </p>
              <p className="line-through text-gray-400">${data.price}</p>
            </>
          ) : (
            <p className="text-green-400 font-semibold">${data.price}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-200 mb-6">{data.desc}</p>

        {/* Buy Button */}
        <button className="inline-flex items-center bg-primary text-white font-semibold px-5 py-3 rounded-md hover:bg-primary-dark transition">
          Buy
          <BiSolidCartAdd />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
