import React, { useState } from "react";
import "./faq.scss";

const faq = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove if exists (Close)
          : [...prev, index] // Add if not exists (Open)
    );
  };

  return (
    <div>
      <div className="product_judge-outer bg-white">
        <div className="page-width d-flex flex-column">
          <h2 className="product-section_title text-center">
            Frequently Asked Questions
          </h2>
          <div className="product_tab-block_out product_faq_container">
            {/* Tab 1 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(0) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              <div className="product_tab-thumb">
                <p>
                  How is this different from lymphatic drops I saw on TikTok?
                </p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>

              {/* We keep this in the DOM always for smooth animation */}
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(0) ? "pt-3" : ""
                  }`}
                >
                  <p>
                    Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.
                  </p>
                  <p>Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.</p>
                </div>
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(1) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <div className="product_tab-thumb">
                <p> Why didn't my diet changes work?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(1) ? "pt-3" : ""
                  }`}
                >
                  <p>
                    Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(2) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              <div className="product_tab-thumb">
                <p>How long until I see results?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(2) ? "pt-3" : ""
                  }`}
                >
                  <p>Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.</p>
                </div>
              </div>
            </div>
            {/* Tab 4 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(4) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(4)}
            >
              <div className="product_tab-thumb">
                <p>Is this safe? Any side effects?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(4) ? "pt-3" : ""
                  }`}
                >
                  <p>Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.
                  </p>
                </div>
              </div>
            </div>
            {/* Tab 5 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(5) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(5)}
            >
              <div className="product_tab-thumb">
                <p>Can I take this with other supplements?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(5) ? "pt-3" : ""
                  }`}
                >
                  <p>Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 6 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(6) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(6)}
            >
              <div className="product_tab-thumb">
                <p>How do I use it?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(6) ? "pt-3" : ""
                  }`}
                >
                  <p>Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.
                  </p>
                </div>
              </div>
            </div>
            {/* Tab 7 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(7) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(7)}
            >
              <div className="product_tab-thumb">
                <p>What if it doesn't work for me?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(7) ? "pt-3" : ""
                  }`}
                >
                  <p>You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.
                  </p>
                </div>
              </div>
            </div>
            {/* Tab 8 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(8) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(8)}
            >
              <div className="product_tab-thumb">
                <p>Where is this manufactured?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(8) ? "pt-3" : ""
                  }`}
                >
                  <p>Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 9 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(9) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(9)}
            >
              <div className="product_tab-thumb">
                <p>Why isn't this in stores?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(9) ? "pt-3" : ""
                  }`}
                >
                  <p>Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 10 */}
            <div
              className={`product_tab-block px-0 px-md-3 ${
                activeIndices.includes(10) ? "is-active" : ""
              }`}
              onClick={() => toggleAccordion(10)}
            >
              <div className="product_tab-thumb">
                <p>Is this vegan/gluten-free?</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
              </div>
              <div className="accordion-content-wrapper">
                <div
                  className={`product_tab-content ${
                    activeIndices.includes(10) ? "pt-3" : ""
                  }`}
                >
                  <p>Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Tabs  */}
          <div className="text-center mt-4">
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
      <div className="product_judge-outer bg-white">
        <div className="page-width d-flex flex-column">
          <div className="product_stats-outer d-flex">
            <div className="w-100">
              <div className="product_expert-content">
                <h2 className="product-section_title">
                  We’re On A Mission To Help 100,000,000 Women Visibly,
                  Naturally Get Rid Of Bloating…And Feel Like Themselves Again
                </h2>
                <div className="product-text">
                  <p>Here's where we're at right now:</p>
                </div>
                <img
                  loading="lazy"
                  className="d-block d-sm-none"
                  src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                />
                <img
                  loading="lazy"
                  className="d-none d-sm-block"
                  src="//trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
                />
                <img
                  loading="lazy"
                  className="d-block d-sm-none"
                  src="//trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
                />
              </div>
            </div>
            <div className="product_expert-media d-none d-sm-block w-70">
              <img
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
