import React from 'react'
import "./advisor_list.scss"

const advisorList = [
  {
    image: "https://im8health.com/cdn/shop/files/Frame_1000004731.png?v=1727767462",
    name: "Prof. Suzanne Devkota",
    title: "Director of Cedars-Sinai Human Microbiome Research Institute",
    description: "Prof. Suzanne Devkota is a leading expert in microbiome research and its impact on human health, with over 15 years of experience in the field. She is an Associate Professor at Cedars-Sinai Medical Center and the Director of the Microbiome Research Institute. Her groundbreaking work focuses on understanding the role of the gut microbiome in chronic diseases, including inflammatory bowel disease, obesity, and diabetes."
  },
  {
    image: "https://im8health.com/cdn/shop/files/Frame_1000004729.png?v=1727767462",
    name: "Dr. James L. Green",
    title: "Former Chief Scientist of NASA",
    description: "Dr. James L. Green is the former Chief Scientist of NASA, where he dedicated an impressive 42 years to advancing space science and exploration. He contributed to numerous groundbreaking missions, including the Mars Rover landings and the Juno mission to Jupiter. His work at NASA also included leveraging space research for health innovations, such as studying the effects of space travel on the human body and accelerated aging."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298",
    name: "Dr. Dawn Mussallem",
    title: "CMO of Fountain Life & Integrative Oncologist at Mayo Clinic",
    description: "Dr. Dawn Mussallem is a consultant in the Diagnostic Breast Center and a consultant in the Division of Hematology Oncology at Mayo Clinic. She is the CMO of Fountain Life and is a board-certified lifestyle medicine professional who serves as the Medical Director of the Mayo Clinic Humanities in Medicine program. As a cancer survivor herself, she is uniquely passionate about helping patients achieve health and well-being through integrative and lifestyle medicine."
  },
  {
    image: "https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665&width=900",
    name: "Dr. James DiNicolantonio",
    title: "Cardiovascular Research Scientist and Doctor of Pharmacy",
    description: "Dr. James DiNicolantonio is a well-known cardiovascular research scientist and doctor of pharmacy. A respected figure in the health and wellness community, he is a prolific author of several best-selling books, including 'The Salt Fix' and 'The Longevity Solution'. His research focuses on the impact of nutrition, minerals, and lifestyle on cardiovascular health and overall longevity."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_London_headshot.jpg?v=1741755281",
    name: "Dr. Jeremy London",
    title: "Board Certified Cardiovascular Surgeon",
    description: "Dr. Jeremy London is a board-certified cardiovascular surgeon with decades of experience performing complex heart and vascular surgeries. He is a strong advocate for heart disease prevention through education and healthy lifestyle choices. He is also a prominent health influencer, sharing his medical expertise and insights on social media to empower individuals to take control of their heart health."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_Shah_headshot.jpg?v=1741754337",
    name: "Dr. Amy Shah",
    title: "Double-Board Certified Physician & Host of Podcast “Save Yourself”",
    description: "Dr. Amy Shah is a double-board certified physician with training from Cornell, Columbia, and Harvard Universities. She is a world-renowned expert in nutrition and medical wellness. Her expertise lies in helping people improve their health through gut health, hormone balance, and intermittent fasting. She is also the author of best-selling books and the host of the popular podcast 'Save Yourself'."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_Suppiah_headshot.jpg?v=1750043459",
    name: "Dr. Ara Suppiah",
    title: "Performance Strategist, Sports Physician, Creator of Functional Sports Medicine",
    description: "Dr. Ara Suppiah is a world-renowned performance strategist and sports physician who works with some of the world's top professional athletes. He is the creator of Functional Sports Medicine, a unique approach that combines advanced diagnostics with personalized interventions to optimize human performance and longevity. He serves as the Chief Medical Analyst for NBC Sports and the Golf Channel."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_DarshanShah_headshot.jpg?v=1750043459",
    name: "Dr. Darshan Shah",
    title: "Board Certified Surgeon & Physician, CEO and Founder of Next Health",
    description: "Dr. Darshan Shah is a board-certified surgeon and physician, and the founder and CEO of Next Health, a leading health optimization and longevity center. He is a pioneer in the field of health optimization medicine, focusing on using data and advanced biotechnology to help individuals achieve peak performance and extend their healthspan. He is also a best-selling author and a frequent speaker on longevity and wellness."
  },
  {
    image: "https://im8health.com/cdn/shop/files/sab_Hill_headshot.jpg?v=1750043459",
    name: "Simon Hill",
    title: "MSc, BSc, Nutritionist, Physiologist, Author and Podcast Host",
    description: "Simon Hill is a nutritionist, physiologist, and the author of the best-selling book 'The Proof is in the Plants'. He is the host of 'The Proof' podcast, where he discusses the latest scientific research on nutrition and lifestyle to help people live longer, healthier lives. His work emphasizes the importance of evidence-based nutrition and its impact on both individual health and the health of the planet."
  }
];

