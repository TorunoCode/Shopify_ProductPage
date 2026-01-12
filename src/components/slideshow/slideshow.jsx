import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./slideshow.scss";

// Import CSS mặc định của Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StoryCarousel = () => {
  const [playingIndex, setPlayingIndex] = useState(-1);
  const videoRefs = useRef([]);

  const handleToggleVideo = (index) => {
    const currentVideo = videoRefs.current[index];

    if (playingIndex === index) {
      // Nếu đang phát video này -> Pause nó
      currentVideo.pause();
      setPlayingIndex(-1);
    } else {
      // Dừng video đang phát trước đó (nếu có)
      if (playingIndex !== -1 && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex].pause();
      }
      // Phát video mới
      currentVideo.play();
      setPlayingIndex(index);
    }
  };
  const videoSources = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
      source:
        "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
      source:
        "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
      source:
        "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
      source:
        "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
      source:
        "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
      source:
        "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
      source:
        "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
      source:
        "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
      source:
        "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519",
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
      source:
        "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
    },
  ];

  return (
    <div className="product_judge-outer d-flex flex-column align-items-center">
      <div className="page-width  d-flex flex-column">
        <div className="product_judge-container">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            className="Product-ugc-stars"
          />
          <h2 className="product-section_title text-center">
            See The Stories of Sculptique™ Women Firsthand
          </h2>
          <p className="product-section_text text-center"></p>
        </div>
        <div className="w-100">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            // Cấu hình lại Pagination
            pagination={{
              el: ".custom-pagination-container",
              clickable: true,
              type: "bullets",
              renderBullet: function (index, className) {
                // className ở đây sẽ tự động có 'swiper-pagination-bullet'
                // Khi slide active, Swiper sẽ tự thêm 'swiper-pagination-bullet-active'
                return `<li class="${className}" role="presentation">
                <button type="button" role="tab" aria-label="${
                  index + 1
                } of 10">${index + 1}</button>
              </li>`;
              },
            }}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
          >
            {videoSources.map((video, index) => (
              <SwiperSlide key={index}>
                <div
                  className="product_ugc-video"
                  onClick={() => handleToggleVideo(index)}
                >
                  {/* Chỉ hiện icon nếu video này KHÔNG phải là video đang phát */}
                  <img
                    src={video.image}
                    className={`product_ugc-play ${
                      playingIndex === index ? "is-playing" : ""
                    }`}
                    alt="Play icon"
                  />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    playsInline
                    poster={video.poster}
                    loop
                  >
                    <source src={video.source} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            ))}

            {/* ĐÂY LÀ PHẦN QUAN TRỌNG: Thanh điều hướng phía dưới */}
            <div className="bottom-controls-wrapper">
              <ul className="custom-pagination-container" role="tablist"></ul>
              <div className="custom-navigation-buttons">
                <button className="btn-prev">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#008a5d"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="btn-next">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#008a5d"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;
