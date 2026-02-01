import React from 'react';
import "./trusted_list.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FreeMode, Mousewheel, Autoplay } from 'swiper/modules';

const influencers = [
  {
    name: "Carmel Rodriguez",
    tiktokView: "341K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    link: "https://im8health.com/pages/carmel",
    description: "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day."
  },
  {
    name: "Tavi Castro",
    tiktokView: "4.8M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    link: "https://im8health.com/pages/tavi",
    description: "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water."
  },
  {
    name: "Dustin Poirier",
    tiktokView: "5.3M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218",
    link: "https://im8health.com/pages/dustin",
    description: "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp."
  },
  {
    name: "Tim Gray",
    tiktokView: "484K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875",
    link: "https://im8health.com/pages/tim",
    description: "Optimizing health through biohacking requires precision. IM8 provides a foundational support system for metabolic health and long-term vitality."
  },
  {
    name: "Carmel Rodriguez",
    tiktokView: "341K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    link: "https://im8health.com/pages/carmel",
    description: "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day."
  },
  {
    name: "Tavi Castro",
    tiktokView: "4.8M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    link: "https://im8health.com/pages/tavi",
    description: "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water."
  },
  {
    name: "Dustin Poirier",
    tiktokView: "5.3M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218",
    link: "https://im8health.com/pages/dustin",
    description: "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp."
  },
  {
    name: "Tim Gray",
    tiktokView: "484K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875",
    link: "https://im8health.com/pages/tim",
    description: "Optimizing health through biohacking requires precision. IM8 provides a foundational support system for metabolic health and long-term vitality."
  },
  {
    name: "Carmel Rodriguez",
    tiktokView: "341K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    link: "https://im8health.com/pages/carmel",
    description: "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day."
  },
  {
    name: "Tavi Castro",
    tiktokView: "4.8M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    link: "https://im8health.com/pages/tavi",
    description: "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water."
  },
  {
    name: "Dustin Poirier",
    tiktokView: "5.3M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218",
    link: "https://im8health.com/pages/dustin",
    description: "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp."
  },
  {
    name: "Tim Gray",
    tiktokView: "484K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875",
    link: "https://im8health.com/pages/tim",
    description: "Optimizing health through biohacking requires precision. IM8 provides a foundational support system for metabolic health and long-term vitality."
  },
  {
    name: "Carmel Rodriguez",
    tiktokView: "341K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    link: "https://im8health.com/pages/carmel",
    description: "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day."
  },
  {
    name: "Tavi Castro",
    tiktokView: "4.8M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    link: "https://im8health.com/pages/tavi",
    description: "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water."
  },
  {
    name: "Dustin Poirier",
    tiktokView: "5.3M",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218",
    link: "https://im8health.com/pages/dustin",
    description: "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp."
  },
  {
    name: "Tim Gray",
    tiktokView: "484K",
    videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    img: "https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875",
    link: "https://im8health.com/pages/tim",
    description: "Optimizing health through biohacking requires precision. IM8 provides a foundational support system for metabolic health and long-term vitality."
  }
];