function advisor_list() {
  return (
    <div className="Index_object_advisor_list_main_new"><div className="Index_object_advisor_list_mainstatic_new">
        
          <div className="Index_object_advisor_list_innerstatic_new Desktop_only_new d-none d-md-block"><div className="Index_object_advisor_list_innerstatic_imagevideo_new">
                <img src="//im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898" alt="" srcset="//im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=750 750w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=900 900w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=1080 1080w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=1296 1296w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=1512 1512w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=1728 1728w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=1944 1944w, //im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&amp;width=2048 2048w" width="2880" height="1722" loading="lazy" fetchpriority="auto" className="Static_image_new"/>
              </div></div>
          <div className="Index_object_advisor_list_innerstatic_new Mobile_only_new d-block d-md-none"><div className="Index_object_advisor_list_innerstatic_imagevideo_new">
                <img src="//im8health.com/cdn/shop/files/science-min.jpg?v=1727597901" alt="" srcset="//im8health.com/cdn/shop/files/science-min.jpg?v=1727597901&amp;width=750 750w" width="750" height="2628" loading="lazy" fetchpriority="auto" className="Static_image_new"/>
              </div></div></div><div className="page-width">
      <div className="Index_object_advisor_list_inner_new">
        <div className="Index_object_advisor_list_detail_new"><div className="Index_object_advisor_list_detail_1_new">
              <div className="Index_object_advisor_list_detail_1_boths_new"><div className="Index_object_advisor_list_detail_1_boths_maintexts_new">
                    <div className="Index_object_advisor_list_detail_1_boths_innertexts_new">
                      <h4>Driven by Science</h4>
                    </div>
                  </div><div className="Index_object_advisor_list_detail_1_boths_maintitle_new">
                    <div className="Common_title_new Index_object_advisor_list_detail_1_boths_innertitle_new">
                      <h2>Meet The Brilliant Minds Behind IM8</h2>
                    </div>
                  </div><div className="Index_object_advisor_list_detail_1_boths_maininfos_new">
                    <div className="Index_object_advisor_list_detail_1_boths_innerinfos_new">
                      <div className="metafield-rich_text_field"><p>An unparalled collaboration between academia, medicine, and space science.</p></div>
                    </div>
                  </div></div>
            </div><div className="Index_object_advisor_list_detail_2_new">
              <div className="Index_object_advisor_list_detail_2_loops_new video_play_list_new">
                {advisorList.map((item, index) => (
                  <div className="Index_object_advisor_list_detail_2_loops_mainboxs_new" key={index}>
                    <div className="Index_object_advisor_list_detail_2_loops_innerboxs_new">
                      <div className="Index_object_advisor_list_detail_2_loops_innerboxs_mainsides_new">
                        <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_new">
                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_mainleft_new">
                            <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerleft_new">
                              <img src={item.image} alt={item.name} loading="lazy" fetchpriority="auto" className="Static_image_new" />
                            </div>
                            <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_mainleft_icons_new">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_142_1201)">
                                  <g filter="url(#filter0_b_142_1201)">
                                    <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fill-opacity="0.8"></path>
                                    <path d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z" stroke="#50000B"></path>
                                  </g>
                                  <path d="M33 24H15" stroke="#50000B" stroke-width="2" stroke-linecap="square"></path>
                                  <path d="M24 15V33" stroke="#50000B" stroke-width="2" stroke-linecap="square"></path>
                                </g>
                                <defs>
                                  <filter id="filter0_b_142_1201" x="-12" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"></feGaussianBlur>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_142_1201"></feComposite>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_142_1201" result="shape"></feBlend>
                                  </filter>
                                  <clipPath id="clip0_142_1201">
                                    <rect width="48" height="48" fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_mainright_new">
                            <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerright_new">
                              <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerright_maintitle_new">
                                <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerright_innertitle_new">
                                  <h3>{item.name}</h3>
                                </div>
                              </div>
                              <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerright_maininfos_new">
                                <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innersides_innerright_innerinfos_new">
                                  <div className="metafield-rich_text_field">
                                    <p>{item.title}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Index_object_advisor_list_detail_2_loops_innerboxs_mainpopup_new">
                        <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_new">
                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_mainclose_new">
                            <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerclose_new">
                              <svg className="Desktop_only_new d-none d-md-block" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_1128)">
                                  <path d="M25.428 6.5719L6.5718 25.4281" stroke="#50000B" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                                  <path d="M25.4282 25.4281L6.57202 6.5719" stroke="#50000B" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3_1128">
                                    <rect width="32" height="32" fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg className="Mobile_only_new d-block d-md-none" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_7713)">
                                  <g filter="url(#filter0_b_3_7713)">
                                    <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fill-opacity="0.8"></path>
                                    <path d="M24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974L24 0.541158Z" stroke="#50000B"></path>
                                  </g>
                                  <path d="M30.3644 30.3639L17.6365 17.636" stroke="#50000B" stroke-width="2" stroke-linecap="square"></path>
                                  <path d="M30.3644 17.636L17.6365 30.3639" stroke="#50000B" stroke-width="2" stroke-linecap="square"></path>
                                </g>
                                <defs>
                                  <filter id="filter0_b_3_7713" x="-12" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"></feGaussianBlur>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3_7713"></feComposite>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3_7713" result="shape"></feBlend>
                                  </filter>
                                  <clipPath id="clip0_3_7713">
                                    <rect width="48" height="48" fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="Index_object_advisor_popup_scroll">
                            <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_mainrows_new">
                              <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_new">
                                <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_mainboths_new">
                                  <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerboths_new">
                                    <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerboths_mainimage_new">
                                      <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerboths_innerimage_new">
                                        <img src={item.image} alt="" loading="lazy" fetchpriority="auto" className="Static_image_new" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_maintexts_new">
                                  <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innertexts_new optiscroll is-enabled">
                                    <div className=" optiscroll-content">
                                      <div className="optiscroll_inner_new">
                                        <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerboths_maintitle_new">
                                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innerboths_innertitle_new">
                                            <h3>{item.name}</h3>
                                          </div>
                                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innertexts_innerinfos_new">
                                            <div className="metafield-rich_text_field">
                                              <p>{item.title}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innertexts_mainlists_new">
                                          <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innertexts_innerlists_new">
                                            <div className="metafield-rich_text_field">
                                              <p>{item.description}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="optiscroll-v">
                                      <b className="optiscroll-vtrack"></b>
                                    </div>
                                    <div className="optiscroll-h">
                                      <b className="optiscroll-htrack"></b>
                                    </div>
                                  </div>
                                </div>
                                <div className="Index_object_advisor_list_detail_2_loops_innerboxs_innerpopup_innerrows_innertexts_button_new">
                                  <a href="#" className="button">
                                    learn more
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div></div>  
      </div>
    </div>
  </div>
  )
}

export default advisor_list;
