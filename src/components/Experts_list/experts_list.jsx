import React from "react";
import "./experts_list.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

const influencers = [
  {
    name: "Dr. James Dinicolantonio",
    tiktokView: "3.2M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/18ce63f7f6154e888f2a48c2a478e480/18ce63f7f6154e888f2a48c2a478e480.HD-1080p-7.2Mbps-38131720.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801",
    link: "https://im8health.com/pages/dr-james-dinic",
    description: "Cardiovascular Scientist & Best-Selling Author on 12+ Books on Health",
  },
  {
    name: "Dr. Amy Shah",
    tiktokView: "1.4M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/ec95f3f8f55f4c1eb679982d43bf091d/ec95f3f8f55f4c1eb679982d43bf091d.HD-1080p-4.8Mbps-38234483.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/influencer_drshah_profile.png?v=1730184660",
    link: "https://im8health.com/pages/dramy",
    description: "Double-Board Certified Physician & Host of Podcast “Save Yourself”",
  },
  {
    name: "Mona Sharma",
    tiktokView: "183K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/936fe1ac73a046a98e1ff7e701676228/936fe1ac73a046a98e1ff7e701676228.HD-1080p-7.2Mbps-38131732.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Monasharma.png?v=1730806896",
    link: "https://im8health.com/pages/mona-sharma",
    description: "Celebrity Nutritionist",
  },
  {
    name: "Elissa Goodman",
    tiktokView: "189K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/17fb74b0dd5d46e8ac4d1668b46b2134/17fb74b0dd5d46e8ac4d1668b46b2134.HD-1080p-7.2Mbps-38131729.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Ellipse_63.png?v=1727768801",
    link: "https://im8health.com/pages/elissa-goodman",
    description: "Holistic Nutritionist",
  },
  {
    name: "Dr. Bertha Baum",
    tiktokView: "229K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/db58a8d3630b47a597fb148aba8a1790/db58a8d3630b47a597fb148aba8a1790.HD-1080p-3.3Mbps-38232043.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825",
    link: "https://im8health.com/pages/dr-bertha-b",
    description: "Board-Certified Dermatologist",
  },
  {
    name: "Dr. Jennifer Tsai",
    tiktokView: "284K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/9d07478703af48a2903deb8e3fbd5076/9d07478703af48a2903deb8e3fbd5076.HD-1080p-4.8Mbps-38192239.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Jen.png?v=1730806923",
    link: "https://im8health.com/pages/dr-jen",
    description: "Board-Certified Optometrist & Nutrition Specialist",
  },
  {
    name: "Tim Biohacker",
    tiktokView: "484K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/1cfa80d2973d44619564e370d8fb9a5a/1cfa80d2973d44619564e370d8fb9a5a.HD-1080p-7.2Mbps-38201373.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002",
    link: "https://im8health.com/pages/tim-biohacker",
    description: "UK’s Leading Bio-hacker",
  },
  {
    name: "Dr. Robin Barrett",
    tiktokView: "1.4M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/0cdc39d7dda145e29a333ee5f43ed507/0cdc39d7dda145e29a333ee5f43ed507.HD-1080p-2.5Mbps-38319373.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801",
    link: "https://im8health.com/pages/dr-robin-b",
    description: "Doctor of Pharmacy & Wellness Coach",
  },
];

function experts_list() {
  return (
    <div className="Index_object_experts_list_main_new">
      <div className="Index_object_experts_list_inner_new">
        <div className="Index_object_experts_list_mainstatic_new">
          <div className="Index_object_experts_list_innerstatic_new">
            {/* Desktop Background */}
            <div className="Index_object_experts_list_innerstatic_maindesktop_new Desktop_only_new d-none d-md-block">
              <div className="Index_object_experts_list_innerstatic_innerdesktop_new">
                <div className="Index_object_experts_list_innerstatic_innerdesktop_imagevideo_new">
                  <img
                    src="//im8health.com/cdn/shop/files/approvedby_bg.jpg?v=1727065114"
                    alt=""
                    width="2880"
                    height="2112"
                    loading="lazy"
                    fetchPriority="auto"
                    className="Static_image_new"
                  />
                </div>
              </div>
            </div>
            {/* Mobile Background */}
            <div className="Index_object_experts_list_innerstatic_mainmobile_new Mobile_only_new d-block d-md-none">
              <div className="Index_object_experts_list_innerstatic_innermobile_new">
                <div className="Index_object_experts_list_innerstatic_innermobile_imagevideo_new">
                  <img
                    src="//im8health.com/cdn/shop/files/approvedby_mbg.jpg?v=1727065186"
                    alt=""
                    width="750"
                    height="1754"
                    loading="lazy"
                    fetchPriority="auto"
                    className="Static_image_new"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Index_object_experts_list_mainoverlay_new">
          <div className="Index_object_experts_list_inneroverlay_new">
            <div className="d-flex justify-content-center page-width">
              <div className="Index_object_experts_list_inneroverlay_maintitle_new">
                <div className="Common_title_new Index_object_experts_list_inneroverlay_innertitle_new">
                  <h2>Trusted by Physicians and Nutrition Experts</h2>
                </div>
              </div>
            </div>

            <div className="Index_object_real_results_innerdetail_mainloops_new">
              <Swiper
                modules={[FreeMode, Mousewheel]}
                slidesPerView={1.2}
                grabCursor={true}
                mousewheel={{ forceToAxis: true }}
                freeMode={{
                  enabled: true,
                  momentum: false,
                }}
                spaceBetween={16}
                breakpoints={{
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
                className="Index_object_real_results_innerdetail_innerloops_new"
              >
                {influencers.map((item, index) => (
                  <SwiperSlide key={index} className="Index_object_real_results_innerdetail_innerloops_mainboxs_new">
                    <a href={item.link} style={{ textDecoration: "none" }}>
                      <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_header">
                        <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_header_innerdetails">
                          <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_header_innerdetails_image">
                            <img src={item.img} alt={item.name} width="536" height="592" loading="lazy" />
                          </div>
                          <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_header_innerdetails_texts">
                            {item.name} ({item.tiktokView})
                          </div>
                        </div>
                      </div>

                      <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_new">
                        <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_parts_new">
                          <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_mainboths_new">
                            <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innerboths_new">
                              <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innerboths_imagevideo_new video_play_icon_new">
                                <video playsInline className="Static_video_new js-exclude video-loaded" loop muted preload="none" autoPlay>
                                  <source src={item.videoUrl} type="video/mp4" />
                                </video>
                              </div>
                            </div>
                          </div>

                          <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_maintexts_new">
                            <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innertexts_new">
                              <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innertexts_maininfos_new">
                                <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innertexts_innerinfos_new">
                                  <div className="metafield-rich_text_field">
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experts_list;