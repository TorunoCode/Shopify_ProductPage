import React from "react";
import "./comparison_table.scss";

const benefitComparisonDataEssen = [
  {
    title: "92 Nutrient-Rich Ingredients",
    x: { status: true },
    y: { status: true }
  },
  {
    title: "All-Day Energy & Focus",
    x: { status: true },
    y: { status: true }
  },
  {
    title: "Better Sleep Quality",
    x: { status: true },
    y: { status: true }
  },
  {
    title: "Digestive Health & Gut Support",
    x: { status: true },
    y: { status: true }
  },
  {
    title: "Immune System Protection",
    x: { status: true },
    y: { status: true }
  },
  {
    title: "Mental Clarity & Performance",
    x: { status: true },
    y: { status: true }
  }
];

const benefitComparisonDataLong = [
  {
    title: "10 Longevity Compounds",
    x: { status: false },
    y: { status: true }
  },
  {
    title: "Autophagy Cellular Cleanup Activation",
    x: { status: false },
    y: { status: true }
  },
  {
    title: "NMN NAD+ Cellular Restoration",
    x: { status: false },
    y: { status: true }
  },
  {
    title: "Targets All 12 Hallmarks of Aging",
    x: { status: false },
    y: { status: true }
  },
  {
    title: "Triple Senolytic Zombie Cell Removal",
    x: { status: false },
    y: { status: true }
  }
];

const pricingComparisonData = [
  {
    title: "Monthly Subscription",
    x: { status: "none", text: "$99" },
    y: { status: "none", text: "$196" }
  },
  {
    title: "Cost per Daily Serving",
    x: { status: "none", text: "$3" },
    y: { status: "none", text: "$7" }
  },
  {
    title: "Savings vs. Buying Separately",
    x: { status: "none", text: "-" },
    y: { status: "none", text: "$12/month", addClass: "beckham-comparison__pricing-value--highlight" }
  }
];

function comparison_table() {
  return (
    <div
      className="beckham-comparison-section"
      data-comparison-type="essentials"
    >
      <div className="page-width d-flex flex-column">
        <div className="beckham-comparison__header">
          <h2 className="beckham-comparison__title">
            Upgrade to the Beckham Stack
          </h2>

          <div className="beckham-comparison__save-badge">Save $12/ month</div>
        </div>

        <div className="beckham-comparison__table">
          <div className="beckham-comparison__header-row">
            <div className="beckham-comparison__header-cell beckham-comparison__header-cell--feature">
              <span className="beckham-comparison__header-label">Feature</span>
            </div>

            <div className="beckham-comparison__header-cell beckham-comparison__header-cell--product">
              <div className="beckham-comparison__header-image">
                <img
                  src="//im8health.com/cdn/shop/files/ess-up.png?v=1760679753&amp;width=300"
                  alt="Daily Ultimate Essentials"
                  srcset="//im8health.com/cdn/shop/files/ess-up.png?v=1760679753&amp;width=300 300w"
                  width="300"
                  height="223"
                  loading="eager"
                />
              </div>

              <h3 className="beckham-comparison__header-name">
                Daily Ultimate Essentials
              </h3>
            </div>

            <div className="beckham-comparison__header-cell beckham-comparison__header-cell--product">
              <div className="beckham-comparison__header-image">
                <img
                  src="//im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&amp;width=300"
                  alt="The Beckham Stack  (Essentials + Longevity)"
                  srcset="//im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&amp;width=300 300w"
                  width="300"
                  height="176"
                  loading="eager"
                />
              </div>

              <h3 className="beckham-comparison__header-name">
                The Beckham Stack (Essentials + Longevity)
              </h3>
            </div>
          </div>

          <div className="beckham-comparison__benefits-wrapper">
            <div className="beckham-comparison__benefit-section beckham-comparison__benefit-section--essentials">
              <div className="beckham-comparison__section-header">
                <h4 className="beckham-comparison__section-title">
                  Immediate Essentials Benefit
                </h4>
                <div className="beckham-comparison__column-heading">
                  Essentials
                </div>
                <div className="beckham-comparison__column-heading">
                  Beckham Stack
                </div>
              </div>

              {benefitComparisonDataEssen.map((item, index) => (
                <div className="beckham-comparison__benefit-row" key={index}>
                  <div className="beckham-comparison__benefit-name">
                    {item.title}
                  </div>
                  <div className="beckham-comparison__benefit-check">
                    {item.x.status && (
                      <svg
                        className="beckham-comparison__check-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#9B1B1F"
                          stroke="#9B1B1F"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M7 12L10.5 15.5L17 9"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <div className="beckham-comparison__benefit-check">
                    {item.y.status && (
                      <svg
                        className="beckham-comparison__check-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#9B1B1F"
                          stroke="#9B1B1F"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M7 12L10.5 15.5L17 9"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="beckham-comparison__benefit-section beckham-comparison__benefit-section--longevity">
              <div className="beckham-comparison__section-header">
                <h4 className="beckham-comparison__section-title">
                  Advanced Longevity Benefit
                </h4>
                <div className="beckham-comparison__column-heading">
                  
                </div>
                <div className="beckham-comparison__column-heading">
                  
                </div>
              </div>

              {benefitComparisonDataLong.map((item, index) => (
                <div className="beckham-comparison__benefit-row" key={index}>
                  <div className="beckham-comparison__benefit-name">
                    {item.title}
                  </div>
                  <div className="beckham-comparison__benefit-check">
                    {item.x.status ? (
                      <svg
                        className="beckham-comparison__check-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#9B1B1F"
                          stroke="#9B1B1F"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M7 12L10.5 15.5L17 9"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="beckham-comparison__x-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#E8E8E8"
                          stroke="#D0D0D0"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
                          stroke="#999999"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <div className="beckham-comparison__benefit-check">
                    {item.y.status ? (
                      <svg
                        className="beckham-comparison__check-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#9B1B1F"
                          stroke="#9B1B1F"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M7 12L10.5 15.5L17 9"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="beckham-comparison__x-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#E8E8E8"
                          stroke="#D0D0D0"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
                          stroke="#999999"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {pricingComparisonData.map((item, index) => (
              <div className="beckham-comparison__pricing-footer" key={index}>
                <div className="beckham-comparison__pricing-label">
                  {item.title}
                </div>
                <div className="beckham-comparison__pricing-value">
                  {item.x.text}
                </div>
                <div
                  className={`beckham-comparison__pricing-value ${
                    item.y.addClass ? item.y.addClass : ""
                  }`}
                >
                  {item.y.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="beckham-comparison__cta-section"></div>
      </div>
    </div>
  );
}

export default comparison_table;
