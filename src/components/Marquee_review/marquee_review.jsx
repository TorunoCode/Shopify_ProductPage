import React from "react";
import "./marquee_review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from 'swiper/modules';
const reviewData = [
  {
    id: 1,
    author: "Erika Friesenhahn.",
    quote: "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product.",
  },
  {
    id: 2,
    author: "Charlie West.",
    quote: "I am really feeling full of energy. After about 2 weeks of the IM8, my wife said 'What's got into you, would you slow down and just sit awhile'.",
  },
  {
    id: 3,
    author: "Trina Fautoux.",
    quote: "The taste is so delicious and I'm excited to feel the difference. I have tried AG1 but had terrible stomach upset with it and had to discontinue.",
  },
  {
    id: 4,
    author: "Jennifer Dunn.",
    quote: "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling.",
  },
  {
    id: 5,
    author: "Lisa Tradewell.",
    quote: "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most.",
  },
  {
    id: 6,
    author: "Bernae VeraKruse.",
    quote: "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
  }
];

function marquee_review() {

  return (
   <div className="static-reviews-section">
      <div className="static-reviews__inner page-width d-flex flex-column justify-content-center align-items-center">
        <div >
          <h2 className="static-reviews__heading">10,000+ 5 Star Reviews</h2>
          <p className="static-reviews__description ">
            These are actual IM8 verified customers that have seen successful 
            health outcomes with the consistent use of IM8 Daily Ultimate Essentials.
          </p>
        </div>
      </div>
      <Swiper
          modules={[FreeMode, Mousewheel, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true} // Kích hoạt cuộn vô hạn
          grabCursor={true} // Hiển thị bàn tay khi di chuột vào
          mousewheel={{ forceToAxis: true }} // Cho phép dùng con trỏ chuột/trackpad để cuộn
          freeMode={{
    enabled: true,
    momentum: false, // Tắt đà để chạy đều như marquee
  }}
          speed={12000} // Tốc độ trượt (ms), càng lớn càng chậm
        autoplay={{
          delay: 0, // Không có khoảng trễ giữa các lần trượt
          disableOnInteraction: false, // Không dừng khi chạm vào
        }}
          breakpoints={{
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5} // Hiển thị 4 slide trên desktop
          }}
          className="static-reviews-swiper wiper-container"
        >
          {[...reviewData, ...reviewData].map((review, index) => (
            <SwiperSlide key={`${review.id}-${index}`}>
              <div className="static-reviews__card">
                <div className="static-reviews__stars">★★★★★</div>
                <p className="static-reviews__quote">"{review.quote}"</p>
                <p className="static-reviews__author">— {review.author}, Verified Customer</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      <div className="static-reviews__footer">
          <strong>11,825 Reviews</strong> | Average Rating: 4.8/5
        </div>
    </div>
  );
}

export default marquee_review;
