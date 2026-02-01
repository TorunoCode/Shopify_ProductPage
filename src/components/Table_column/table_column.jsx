import React, { useState } from "react";
import "./table_column.scss";

function table_column() {
  const [expanded, setExpanded] = useState(false);
  const im8Data = [
    { status: true, text: "Superfoods, Greens, Fruits, Herbs", sub: "" },
    { status: true, text: "Clinical Dosed B Vitamins", sub: "" },
    { status: true, text: "30mcg Clinical Dosed Vitamin D3", sub: "" },
    { status: true, text: "40mcg Clinical Dosed Vitamin K2", sub: "" },
    { status: true, text: "100mg Clinical Dosed CoQ10", sub: "" },
    { status: true, text: "1000mg Clinical Dosed MSM", sub: "" },
    { status: true, text: "3g Prebiotic fiber", sub: "(50% more)" },
    {
      status: true,
      text: "900mg Clinical Dosed Vitamin C",
      sub: "(114% more)",
    },
    {
      status: true,
      text: "4.2mg Clinical Dosed Riboflavin",
      sub: "(110% more)",
    },
    { status: true, text: "65mg Magnesium", sub: "(150% more)" },
    { status: true, text: "70mcg Clinical Dosed Selenium", sub: "(250% more)" },
    {
      status: true,
      text: "100mcg Clinical Dosed Chromium",
      sub: "(300% more)",
    },
    { status: true, text: "1mg Clinical Dosed Copper", sub: "(413% more)" },
    { status: true, text: "3mg Clinical Dosed Manganese", sub: "(650% more)" },
    { status: true, text: "50mcg Clinical Dosed Molybdenum", sub: "" },
    { status: true, text: "150mcg Clinical Dosed Iodine", sub: "" },
    {
      status: true,
      text: "10b CFU Probiotics",
      sub: "B coagulans BC99®, B subtilis DE111®",
    },
    { status: true, text: "Postbiotics", sub: "FloraSMART® (25mg)" },
    { status: true, text: "Cell Rejuvenation Technology 8®", sub: "" },
    { status: true, text: "Stevia-free", sub: "(Fermented Sugarcane Extract)" },
    { status: true, text: "No Refrigeration", sub: "Shelf-stable Probiotics" },
    {
      status: true,
      text: "Branded Ingredients",
      sub: "Quatrefolic®, AstaPure®, DE111®, Bacillus BC99®, VegD3™, FloraSmart™, Nutralga®, Astapure®",
    },
  ];
  const competitorData = [
    { status: true, text: "Superfoods, Greens, Fruits, Herbs", sub: "" },
    { status: true, text: "Clinical Dosed B Vitamins", sub: "" },
    { status: false, text: "No Vitamin D3", sub: "" },
    { status: false, text: "Vitamin K2 dosage not disclosed", sub: "" },
    { status: false, text: "CoQ10 dosage not disclosed", sub: "" },
    { status: false, text: "No MSM", sub: "" },
    { status: false, text: "2g Prebiotic fiber", sub: "" },
    { status: false, text: "420mg Vitamin C", sub: "" },
    { status: false, text: "2mg Riboflavin", sub: "" },
    { status: false, text: "26mg Magnesium", sub: "" },
    { status: false, text: "20mcg Selenium", sub: "" },
    { status: false, text: "25mcg Chromium", sub: "" },
    { status: false, text: "195mcg Copper", sub: "" },
    { status: false, text: "400mcg Manganese", sub: "" },
    { status: false, text: "No Molybdenum", sub: "" },
    { status: false, text: "No Iodine", sub: "" },
    { status: false, text: "7.2b CFU Probiotics", sub: "" },
    { status: false, text: "No Postbiotics", sub: "" },
    { status: false, text: "No Proprietary Technology", sub: "" },
    { status: false, text: "Includes Stevia", sub: "" },
    { status: false, text: "Refrigeration Needed", sub: "" },
    { status: false, text: "None", sub: "" },
  ];
  return (
    <div className="Index_object_table_column_main_new">
      <div className="Index_object_table_column_inner_new">
        <div className="page-width text-center">
          <div className="Index_object_table_column_mainoverlay_new">
            <div className="Index_object_table_column_inneroverlay_new">
              <div className="Index_object_table_column_inneroverlay_maintitle_new">
                <div className="Common_title_new Index_object_table_column_inneroverlay_innertitle_new">
                  <h2>IM8: The New Gold Standard</h2>
                </div>
              </div>
              <div className="Index_object_table_column_inneroverlay_maintable_new">
                <div className="Index_object_table_column_inneroverlay_innertable_new">
                  <div className="Index_object_table_column_inneroverlay_innertable_innerright_maincolumn_new">
                    <div className={`Index_object_table_column_inneroverlay_innertable_innerright_innercolumn_new ${!expanded ? " border-radius-bottom-none" : ""}`}>
                      <div className="Index_object_table_column_inneroverlay_innertable_innerright_mainboths_new">
                        <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerboths_new">
                          <div className="Index_object_table_detail_inneranswers_innertable_innerleft_innerboxs_boths_image_new">
                            <img
                              src="//im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                              alt=""
                              width="170"
                              height="225"
                              loading="lazy"
                              fetchpriority="auto"
                              className="Static_image_new"
                            />
                          </div>
                          <div className="Index_object_tabs_table_detail_inneranswers_innertable_innerleft_innerboxs_boths_texts_new">
                            Daily Ultimate Essentials
                          </div>
                        </div>
                      </div>
                      <div className="Index_object_table_column_inneroverlay_innertable_innerright_mainloops_new">
                        <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerloops_new">
                          {im8Data.slice(0, expanded ? im8Data.length : 10).map((item, index) => (
                            <div
                              key={index}
                              className={`Index_object_table_column_inneroverlay_innertable_innerright_innerloops_mainboxs_new ${item.status ? "show" : "hide"}`}
                            >
                              <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerloops_innerboxs_new">
                                {/* Icon Tick Đỏ */}
                                <svg
                                  width="21"
                                  height="20"
                                  viewBox="0 0 21 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <ellipse
                                    cx="10.4883"
                                    cy="10.0002"
                                    rx="10"
                                    ry="9.7561"
                                    fill="#A40011"
                                  />
                                  <path
                                    d="M6.44531 10.2079L9.54815 13.114C12.2077 9.79279 14.424 6.88672 14.424 6.88672"
                                    stroke="#EFEFEF"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                  />
                                </svg>

                                <div>
                                  <span className="highlight">{item.text}</span>
                                  {item.sub && (
                                    <span
                                      className="detail"
                                      style={{
                                        display: "block",
                                        fontSize: "0.8em",
                                        opacity: 0.8,
                                      }}
                                    >
                                      {item.sub}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Index_object_table_column_inneroverlay_innertable_innerright_maincolumn_new ">
                    <div className={`Index_object_table_column_inneroverlay_innertable_innerright_innercolumn_new last_child ${!expanded ? " border-radius-bottom-none" : ""}`}>
                      <div className="Index_object_table_column_inneroverlay_innertable_innerright_mainboths_new last_child">
                        <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerboths_new">
                          <div className="Index_object_table_detail_inneranswers_innertable_innerleft_innerboxs_boths_image_new">
                            <img
                              src="//im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105"
                              alt=""
                              width="80"
                              height="121"
                              loading="lazy"
                              fetchpriority="auto"
                              className="Static_image_new"
                            />
                          </div>
                          <div className="Index_object_tabs_table_detail_inneranswers_innertable_innerleft_innerboxs_boths_texts_new">
                            Leading Greens Powder
                          </div>
                        </div>
                      </div>
                      <div className="Index_object_table_column_inneroverlay_innertable_innerright_mainloops_new competitor-side">
                        <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerloops_new">
                          {competitorData.slice(0, expanded ? competitorData.length : 10).map((item, index) => (
                            <div
                              key={index}
                              className="Index_object_table_column_inneroverlay_innertable_innerright_innerloops_mainboxs_new show"
                            >
                              <div className="Index_object_table_column_inneroverlay_innertable_innerright_innerloops_innerboxs_new">
                                {item.status ? (
                                  /* Icon Tick Xanh Đậm cho các mục đạt chuẩn */
                                  <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <ellipse
                                      cx="10.5"
                                      cy="10"
                                      rx="10"
                                      ry="9.8"
                                      fill="#18332A"
                                    />
                                    <path
                                      d="M6.5 10.2L9.6 13.1L14.5 6.9"
                                      stroke="white"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                ) : (
                                  /* Icon Dấu X Xám cho các mục thiếu hụt */
                                  <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <ellipse
                                      cx="10.5"
                                      cy="10"
                                      rx="10"
                                      ry="9.8"
                                      fill="#1E3B32"
                                      fillOpacity="0.44"
                                    />
                                    <path
                                      d="M7 6.5L14 13.5M7 13.5L14 6.5"
                                      stroke="white"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                )}

                                <div>
                                  <span className="highlight ag1">
                                    {item.text}
                                  </span>
                                  {item.sub && (
                                    <span className="detail">{item.sub}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`Index_object_table_column_see_more ${expanded ? "d-none" : ""}`}
                  id="Index_object_table_column_see_more"
                  onClick={() => setExpanded(true)}
                >
                  See More
                </div>
              </div>
              <div class="Index_object_table_column_inneroverlay_mainbutton_new">
                <div class="Index_object_table_column_inneroverlay_innerbutton_new d-flex justify-content-center">
                  <div
                    class="button open_Meta_supplement_popup"
                    id="homepage_comparison-chart_viewmore"
                  >
                    View Supplement Facts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default table_column;
