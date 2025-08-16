import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Comments = ({ data }) => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          {data.slice(0, 6).map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <img
                    src={comment.profile}
                    alt={comment.username}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#da9f5b]"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {comment.username}
                    </h4>
                    <p className="text-sm text-gray-500">User</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.body}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;