import React, { useState, useEffect } from "react";
import "./product_detail.scss";
import Bundler from "../bundler/bundler";
import { globalConfig } from "../common";
import { addDays, format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const Product_detail = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [sticker, setSticker] = useState(false);
  const toggleSticker = (index) => {
    setSticker(index);
  };
  const togglePopup = (index) => {
    globalConfig.publish({ isActivePopup: index });
    console.log(globalConfig.isActivePopup);
  };
  const images = [
    "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685",
  ];
  const toggleAccordion = (index) => {
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove if exists (Close)
          : [...prev, index] // Add if not exists (Open)
    );
  };
  const [config, setConfig] = useState(globalConfig);
  const date = addDays(new Date(), 3); // Hôm nay + 3 ngày
  const formattedDate = format(date, "eeee, d MMMM"); // Kết quả: Tuesday, 13 January
  useEffect(() => {
    // ĐĂNG KÝ: Lắng nghe tin nhắn từ common.jsx
    const handleUpdate = (updatedConfig) => {
      // Khi có tin mới, ta tạo một bản copy mới để React thấy sự thay đổi và re-render
      setConfig({ ...updatedConfig });
    };

    globalConfig.subscribe(handleUpdate);
  }, []);
  return (
    <div className="main_product-outer">
      <div className="page-width ">
        <div className="product_detail">
          <div className="main_product-container flex-column flex-md-row align-items-start align-md-items-center">
            <div>
              <div className="d-none d-md-block main_product-images">
                <div className="main_product">
                  <div className="main_product_media">
                    <div className="main_product_media-badge">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                        alt=""
                      />
                    </div>
                    <button
                      className="main_product_media-info"
                      onClick={() => togglePopup(true)}
                    >
                      <span>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                          alt=""
                        />
                      </span>
                      <span>Nutritional Information</span>
                    </button>
                  </div>
                  <div className="main_product-2nd">
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="main_product-3nd">
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="main_product-4th">
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none mobile-gallery-fixed">
                <div className="gallery-inner">
                  {/* Main Slider */}
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="main-slider"
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={`main-${index}`}>
                        <div className="img-container">
                          <img src={src} alt="product" />
                          {index === 0 && (
                            <div>                              <img class="main-producT_bf_badge" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"/>

                            <div className="overlay-content">
                              <div
                                className="nutrition-btn shadow-sm"
                                onClick={() => togglePopup(true)}
                              >
                                <img
                                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1.png?v=1752126615"
                                  alt=""
                                />
                                <span>Nutritional Information</span>
                              </div>
                            </div>
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Thumbnails - FIXED */}
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={6}
                    slidesPerView={4} // Changed from 4.3 - shows 4 full slides
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumb-slider"
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={`thumb-${index}`}>
                        <div className="thumb-box">
                          <img src={src} alt="thumb" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div>
              <div className="main_product-reviews">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
                    alt=""
                  />
                </div>
                <div>
                  <p>4.8/5 Excellent | Based on 2381 Reviews</p>
                </div>
              </div>

              <h1 className="main_product-title">
                New Maximum Potency Formula - Lymphatic Drainage Capsules by
                Sculptique™
              </h1>
              <div className="main_product-features">
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="//trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413"
                    />
                  </div>
                  <div>
                    <p>Join over 93 Thousand who say - it WORKS!</p>
                  </div>
                </div>
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910"
                    />
                  </div>
                  <div>
                    <p>Restores your body’s natural 24-hour lymphatic cycle</p>
                  </div>
                </div>
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413"
                    />
                  </div>
                  <div>
                    <p>
                      Helps reduce fluid retention and the appearance of
                      puffiness and bloating
                    </p>
                  </div>
                </div>
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414"
                    />
                  </div>
                  <div>
                    <p>
                      Helps fall asleep faster, stay asleep longer and wake up
                      energized
                    </p>
                  </div>
                </div>
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413"
                    />
                  </div>
                  <div>
                    <p>
                      Eliminates joint stiffness, pain, morning creakiness and
                      feel more grounded
                    </p>
                  </div>
                </div>
                <div className="main_product-feature-line">
                  <div>
                    <img
                      loading="eager"
                      src="//trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413"
                    />
                  </div>
                  <div>
                    <p>Boosts energy, mental clarity and emotional balance</p>
                  </div>
                </div>
              </div>
              <div
                className={`iframe-frontrow-sticker ${
                  sticker ? "invisible" : ""
                }`}
              >
                <div className="heading">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="35"
                      viewBox="0 0 17 35"
                      fill="none"
                    >
                      <path
                        d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"
                        stroke="#212121"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <p>
                    Clinicians'
                    <br />
                    Choice
                  </p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="35"
                      viewBox="0 0 17 35"
                      fill="none"
                    >
                      <path
                        d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"
                        stroke="#212121"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <p>
                    <strong>336 clinicians</strong> share this on
                    <i>FrontrowMD</i> without compensation.
                    <a className="learn-more">Learn more </a>
                  </p>
                  <div className="cta">
                    <span className="images">
                      <img src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0" />
                      <img src="https://assets.app.thefrontrowhealth.com/yulyi33mil8glzv4b7fhzs5ipnz2" />
                      <img src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a" />
                    </span>
                    <button className="testimonial-cta">
                      <p>Read their reviews</p>
                    </button>
                  </div>
                </div>
                <button
                  className="close-button"
                  id="close-button"
                  onClick={() => toggleSticker(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <path
                      d="M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z"
                      fill="#212121"
                    ></path>
                  </svg>
                </button>
              </div>
              <Bundler />
              <div className="line_delivered">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3488/3488757.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Delivered on
                    <span className="delivery_date mx-1">{formattedDate}</span>
                    with Express Shipping
                  </p>
                </div>
              </div>
              <button className="product-selector_atc">ADD TO CART</button>
              <div className="product_atc-footer-line">
                <div className="product_atc-footer-inline">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.583 12.1713C14.8698 12.1333 15.2001 12.1658 15.2331 12.5409L15.4195 14.6275C15.4683 15.1837 14.6219 15.2591 14.5729 14.7009L14.4664 13.5087C11.0241 17.4806 4.69181 17.0524 1.8463 12.5832C0.813943 10.9619 0.373055 8.97183 0.729143 6.97041C0.826743 6.41646 1.66639 6.56543 1.56914 7.11708C0.93661 10.7064 3.13963 14.1944 6.67777 15.1423C9.24097 15.8291 11.929 15.0161 13.687 13.1046L12.7599 13.1875C12.2036 13.2364 12.1283 12.39 12.6865 12.3409L14.583 12.1713ZM4.40861 3.48455L3.31261 3.58232C5.07048 1.67103 7.75883 0.858057 10.3219 1.54481C13.86 2.4929 16.063 5.98072 15.4305 9.57006C15.3332 10.1217 16.1729 10.2707 16.2705 9.71672C16.6267 7.71512 16.1857 5.72526 15.1533 4.10392C12.3587 -0.285054 6.18194 -0.791543 2.68932 3.00366L2.59723 1.97219C2.54817 1.41397 1.70177 1.48917 1.75065 2.04561L1.93554 4.11495C1.95314 4.36881 2.16274 4.54428 2.41768 4.51548L4.48203 4.33112C5.03972 4.28206 4.96559 3.43619 4.40861 3.48455Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p
                      className={
                        config.activeOption === 0
                          ? "product_atc-refills"
                          : "d-none"
                      }
                      data="1"
                    >
                      Refills Ship Monthly
                    </p>
                    <p
                      className={
                        config.activeOption === 1
                          ? "product_atc-refills"
                          : "d-none"
                      }
                      data="2"
                    >
                      Refills Ship Bi-Monthly
                    </p>
                    <p
                      className={
                        config.activeOption === 2
                          ? "product_atc-refills"
                          : "d-none"
                      }
                      data="3"
                    >
                      Refills Ship Every 12 Week
                    </p>
                  </div>
                </div>
                <div className="product_atc-footer-inline">
                  <div>
                    <img src="https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp" />
                  </div>
                  <div>
                    <p>Stop or Cancel Anytime</p>
                  </div>
                </div>
              </div>
              <img
                className="product_payment-icons w-100 my-3"
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
              />
              <img
                loading="lazy"
                className="Desktop_only product_bf-note-image"
                src="//trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"
              />
              <div className="product_atc-icons">
                <div className="product_atc-icon-line d-flex align-items-center gap-2">
                  <div>
                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864" />
                  </div>
                  <div>
                    <p>60-Day Money-Back Guarantee</p>
                  </div>
                </div>
                <div className="product_atc-icon-line d-flex align-items-center gap-2">
                  <div>
                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864" />
                  </div>
                  <div>
                    <p>Free Shipping From USA Included </p>
                  </div>
                </div>
              </div>
              <div className="main_product-review">
                <div className="main_product-review-meta">
                  <div>
                    <img
                      loading="lazy"
                      src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
                    />
                  </div>
                  <div>
                    <p>
                      Margaret Ellison | FL
                      <span>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267" />
                      </span>
                    </p>
                    <img
                      className="main_product-review-stars"
                      src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
                    />
                  </div>
                </div>

                <div className="main_product-review-content">
                  <p>
                    <strong>
                      Even my husband noticed... the spark came back.
                    </strong>
                  </p>
                  <p>
                    After years of hiding under coverups, picking apart my body,
                    and feeling disconnected, I finally feel at ease again. I
                    feel less bloated, lighter, like my body is working with me
                    not against me. These past months, I’ve been present. Even
                    my marriage feels renewed, not just in how I look but in how
                    I feel. It’s hard to explain, but once you try it you’ll get
                    it. I’d recommend this to my closest friends without
                    question.
                  </p>
                </div>
              </div>

              <div className="product_tab-block_out">
                {/* Tab 1 */}
                <div
                  className={`product_tab-block ${
                    activeIndices.includes(0) ? "is-active" : ""
                  }`}
                  onClick={() => toggleAccordion(0)}
                >
                  <div className="product_tab-thumb">
                    <p>Ingredients proven by science</p>
                    <span>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                        alt="toggle"
                      />
                    </span>
                  </div>

                  {/* We keep this in the DOM always for smooth animation */}
                  <div className="accordion-content-wrapper">
                    <div
                      className={`product_tab-content ${
                        activeIndices.includes(0) ? "pt-3" : ""
                      }`}
                    >
                      <p className="text-black">
                        <strong>Sculptique Ingredients:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Echinacea purpurea Extract</strong> – Known
                          for its anti-inflammatory properties, it may support
                          skin health.
                        </li>
                        <li>
                          <strong>Dandelion Extract</strong> – Traditionally
                          used as a diuretic, it may help reduce water
                          retention.
                        </li>
                        <li>
                          <strong>Burdock Powder</strong> – Contains
                          antioxidants that may promote skin clarity.
                        </li>
                        <li>
                          <strong>Cleavers Extract</strong> – Believed to
                          support lymphatic drainage and detoxification.
                        </li>
                        <li>
                          <strong>Rutin</strong> – A flavonoid that may
                          strengthen blood vessels and improve circulation.
                        </li>
                        <li>
                          <strong>Bromelain Powder</strong> – An enzyme from
                          pineapple that may reduce inflammation and support
                          tissue repair.
                        </li>
                        <li>
                          <strong>Lemon Powder</strong> – Rich in vitamin C, it
                          may aid in collagen production and skin rejuvenation.
                        </li>
                        <li>
                          <strong>Kelp Extract</strong> – A source of iodine and
                          minerals that may support skin metabolism.
                        </li>
                      </ul>
                      <p>
                        These natural ingredients work together to reduce
                        puffiness, bloating, fluid retention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 2 */}
                <div
                  className={`product_tab-block ${
                    activeIndices.includes(1) ? "is-active" : ""
                  }`}
                  onClick={() => toggleAccordion(1)}
                >
                  <div className="product_tab-thumb">
                    <p>How does Sculptique work?</p>
                    <span>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                        alt="toggle"
                      />
                    </span>
                  </div>
                  <div className="accordion-content-wrapper">
                    <div
                      className={`product_tab-content ${
                        activeIndices.includes(1) ? "pt-3" : ""
                      }`}
                    >
                      <p>
                        Sculptique works by improving blood flow and supporting
                        lymphatic drainage to reduce fluid buildup that causes
                        puffiness, inflammation, and water retention. It also
                        reduces inflammation and boosts collagen production to
                        help skin become firmer and smoother.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 3 */}
                <div
                  className={`product_tab-block ${
                    activeIndices.includes(2) ? "is-active" : ""
                  }`}
                  onClick={() => toggleAccordion(2)}
                >
                  <div className="product_tab-thumb">
                    <p>Shipping and returns</p>
                    <span>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                        alt="toggle"
                      />
                    </span>
                  </div>
                  <div className="accordion-content-wrapper">
                    <div
                      className={`product_tab-content ${
                        activeIndices.includes(2) ? "pt-3" : ""
                      }`}
                    >
                      <p>
                        All of Sculptique orders get FREE shipping straight from
                        our USA warehouse. Orders are usually shipped out within
                        1-2 working days, and you should receive the order
                        within 3-7 working days for domestic USA orders, and
                        within 10 working days for International orders.
                      </p>
                      <p>
                        We also offer a 60-day money back guarantee - if you are
                        unsatisfied with our product, you can take advantage of
                        our guarantee and ship back the product to us to get
                        your return within 60 days of receiving your order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Tabs  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_detail;
