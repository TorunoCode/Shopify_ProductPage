import React from "react";
import "./mobileGrey.scss";

const mobileGrey = () => {
  return (
    <div className="product_judge-outer mobileGrey bg-white">
      <div className="page-width d-flex">
        
        <div className="d-flex flex-column-reverse flex-md-row product_expert-outer">
          <div>
            <div className="product_expert-content">
              <p className="product_subtitle">July 4th, 2025</p>
              <h2 className="product-section_title">
                Expert Advice from Dr. Emily Chen of a Premier New York Skin
                Clinic
              </h2>
              <div className="product-text">
                <p>
                  “Your nutrition plays a powerful role in your appearance. If
                  your body is missing key vitamins and nutrients, it can’t
                  process fat and upkeep healthy connective tissue, which is why
                  unprocessed fat flows up and starts pushing up against your
                  skin, forming bumps you know as cellulite.
                </p>
                <p>
                  SmoothSkin by Sculptique™ contains ingredients that are
                  scientifically proven to enhance microcirculation, boost
                  lymphatic drainage, and reduce inflammation, which restores
                  your tissue and breaks down the fat cells in your skin.”
                </p>
              </div>
              <div className="mt-3 text-left">
                <a
                  href="https://pay.trysculptique.com/lymphatic/checkout"
                  className="product_primary-btn "
                >
                  Try Lymphatic Drainage Risk-Free
                </a>

                <p className="product_primary-btn-footer">
                  <span>
                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" />
                  </span>
                  <span>60-Day Money-Back Guarantee</span>
                </p>
              </div>
            </div>
          </div>
          <div className="product_expert-media">
            <img
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default mobileGrey;
