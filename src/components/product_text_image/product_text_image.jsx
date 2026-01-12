import React from "react";
import "./product_text_image.scss";

const product_text_image = () => {
  return (
    <div className="product_judge-outer">
      <div className="page-width">
        <div className="product_text-image">
          <div>
            <div className="product_textimage-content">
              <img
                loading="lazy"
                className="d-none d-sm-block product_text-image-reviews"
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
              />
              <img
                loading="lazy"
                className="d-block d-sm-none product_text-image-reviews"
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
              />
              <h2 className="product-section_title">
                Stop Masking Symptoms. Start Restoring Root Cause.
              </h2>
              <div className="product-text">
                <p>
                  You deserve to feel like yourself again. To wake up without
                  puffiness. To see your ankles. To look in the mirror and
                  recognize the vibrant woman staring back. To have energy for
                  the people you love.
                </p>
                <p>
                  You deserve a solution that actually works. Not temporary
                  relief. Not symptom masking. Complete lymphatic restoration.
                </p>
              </div>

              <img
                loading="lazy"
                className="d-block d-sm-none product_section-text-main-img"
                src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              />

              <div className="product_text-image-points"></div>
              <div className="text-left mt-4">
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
          <div className="product_textimage-media d-none d-sm-block">
            <img
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default product_text_image;