function trusted_list() {
  return (
    <div className="Index_object_real_results_main_new Index_object_real_results_main_new_1">
      <div className="Index_object_real_results_inner_new">
        <div className="Index_object_real_results_mainstatic_new">
          <div className="Index_object_real_results_innerstatic_new Desktop_only_new d-none d-md-block">
            <div className="Index_object_real_results_innerstatic_imagevideo_new">
              <img 
                src="//im8health.com/cdn/shop/files/testimonials.png?v=1727769423" 
                alt="" 
                srcSet="//im8health.com/cdn/shop/files/testimonials.png?v=1727769423&amp;width=750 750w, //im8health.com/cdn/shop/files/testimonials.png?v=1727769423&amp;width=900 900w, //im8health.com/cdn/shop/files/testimonials.png?v=1727769423&amp;width=1080 1080w" 
                width="2928" 
                height="2054" 
                loading="lazy" 
                className="Static_image_new" 
              />
            </div>
          </div>
          <div className="Index_object_real_results_innerstatic_new Mobile_only_new d-block d-md-none">
            <div className="Index_object_real_results_innerstatic_imagevideo_new">
              <img 
                src="//im8health.com/cdn/shop/files/why_people_like_IM8.png?v=1727769483" 
                alt="" 
                srcSet="//im8health.com/cdn/shop/files/why_people_like_IM8.png?v=1727769483&amp;width=750 750w" 
                width="1500" 
                height="3656" 
                loading="lazy" 
                className="Static_image_new" 
              />
            </div>
          </div>
        </div>

        <div className="Index_object_real_results_maindetail_new">
          <div className="Index_object_real_results_innerdetail_new">
            <div className="Index_object_real_results_innerdetail_maintexts_new">
              <div className="Index_object_real_results_innerdetail_innertexts_new">
                <div className="Index_object_real_results_innerdetail_innertexts_maininfos_new">
                  <div className="Index_object_real_results_innerdetail_innertexts_innerinfos_new">
                   <svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_118_4001)"><path d="M8.49426 12.32C8.60019 12.256 8.73282 12.256 8.83875 12.32L12.9342 14.7918C13.1866 14.9442 13.498 14.7178 13.431 14.4307L12.3442 9.77193C12.3161 9.65143 12.357 9.52528 12.4506 9.44426L16.0694 6.30929C16.2922 6.11623 16.1731 5.75014 15.8793 5.72521L11.1148 5.32099C10.9916 5.31054 10.8843 5.23276 10.8361 5.11893L8.97341 0.724122C8.85855 0.453113 8.47446 0.453114 8.3596 0.724123L6.49694 5.11893C6.4487 5.23276 6.34141 5.31054 6.21821 5.32099L1.45371 5.72521C1.15991 5.75014 1.04077 6.11622 1.26364 6.30929L4.88244 9.44426C4.97596 9.52528 5.01691 9.65143 4.98879 9.77193L3.90197 14.4307C3.83499 14.7178 4.1464 14.9442 4.39884 14.7918L8.49426 12.32Z" fill="#A40011"></path></g><g clip-path="url(#clip1_118_4001)"><path d="M27.1608 12.32C27.2667 12.256 27.3993 12.256 27.5053 12.32L31.6007 14.7918C31.8531 14.9442 32.1645 14.7178 32.0975 14.4307L31.0107 9.77193C30.9826 9.65143 31.0236 9.52528 31.1171 9.44426L34.7359 6.30929C34.9587 6.11623 34.8396 5.75014 34.5458 5.72521L29.7813 5.32099C29.6581 5.31054 29.5508 5.23276 29.5026 5.11893L27.6399 0.724122C27.5251 0.453113 27.141 0.453114 27.0261 0.724123L25.1634 5.11893C25.1152 5.23276 25.0079 5.31054 24.8847 5.32099L20.1202 5.72521C19.8264 5.75014 19.7073 6.11622 19.9301 6.30929L23.5489 9.44426C23.6425 9.52528 23.6834 9.65143 23.6553 9.77193L22.5685 14.4307C22.5015 14.7178 22.8129 14.9442 23.0653 14.7918L27.1608 12.32Z" fill="#A40011"></path></g><g clip-path="url(#clip2_118_4001)"><path d="M45.8278 12.32C45.9337 12.256 46.0663 12.256 46.1722 12.32L50.2677 14.7918C50.5201 14.9442 50.8315 14.7178 50.7645 14.4307L49.6777 9.77193C49.6496 9.65143 49.6905 9.52528 49.7841 9.44426L53.4029 6.30929C53.6257 6.11623 53.5066 5.75014 53.2128 5.72521L48.4483 5.32099C48.3251 5.31054 48.2178 5.23276 48.1696 5.11893L46.3069 0.724122C46.192 0.453113 45.808 0.453114 45.6931 0.724123L43.8304 5.11893C43.7822 5.23276 43.6749 5.31054 43.5517 5.32099L38.7872 5.72521C38.4934 5.75014 38.3743 6.11622 38.5971 6.30929L42.2159 9.44426C42.3095 9.52528 42.3504 9.65143 42.3223 9.77193L41.2355 14.4307C41.1685 14.7178 41.4799 14.9442 41.7323 14.7918L45.8278 12.32Z" fill="#A40011"></path></g><g clip-path="url(#clip3_118_4001)"><path d="M64.4943 12.32C64.6002 12.256 64.7328 12.256 64.8387 12.32L68.9342 14.7918C69.1866 14.9442 69.498 14.7178 69.431 14.4307L68.3442 9.77193C68.3161 9.65143 68.357 9.52528 68.4506 9.44426L72.0694 6.30929C72.2922 6.11623 72.1731 5.75014 71.8793 5.72521L67.1148 5.32099C66.9916 5.31054 66.8843 5.23276 66.8361 5.11893L64.9734 0.724122C64.8585 0.453113 64.4745 0.453114 64.3596 0.724123L62.4969 5.11893C62.4487 5.23276 62.3414 5.31054 62.2182 5.32099L57.4537 5.72521C57.1599 5.75014 57.0408 6.11622 57.2636 6.30929L60.8824 9.44426C60.976 9.52528 61.0169 9.65143 60.9888 9.77193L59.902 14.4307C59.835 14.7178 60.1464 14.9442 60.3988 14.7918L64.4943 12.32Z" fill="#A40011"></path></g><g clip-path="url(#clip4_118_4001)"><path d="M83.1608 12.32C83.2667 12.256 83.3993 12.256 83.5053 12.32L87.6007 14.7918C87.8531 14.9442 88.1645 14.7178 88.0975 14.4307L87.0107 9.77193C86.9826 9.65143 87.0236 9.52528 87.1171 9.44426L90.7359 6.30929C90.9587 6.11623 90.8396 5.75014 90.5458 5.72521L85.7813 5.32099C85.6581 5.31054 85.5508 5.23276 85.5026 5.11893L83.6399 0.724122C83.5251 0.453113 83.141 0.453114 83.0261 0.724123L81.1634 5.11893C81.1152 5.23276 81.0079 5.31054 80.8847 5.32099L76.1202 5.72521C75.8264 5.75014 75.7073 6.11622 75.9301 6.30929L79.5489 9.44426C79.6425 9.52528 79.6834 9.65143 79.6553 9.77193L78.5685 14.4307C78.5015 14.7178 78.8129 14.9442 79.0653 14.7918L83.1608 12.32Z" fill="#A40011"></path></g><defs><clipPath id="clip0_118_4001"><rect width="16" height="16" fill="white" transform="translate(0.666504)"></rect></clipPath><clipPath id="clip1_118_4001"><rect width="16" height="16" fill="white" transform="translate(19.333)"></rect></clipPath><clipPath id="clip2_118_4001"><rect width="16" height="16" fill="white" transform="translate(38)"></rect></clipPath><clipPath id="clip3_118_4001"><rect width="16" height="16" fill="white" transform="translate(56.6665)"></rect></clipPath><clipPath id="clip4_118_4001"><rect width="16" height="16" fill="white" transform="translate(75.333)"></rect></clipPath></defs>
                          </svg> 
                    Feel The Difference
                  </div>
                </div>
                <div className="Index_object_real_results_innerdetail_innertexts_maintitle_new">
                  <div className="Common_title_new Index_object_real_results_innerdetail_innertexts_innertitle_new">
                    <h2 className='d-none d-md-block'>What Our IM8 Ambassadors Are Saying</h2>
                    <h2 className='d-block d-md-none'>What Our <br/>IM8 Ambassadors <br/>Are Saying</h2>
                  </div>
                </div>
              </div>
            </div>

          <div className="Index_object_real_results_innerdetail_mainloops_new">
  <Swiper
    modules={[FreeMode, Mousewheel, Autoplay]}
          slidesPerView={1.2}
          loop={true} // Kích hoạt cuộn vô hạn
          grabCursor={true} // Hiển thị bàn tay khi di chuột vào
          mousewheel={{ forceToAxis: true }} // Cho phép dùng con trỏ chuột/trackpad để cuộn
          freeMode={{
    enabled: true,
    momentum: false, // Tắt đà để chạy đều như marquee
  }}
          speed={10000} // Tốc độ trượt (ms), càng lớn càng chậm
        autoplay={{
          delay: 0, // Không có khoảng trễ giữa các lần trượt
        }}
        spaceBetween={16}
        breakpoints={{
          // 1024px and up (Desktop)
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          // 768px and up (Tablet)
          768: {
            slidesPerView: 4,
            spaceBetween: 15
          }
        }}
        className="Index_object_real_results_innerdetail_innerloops_new Index_object_experts_list_slider"
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
                <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innertexts_innersides_new">
                  <div className="Index_object_real_results_innerdetail_innerloops_innerboxs_innertexts_innersides_iconstar_new">
                    <svg width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                  <path d="M5.50962 9.47932C5.58907 9.43137 5.68854 9.43137 5.76799 9.47932L8.83955 11.3332C9.02888 11.4475 9.26244 11.2777 9.2122 11.0624L8.39708 7.5683C8.376 7.47793 8.40671 7.38331 8.47685 7.32255L11.1909 4.97132C11.3581 4.82652 11.2687 4.55196 11.0484 4.53326L7.47502 4.2301C7.38262 4.22226 7.30216 4.16392 7.26597 4.07855L5.86898 0.782447C5.78283 0.579191 5.49477 0.579191 5.40862 0.782448L4.01163 4.07855C3.97545 4.16392 3.89498 4.22226 3.80259 4.2301L0.229213 4.53326C0.0088571 4.55196 -0.0804949 4.82652 0.0866545 4.97132L2.80075 7.32255C2.87089 7.38331 2.90161 7.47793 2.88052 7.5683L2.06541 11.0624C2.01517 11.2777 2.24873 11.4475 2.43805 11.3332L5.50962 9.47932Z" fill="#A40011"></path>
                                                  <path d="M18.5096 9.47932C18.5891 9.43137 18.6885 9.43137 18.768 9.47932L21.8395 11.3332C22.0289 11.4475 22.2624 11.2777 22.2122 11.0624L21.3971 7.5683C21.376 7.47793 21.4067 7.38331 21.4768 7.32255L24.1909 4.97132C24.3581 4.82652 24.2687 4.55196 24.0484 4.53326L20.475 4.2301C20.3826 4.22226 20.3021 4.16392 20.266 4.07855L18.869 0.782447C18.7828 0.579191 18.4948 0.579191 18.4086 0.782448L17.0116 4.07855C16.9754 4.16392 16.895 4.22226 16.8026 4.2301L13.2292 4.53326C13.0088 4.55196 12.9195 4.82652 13.0866 4.97132L15.8007 7.32255C15.8709 7.38331 15.9016 7.47793 15.8805 7.5683L15.0654 11.0624C15.0152 11.2777 15.2487 11.4475 15.438 11.3332L18.5096 9.47932Z" fill="#A40011"></path>
                                                  <path d="M31.5096 9.47932C31.589 9.43137 31.6885 9.43137 31.768 9.47932L34.8395 11.3332C35.0289 11.4475 35.2624 11.2777 35.2122 11.0624L34.3971 7.5683C34.376 7.47793 34.4067 7.38331 34.4768 7.32255L37.1909 4.97132C37.3581 4.82652 37.2687 4.55196 37.0484 4.53326L33.475 4.2301C33.3826 4.22226 33.3021 4.16392 33.266 4.07855L31.869 0.782447C31.7828 0.579191 31.4948 0.579191 31.4086 0.782448L30.0116 4.07855C29.9754 4.16392 29.895 4.22226 29.8026 4.2301L26.2292 4.53326C26.0088 4.55196 25.9195 4.82652 26.0866 4.97132L28.8007 7.32255C28.8709 7.38331 28.9016 7.47793 28.8805 7.5683L28.0654 11.0624C28.0151 11.2777 28.2487 11.4475 28.438 11.3332L31.5096 9.47932Z" fill="#A40011"></path>
                                                  <path d="M44.5096 9.47932C44.589 9.43137 44.6885 9.43137 44.768 9.47932L47.8395 11.3332C48.0288 11.4475 48.2624 11.2777 48.2122 11.0624L47.3971 7.5683C47.376 7.47793 47.4067 7.38331 47.4768 7.32255L50.1909 4.97132C50.3581 4.82652 50.2687 4.55196 50.0484 4.53326L46.475 4.2301C46.3826 4.22226 46.3021 4.16392 46.2659 4.07855L44.8689 0.782447C44.7828 0.579191 44.4947 0.579191 44.4086 0.782448L43.0116 4.07855C42.9754 4.16392 42.8949 4.22226 42.8026 4.2301L39.2292 4.53326C39.0088 4.55196 38.9195 4.82652 39.0866 4.97132L41.8007 7.32255C41.8709 7.38331 41.9016 7.47793 41.8805 7.5683L41.0654 11.0624C41.0151 11.2777 41.2487 11.4475 41.438 11.3332L44.5096 9.47932Z" fill="#A40011"></path>
                                                  <path d="M57.5096 9.47932C57.589 9.43137 57.6885 9.43137 57.7679 9.47932L60.8395 11.3332C61.0288 11.4475 61.2624 11.2777 61.2122 11.0624L60.397 7.5683C60.376 7.47793 60.4067 7.38331 60.4768 7.32255L63.1909 4.97132C63.3581 4.82652 63.2687 4.55196 63.0484 4.53326L59.475 4.2301C59.3826 4.22226 59.3021 4.16392 59.2659 4.07855L57.8689 0.782447C57.7828 0.579191 57.4947 0.579191 57.4086 0.782448L56.0116 4.07855C55.9754 4.16392 55.8949 4.22226 55.8025 4.2301L52.2292 4.53326C52.0088 4.55196 51.9195 4.82652 52.0866 4.97132L54.8007 7.32255C54.8709 7.38331 54.9016 7.47793 54.8805 7.5683L54.0654 11.0624C54.0151 11.2777 54.2487 11.4475 54.438 11.3332L57.5096 9.47932Z" fill="#A40011"></path>
                                                </svg>
                  </div>
                </div>
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

export default trusted_list;