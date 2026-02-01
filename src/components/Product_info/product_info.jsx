import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./product_info.scss";
import { motion, AnimatePresence } from "framer-motion";
function product_info() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndices, setActiveIndices] = useState([]);
const [activeVideo, setActiveVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [subscriptionOption, setSubscriptionOption] = useState("90-day");
  const [formatOption, setFormatOption] = useState("Forever Jar");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleAccordion = (index) => {
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove if exists (Close)
          : [...prev, index], // Add if not exists (Open)
    );
  };
  const images = [
    "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg", // Ảnh Quarterly (Thường là ảnh đầu)
    "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg", // Forever Jar 1
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg", // Sachet 1
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel02.jpg", // Sachet 2
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel03.jpg", // Sachet 3
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel04.jpg", // Sachet 4
    "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel05.jpg", // Sachet 5
  ];
const ambassadorData = [
  { id: "popup_video_1", img: "//im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065", label: "everything you need" },
  { id: "popup_video_2", img: "//im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977", label: "your outlook on life" },
  { id: "popup_video_3", img: "//im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964", label: "had this every" },
  { id: "popup_video_4", img: "//im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492", label: "this is" },
  { id: "popup_video_5", img: "//im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088", label: "probiotic" },
  { id: "popup_video_6", img: "//im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287", label: "daily routine" }
];
  return (
    <div className="product">
      <div className="page-width">
        <div className="product--medium d-flex flex-column flex-md-row gap-45 w-100">
          <div className="Product_template_latest_leftside_new">
            <div className="product-gallery-container d-flex product__column-sticky">
              {/* 1. Thumbnails Slider (Left Side) */}
              <div className="thumbnails-wrapper d-none d-md-block position-relative ">
                {/* Nút Mũi tên lên (Xoay ngược SVG) */}
                <div className="swiper-button-prev-custom">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <path
                      d="M9 4.3125L5.625 7.6875L2.25 4.3125"
                      stroke="#50000B"
                      strokeWidth="2"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </div>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction={"vertical"}
                  spaceBetween={10}
                  slidesPerView={6}
                  // Thêm các thuộc tính này để dừng ở item cuối
                  loop={false}
                  watchOverflow={true}
                  resistance={true}
                  resistanceRatio={0} // Ngăn chặn hiệu ứng kéo quá đà ở hai đầu
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  modules={[Navigation, Thumbs]}
                  className="thumb-swiper"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={`thumb-${index}`}>
                      <img src={src} alt="thumbnail" className="rounded-2" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Nút Mũi tên xuống */}
                <div className="swiper-button-next-custom">
                  <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M9 4.3125L5.625 7.6875L2.25 4.3125"
                      stroke="#50000B"
                      strokeWidth="2"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* 2. Main Slider (Right Side) */}
              <div className="main-slider-wrapper flex-grow-1 position-relative">
                <Swiper
                  key={isMobile ? "mobile" : "desktop"}
                  loop={true}
                  spaceBetween={0}
                  effect={isMobile ? "slide" : "fade"}
                  pagination={isMobile ? { clickable: true } : false}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed && !isMobile
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs, EffectFade, Pagination]}
                  className="main-swiper rounded-4"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={`main-${index}`}>
                      <div className="img-container position-relative">
                        <img
                          src={src}
                          alt="Daily Ultimate Essentials"
                          className="img-fluid"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="product__info-container Product_template_latest_rightside_new">
            <div className="product-review-stats">
              <div className="product-review-stats__rating-group">
                <span className="product-review-stats__stars d-flex">
                  <svg
                    className="product-review-stats__star"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    className="product-review-stats__star"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    className="product-review-stats__star"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    className="product-review-stats__star"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    className="product-review-stats__star"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
                <span className="product-review-stats__rating">4.8</span>
                <span className="product-review-stats__reviews">
                  from 11,825 Reviews
                </span>
                </div>
                <div className="product-review-stats__meta">
                  <span className="product-review-stats__separator product-review-stats__separator--first">
                    |
                  </span>
                  <span
                    className="product-review-stats__purchases"
                    data-stat-type="purchases"
                  >
                    622k+ customer purchases
                  </span>
                  <span className="product-review-stats__separator">|</span>
                  <span
                    className="product-review-stats__servings"
                    data-stat-type="servings"
                  >
                    19M+ servings
                  </span>
                
              </div>
            </div>
            <div className="product__title">
              <h1>
                Daily Ultimate Essentials:
                <br />
                All-in-One Supplement
              </h1>
            </div>
            <div className="meta_short_description_main_new hide-lists">
              <div className="meta_short_description_inner_new">
                <p>
                  Engineered for peak absorption, this comprehensive formula
                  replaces the need for 16 daily supplements with 92
                  nutrient-rich ingredients.
                </p>
              </div>
            </div>

            {/* Clinically Proven Results Card */}
            <div className="results-box p-3 rounded-lg border-green my-3">
              <div className="d-flex justify-content-between flex-column flex-md-row align-items-baseline align-md-items-center mb-3">
                <h5 className="text-maroon font-weight-bold m-0 ">
                  Clinically Proven Results
                </h5>
                <span className="badge-study">90-DAY CLINICAL STUDY</span>
              </div>

              <div className="row no-gutters mb-2">
                <div className="col-6 col-md-3">
                  <div className="d-flex align-items-center">
                    <span className="mr-1">⚡</span>
                    <span className="text-green">95%</span>
                  </div>
                  <div className="benefit-label">More energy</div>
                </div>
                <div className="col-3 border-left pl-2">
                  <div className="d-flex align-items-center">
                    <span className="mr-1">🦠</span>
                    <span className="text-green">85%</span>
                  </div>
                  <div className="benefit-label">Better gut</div>
                </div>
                <div className="col-6 col-md-3 border-left pl-2">
                  <div className="d-flex align-items-center">
                    <span className="mr-1">😴</span>
                    <span className="text-green">80%</span>
                  </div>
                  <div className="benefit-label">Better sleep</div>
                </div>
                <div className="col-3 border-left pl-2">
                  <div className="d-flex align-items-center">
                    <span className="mr-1">🧠</span>
                    <span className="text-green">70%</span>
                  </div>
                  <div className="benefit-label">Sharper focus</div>
                </div>
              </div>

              <p className="font-italic cpr-disclaimer">
                *Based on 12-week randomized trial by San Francisco Institute
              </p>

              <div className="d-flex justify-content-between align-items-end gap-16">
                <div>
                  <div className="product_tab-block_out product_info_container">
                    {/* Tab 1 */}
                    <div
                      className={`product_tab-block px-0 ${
                        activeIndices.includes(0) ? "is-active" : ""
                      }`}
                      onClick={() => toggleAccordion(0)}
                    >
                      <div className="product_tab-thumb d-flex align-items-center cpr-expand__trigger">
                        <p className="cpr-expand__trigger">
                          Why These Results Matter?
                        </p>
                        <motion.span
                          animate={{
                            rotate: activeIndices.includes(0) ? 180 : 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                          </svg>
                        </motion.span>
                      </div>

                      {/* We keep this in the DOM always for smooth animation */}
                      <AnimatePresence>
                        {activeIndices.includes(0) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="product_tab-content pt-3">
                              <p className="cpr-expand__text">
                                Unlike most supplements with unverified claims,
                                IM8 is backed by a 12-week randomized controlled
                                clinical trial. Every ingredient is NSF
                                Certified for Sport, verifying exact dosages and
                                testing for 280+ banned substances - the same
                                certification trusted by world-class athletes
                                like Aryna Sabalenka, World No. 1 tennis player.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <img
                    src="//im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?width=60"
                    height="35"
                    className="mx-1"
                  />
                  <img
                    src="//im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?width=60"
                    height="35"
                    className="mx-1"
                  />
                  <img
                    src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100"
                    height="35"
                    className="mx-1"
                  />
                </div>
              </div>
            </div>

            {/* Format Selection */}
            <div className="my-3">
              <legend className="form__label ">
                <div>1. Select Format:</div>
              </legend>
              <div className="product_variant_options_new ">
                <div className="product-variant-option-wrapper">
                  <input
                    type="radio"
                    id="template--17653238202535__main-1-0-jar"
                    name="Format-1"
                    value="Forever Jar"
                    form="product-form-template--17653238202535__main"
                    data-product-url=""
                    data-option-value-id="4684834635943"
                    data-variant-id="47315076022439"
                    checked={formatOption === "Forever Jar"}
                    onChange={() => setFormatOption("Forever Jar")}
                  />
                  <label htmlFor="template--17653238202535__main-1-0-jar">
                    <img
                      src="//im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853"
                      className="product-variant-option-image"
                      width="60"
                      height="100%"
                      alt="ux input"
                    />

                    <div className="variant_option_new">
                      <div className="variant_best_value_new">Most Popular</div>

                      <div className="variant_option_top_new">
                        <span className="variant_name_new ">Forever Jar</span>

                        <div className="variant_best_value_new">
                          MOST POPULAR
                        </div>
                      </div>

                      <div className="variant_option_bottom_new">
                        (354g)
                        <span
                          className="variant_servings_price_new"
                          data-format-serving-price="true"
                          data-serving-count="90"
                          data-base-price="23500"
                        >
                          $2.61 USD / serving
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="product-variant-option-wrapper">
                  <input
                    type="radio"
                    id="template--17653238202535__main-1-0-sachets"
                    name="Format-1"
                    value="Single-Serve Sachets"
                    form="product-form-template--17653238202535__main"
                    data-product-url=""
                    data-option-value-id="4684834635943"
                    data-variant-id="47315076022439"
                    checked={formatOption === "Single-Serve Sachets"}
                    onChange={() => setFormatOption("Single-Serve Sachets")}
                  />
                  <label htmlFor="template--17653238202535__main-1-0-sachets">
                    <img
                      src="https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834"
                      className="product-variant-option-image"
                      width="60"
                      height="100%"
                      alt="ux input"
                    />

                    <div className="variant_option_new">
                      <div className="variant_option_top_new">
                        <span className="variant_name_new ">
                          Single-Serve Sachets
                        </span>
                      </div>

                      <div className="variant_option_bottom_new">
                        (354g)
                        <span
                          className="variant_servings_price_new"
                          data-format-serving-price="true"
                          data-serving-count="90"
                          data-base-price="23500"
                        >
                          $2.91 USD / serving
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Subscribe Options */}

            <div className="my-3">
              <legend className="form__label ">
                <div>2. Subscribe & Save:</div>
              </legend>
              <div className="product_variant_options_new flex-column gap-16">
                <div className="product-variant-option-wrapper">
                  <input
                    type="radio"
                    id="template--17653238202535__main-2-0-90"
                    name="Plan-2"
                    value="90-day"
                    form="product-form-template--17653238202535__main"
                    data-product-url=""
                    data-option-value-id="4599807738023"
                    data-variant-id="46166911811751"
                    checked={subscriptionOption === "90-day"}
                    onChange={() => setSubscriptionOption("90-day")}
                  />
                  <label
                    htmlFor="template--17653238202535__main-2-0-90"
                    className="subscribe"
                  >
                    <span className="variant_option_checkbox"></span>

                    <div className="variant_option_new">
                      <div className="variant_holiday_deal_badge">
                        NEW YEAR OFFER
                      </div>
                      <div className="variant_best_value_new">BEST VALUE</div>
                      <div className="variant_option_top_new">
                        <span className="variant_name_new ">
                          90-Day Supply
                          <span className="text_color_save">(Save 22%)</span>
                        </span>

                        <span className="variant_option_price">
                          <span className="formatted-price">$87</span>

                          <span className="variant_option_price--compare">
                            <span className="formatted-price">$112</span>
                          </span>
                          <span className="variant_price_suffix">/mo</span>
                        </span>
                      </div>

                      <div className="variant_option_bottom_new">
                        <span className="variant_servings_new">
                          Billed $262.00 USD every 12 weeks
                        </span>

                        <span className="variant_servings_price_new">
                          $2.91 USD / serving
                        </span>
                      </div>

                      <ul className="variant_option_description">
                        <li>
                          🎓 Exclusive Access to 90 Day IM8 Transformation
                          Program (see below)
                        </li>

                        <li>💰 Maximum savings - lowest price per serving</li>

                        <li>👦 Share with family and friends</li>

                        <li>🎁 Free Daily Ultimate Mixer (US$18)</li>

                        <li>
                          🚚 Free Shipping to US, UK, CA, and most of EU and
                          APAC
                        </li>

                        <li>⏸️ Cancel or pause anytime</li>

                        <li>
                          🎁 Free Welcome Kit: Signature Red Cup + 5 Travel
                          Sachets (US$18)
                        </li>
                      </ul>
                    </div>
                  </label>
                </div>
                <div className="product-variant-option-wrapper">
                  <input
                    type="radio"
                    id="template--17653238202535__main-2-0-30"
                    name="Plan-2"
                    value="30-day"
                    form="product-form-template--17653238202535__main"
                    data-product-url=""
                    data-option-value-id="4599807738023"
                    data-variant-id="46166911811751"
                    checked={subscriptionOption === "30-day"}
                    onChange={() => setSubscriptionOption("30-day")}
                  />
                  <label
                    htmlFor="template--17653238202535__main-2-0-30"
                    className="subscribe"
                  >
                    <span className="variant_option_checkbox"></span>

                    <div className="variant_option_new">
                      <div className="variant_option_top_new">
                        <span className="variant_name_new ">
                          30-Day Supply
                          <span>(Save 12%)</span>
                        </span>

                        <span className="variant_option_price">
                          <span className="formatted-price">$99</span>

                          <span className="variant_option_price--compare">
                            <span className="formatted-price">$112</span>
                          </span>
                          <span className="variant_price_suffix">/mo</span>
                        </span>
                      </div>

                      <div className="variant_option_bottom_new">
                        <span className="variant_servings_new">
                          Billed $99.00 USD every 4 weeks
                        </span>

                        <span className="variant_servings_price_new">
                          $3.30 USD / serving
                        </span>
                      </div>

                      <ul className="variant_option_description list">
                        <li>30-day money back guarantee</li>

                        <li>Cancel or pause anytime</li>

                        <li>
                          Free Shipping to US, UK, CA, and most of EU and APAC
                        </li>

                        <li>
                          Free Welcome Kit: Signature Red Cup + 5 Travel Sachets
                          (US$18)
                        </li>
                      </ul>
                    </div>
                  </label>
                </div>
                {/* One Time*/}
                <div className="one-time-purchase-standalone m-0 p-0 d-flex justify-content-center">
                  <a href="" className="one-time-purchase-link">
                    One Time Purchase{" "}
                    <span className="otp-price fw-500">$112</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ATC*/}

            <button className="button button--primary product-form__submit quarterly-selected w-100">
              START MY 90-DAY TRANSFORMATION PROGRAM-$87.33 USD/mo
            </button>
            {/* Note*/}
            <div className="bfcm-product-banner">
              <div className="bfcm-product-banner__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </div>
              <span className="bfcm-product-banner__text">
                <span className="bfcm-product-banner__highlight">
                  New Year discount
                </span>{" "}
                automatically applied at checkout
              </span>
            </div>
            {/* list card info*/}
            <div className="transformation-program-block">
              <div className="tp-header">
                <div className="tp-pill">
                  <span className="tp-pill__emoji">🎓</span>
                  <span>90-DAY MEMBERS ONLY</span>
                </div>

                <h3 className="tp-title">90-Day IM8 Transformation Program</h3>
                <p className="tp-subtitle">
                  Exclusive access to quarterly masterclasses with our
                  world-class Medical and Performance Experts
                </p>
              </div>

              <div className="tp-experts">
                <a
                  href="/pages/90-day-program#curriculum-dr-dawn-mussallem"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&amp;width=300"
                    alt="Dr. Dawn Mussallem"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Dr. Dawn Mussallem</p>
                  <p className="tp-expert__title">
                    Cancer Survivor &amp; Physician at Mayo Clinic
                  </p>
                </a>

                <a
                  href="/pages/90-day-program#curriculum-bobby-rich"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&amp;width=300"
                    alt="Bobby Rich"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Bobby Rich</p>
                  <p className="tp-expert__title">
                    Trainer to David Beckham and World-class Athletes
                  </p>
                </a>

                <a
                  href="/pages/90-day-program#curriculum-dr-suzanne-devkota"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&amp;width=300"
                    alt="Dr. Suzanne Devkota"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Dr. Suzanne Devkota</p>
                  <p className="tp-expert__title">
                    Gut Health Expert &amp; Prof at Cedars Sinai
                  </p>
                </a>

                <a
                  href="/pages/90-day-program#curriculum-tavi-castro"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&amp;width=300"
                    alt="Tavi Castro"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Tavi Castro</p>
                  <p className="tp-expert__title">
                    Breathwork Expert &amp; Free-Diving World Record Holder
                  </p>
                </a>

                <a
                  href="/pages/90-day-program#curriculum-dr-amy-shah"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&amp;width=300"
                    alt="Dr. Amy Shah"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Dr. Amy Shah</p>
                  <p className="tp-expert__title">
                    Double-Board Certified Physician and Host of "Save Yourself"
                    Podcast
                  </p>
                </a>

                <a
                  href="/pages/90-day-program#curriculum-dr-ara-suppiah"
                  className="tp-expert"
                >
                  <img
                    className="tp-expert__image"
                    src="//im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&amp;width=300"
                    alt="Dr. Ara Suppiah"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                  <p className="tp-expert__name">Dr. Ara Suppiah</p>
                  <p className="tp-expert__title">
                    Performance &amp; Longevity Physician at LIV Golf
                  </p>
                </a>
              </div>

              <p className="tp-footer">
                Get personalized guidance, exclusive content, and direct access
                to leading experts in health optimization, performance, and
                longevity.
              </p>

              <a href="/pages/90-day-program" className="tp-learn-more-btn">
                <span>Learn More About the Program</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 12l4-4-4-4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
            {/* Note*/}
            <div className="money-back-guarantee-block">
              <div className="mbg-icon">
                <img
                  src="//im8health.com/cdn/shop/files/greencheck.png?v=1764066515&amp;width=72"
                  alt="Guarantee"
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </div>
              <div className="mbg-content">
                <h4 className="mbg-title">30-Day 100% Money Back Guarantee</h4>
                <p className="mbg-subtitle">
                  We're so confident you'll love it, take a full 30 days to
                  decide
                </p>
              </div>
            </div>
            <div className="hsa-info w-100 d-flex justify-content-center">
              <span className="hsa-text-highlight">Pay with HSA/FSA</span>
              <svg
                className="px-1"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <g clip-path="url(#clip0_4962_240)">
                  <mask
                    id="mask0_4962_240"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="19"
                  >
                    <path
                      d="M0.453613 0.639894H18.5366V18.7229H0.453613V0.639894Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_4962_240)">
                    <path
                      d="M9.42359 3.96507C8.52032 3.96507 7.78809 4.69731 7.78809 5.60058C7.78809 6.50385 8.52032 7.23608 9.42359 7.23608C10.3269 7.23608 11.0591 6.50385 11.0591 5.60058C11.0582 4.69762 10.3265 3.96595 9.42359 3.96507Z"
                      fill="#50000B"
                    ></path>
                    <path
                      d="M8.97401 10.1572L4.25241 15.0868C3.12222 13.9971 2.36465 12.5785 2.08768 11.0331C2.03484 10.7432 1.99865 10.4505 1.97928 10.1564L8.97401 10.1572ZM2.03348 8.64283C2.48571 5.42538 4.94758 2.85911 8.14351 2.27377C8.59471 2.19119 9.05252 2.14959 9.51121 2.14943C13.2631 2.15708 16.4367 4.92644 16.9523 8.64283H2.03348ZM13.5322 16.044C11.0621 17.6042 7.91341 17.5985 5.44875 16.0297L9.48332 11.8174L13.5322 16.044ZM17.0113 10.1572C16.9261 11.5224 16.4701 12.8386 15.6923 13.9638C15.4084 14.3737 15.0851 14.755 14.727 15.102L9.99102 10.1604L17.0113 10.1572ZM14.6409 2.24189C10.5327 -0.597452 4.90056 0.431274 2.0613 4.53948C-0.778042 8.64777 0.250684 14.2799 4.35889 17.1192C8.46503 19.957 14.0939 18.931 16.9347 14.827C19.7715 10.7172 18.7453 5.08648 14.6409 2.24189Z"
                      fill="#50000B"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4962_240">
                    <rect
                      width="18.083"
                      height="18.083"
                      fill="white"
                      transform="translate(0.453613 0.639893)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>Save an average of 30%</span>
              <a href="#" className="hsa-info__link px-1">
                Learn more
              </a>
            </div>
            {/* faq product info*/}
            <div className="product_tab-block_out product_info_container meta_accordions_detail_mainloops_new">
              {/* Tab 1 */}
              <div
                className={`product_tab-block px-0 ${
                  activeIndices.includes(1) ? "is-active" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                <div className="product_tab-thumb d-flex align-items-center">
                  <p className="cpr-expand__trigger">Ingredients</p>
                  <motion.span
                    animate={{
                      rotate: activeIndices.includes(1) ? 180 : 0,
                    }}
                  ></motion.span>
                </div>

                {/* We keep this in the DOM always for smooth animation */}
                <AnimatePresence>
                  {activeIndices.includes(1) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="product_tab-content">
                        <p className="cpr-expand__text">
                          Our comprehensive formula combines 92 nutrient-rich
                          ingredients to fuel your body with everything it needs
                          for optimal health. Packed with essential vitamins,
                          minerals, antioxidants, superfoods, greens,
                          pre-pro-post-biotics and clinical dosages of CoQ10 and
                          MSM.*
                        </p>
                        <p className="cpr-expand__text Meta_supplement_popup_main_acc_1_new">
                          <u>View Supplement Facts</u>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Tab 2 */}
              <div
                className={`product_tab-block px-0 ${
                  activeIndices.includes(2) ? "is-active" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                <div className="product_tab-thumb d-flex align-items-center">
                  <p className="cpr-expand__trigger">Third-Party Tested</p>
                  <motion.span
                    animate={{
                      rotate: activeIndices.includes(1) ? 180 : 0,
                    }}
                  ></motion.span>
                </div>

                {/* We keep this in the DOM always for smooth animation */}
                <AnimatePresence>
                  {activeIndices.includes(2) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="product_tab-content">
                        <p className="cpr-expand__text">
                          Every ingredient and dosage in IM8 is third-party
                          tested. This guarantees that what you see on the label
                          is what you get, so you know exactly what you’re
                          putting into your body.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Tab 3 */}
              <div
                className={`product_tab-block px-0 ${
                  activeIndices.includes(3) ? "is-active" : ""
                }`}
                onClick={() => toggleAccordion(3)}
              >
                <div className="product_tab-thumb d-flex align-items-center">
                  <p className="cpr-expand__trigger">How to Enjoy</p>
                  <motion.span
                    animate={{
                      rotate: activeIndices.includes(3) ? 180 : 0,
                    }}
                  ></motion.span>
                </div>

                {/* We keep this in the DOM always for smooth animation */}
                <AnimatePresence>
                  {activeIndices.includes(3) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="product_tab-content">
                        <p className="cpr-expand__text">
                          <ol>
                            <li>Scoop out one serving (12 grams)</li>
                            <li>
                              Add 8-12 oz of cold water, juice, smoothie, or
                              your favorite drink (Use less liquid for a
                              stronger taste)
                            </li>
                            <li>Shake or blend well then enjoy</li>
                          </ol>{" "}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Tab 4 */}
              <div
                className={`product_tab-block px-0 ${
                  activeIndices.includes(4) ? "is-active" : ""
                }`}
                onClick={() => toggleAccordion(4)}
              >
                <div className="product_tab-thumb d-flex align-items-center">
                  <p className="cpr-expand__trigger">Tasting Notes</p>
                  <motion.span
                    animate={{
                      rotate: activeIndices.includes(4) ? 180 : 0,
                    }}
                  ></motion.span>
                </div>

                {/* We keep this in the DOM always for smooth animation */}
                <AnimatePresence>
                  {activeIndices.includes(4) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="product_tab-content">
                        <p className="cpr-expand__text">
                          Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="meta_real_reviews_video_main_new">
      <h2 className="meta_real_reviews_video_title_new">
        What our IM8 Ambassadors are saying
      </h2>

     <div className="meta_real_reviews_video_loops_new d-none d-md-block">
      <Swiper
  modules={[FreeMode, Mousewheel]}
  slidesPerView={3.5}
  spaceBetween={12}
  freeMode={true}
  mousewheel={{ forceToAxis: true }}
  breakpoints={{
    1024: {
      slidesPerView: 5,
      spaceBetween: 12
    }
  }}
  className="Product_meta_real_reviews_video_slider"
>
        {ambassadorData.map((item) => (
          <SwiperSlide key={item.id} className="meta_real_reviews_video_loops_mainstatic_new">
            <div className="meta_real_reviews_video_loops_innerstatic_new">
              <div 
                className="meta_real_reviews_video_loops_innerstatic_imagevideo_new people_popup_open"
                onClick={() => setActiveVideo(item.id)}
              >
                <img src={item.img} alt="Ambassador" loading="lazy" />
                {/* SVG Play Icon từ code tham khảo */}
                <svg className="play_icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="11.75" cy="12.25" r="9.25" fill="#50000B"></circle>
                  <g clip-path="url(#clip0_779_10354)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z" fill="white"></path>
                  </g>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* Video Popup Overlay */}
      {/* {activeVideo && (
        <div className="video_popup_overlay active" onClick={() => setActiveVideo(null)}>
          <div className="video_popup_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_popup_new" onClick={() => setActiveVideo(null)}>×</button>
            <video src={activeVideo} controls autoPlay playsInline />
          </div>
        </div>
      )} */}
    </div>
          </div>
        </div>
      </div>
       <div className="meta_real_reviews_video_loops_new">
      <Swiper
  modules={[FreeMode, Mousewheel]}
  slidesPerView={3.5}
  spaceBetween={12}
  freeMode={true}
  mousewheel={{ forceToAxis: true }}
  breakpoints={{
    1024: {
      slidesPerView: 5,
      spaceBetween: 12
    }
  }}
  className="Product_meta_real_reviews_video_slider d-block d-md-none pb-5"
>
        {ambassadorData.map((item) => (
          <SwiperSlide key={item.id} className="meta_real_reviews_video_loops_mainstatic_new">
            <div className="meta_real_reviews_video_loops_innerstatic_new">
              <div 
                className="meta_real_reviews_video_loops_innerstatic_imagevideo_new people_popup_open"
                onClick={() => setActiveVideo(item.id)}
              >
                <img src={item.img} alt="Ambassador" loading="lazy" />
                {/* SVG Play Icon từ code tham khảo */}
                <svg className="play_icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="11.75" cy="12.25" r="9.25" fill="#50000B"></circle>
                  <g clip-path="url(#clip0_779_10354)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z" fill="white"></path>
                  </g>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    
  );
}

export default product_info;
