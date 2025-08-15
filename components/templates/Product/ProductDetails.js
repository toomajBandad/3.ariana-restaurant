import { FaStar, FaRegStar } from "react-icons/fa";
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
      <div className="max-w-md text-gray-800">
        <h4 className="text-2xl font-bold mb-3">{data.title}</h4>
        <hr className="border-gray-300 mb-4" />

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-4">
          {[...Array(filledStars)].map((_, i) => (
            <FaStar key={`filled-${i}`} />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4 mb-4 text-lg">
          {data.off ? (
            <>
              <p className="line-through text-gray-500">${data.price}</p>
              <p className="text-green-600 font-semibold">
                ${data.price - (data.price * data.off) / 100}
              </p>
            </>
          ) : (
            <p className="text-green-600 font-semibold">${data.price}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{data.desc}</p>

        {/* Buy Button */}
        <button className="inline-flex items-center gap-2 bg-[#da9f5b] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#c88b45] transition">
          Order
          <BiSolidCartAdd className="text-xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
