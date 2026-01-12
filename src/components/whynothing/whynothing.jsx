import React, { useState } from "react";
import "./whynothing.scss";

const whynothing = () => {
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
      <div className="main_product-outer outer_how-nothing">
        <div className="page-width d-flex flex-column align-center justify-center">
          <div className="product_judge-container">
            <h2 className="product-section_title text-center mt-0">
              Why Nothing Has <span>Worked</span>
            </h2>
            <p className="product-section_text text-center"></p>
          </div>

          <div className="product_why-bloating-grid">
            <div className="product_why-nothing-cell">
              <div>
                <img src="//trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360" />
              </div>
              <div className="product_why-nothing-cell-inn">
                <h4>
                  You cut out gluten, dairy, sugar. You ate clean for months.
                </h4>
                <div className="product_why-nothing-pink">
                  <p className="product_why-nothing-subtitle">
                    <span>Why it failed</span>
                    <span>
                      <img
                        loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                      />
                    </span>
                  </p>
                  <p className="product_why-nothing-text">
                    Your diet only addressed what goes IN. It didn't fix your
                    body's broken ability to drain what's already there.
                  </p>
                </div>
              </div>
            </div>

            <div className="product_why-nothing-cell">
              <div>
                <img src="//trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359" />
              </div>
              <div className="product_why-nothing-cell-inn">
                <h4>You tried viral lymphatic drops from TikTok.</h4>
                <div className="product_why-nothing-pink">
                  <p className="product_why-nothing-subtitle">
                    <span>Why it failed</span>
                    <span>
                      <img
                        loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                      />
                    </span>
                  </p>
                  <p className="product_why-nothing-text">
                    They’re just pricey water with trace herbs. The “active
                    ingredients” are destroyed by stomach acid, and even if
                    absorbed, only act as a mild diuretic. No vessel repair, no
                    protein breakdown—just expensive urine.
                  </p>
                </div>
              </div>
            </div>

            <div className="product_why-nothing-cell">
              <div>
                <img src="//trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359" />
              </div>
              <div className="product_why-nothing-cell-inn">
                <h4>You got lymphatic massage or bought compression socks.</h4>
                <div className="product_why-nothing-pink">
                  <p className="product_why-nothing-subtitle">
                    <span>Why it failed</span>
                    <span>
                      <img
                        loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                      />
                    </span>
                  </p>
                  <p className="product_why-nothing-text">
                    Temporary manual movement. Within 24-48 hours, everything
                    backed up again because your vessels still can't pump on
                    their own.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="product_why-note-img">
            <img
              className="d-none d-sm-block"
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
            />
            <img
              className="d-block d-sm-none"
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
            />
          </div>

          <div className="btn_containe text-center mt-4">
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
              <span>60 day money-back guarantee</span>
            </p>
          </div>
        </div>
      </div>
      <div className="main_product-outer product_judge-outer">
        <div className="page-width d-flex flex-column align-center justify-center">
          <div className="product_judge-container">
            <h2 className="product-section_title text-center">
              <span>The 8-Ingredient System</span> That Restores What Hormones
              Once Maintained
            </h2>
            <p className="product-section_text text-center">
              Sculptique is the only formula that addresses ALL 6 mechanisms of
              lymphatic dysfunction simultaneously—not with symbolic doses, but
              with therapeutic amounts based on clinical research.
              <br />
              Not just moving fluid temporarily. Not just reducing inflammation.
              <strong>Complete restoration.</strong>
            </p>
          </div>
          <div className="product_lymph-ingr-table">
            <div className="product-lymph-ingredient"  onClick={()=>toggleAccordion(1)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Reactivate Lymphatic Pumps</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909"
                  />
                </div>
                <div>
                  <h5>Cleavers Extract (100mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(1) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Restores rhythmic vessel contractions that move lymph
                      through your system. Contains iridoids that "wake up"
                      muscle cells in vessel walls. 2024 study showed enhanced
                      immune cell activity for better waste clearance.
                    </p>
                    <p>
                      [Study: Enhanced NK cell activity in immunosuppressed
                      models]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(2)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Flush Excess Fluid</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908"
                  />
                </div>
                <div>
                  <h5>Dandelion Extract (250mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(2) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Proven gentle diuretic that increases fluid excretion
                      without harsh side effects. Human trial showed
                      statistically significant increase in urination frequency
                      (p&lt;0.05) and excretion ratio (p&lt;0.001).
                    </p>
                    <p>[Study: First human pilot study on diuretic effects]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(3)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Break Down Protein Clogs</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909"
                  />
                </div>
                <div>
                  <h5>Bromelain Powder (100mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(3) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Proteolytic enzyme that clears blockages preventing
                      drainage. Breaks down fibrin proteins creating "sludge" in
                      vessels. 2024 RCT showed significantly greater reductions
                      in swelling than placebo.
                    </p>
                    <p>
                      [Study: As effective as prescription NSAIDs for
                      inflammation]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(4)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Strengthen Vessel Walls</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909"
                  />
                </div>
                <div>
                  <h5>Rutin (100mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(4) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Reduces vessel permeability so fluid doesn't leak back
                      into tissues. Clinical trials showed average 4.2 cm
                      reduction in limb circumference over 6 months in
                      lymphedema patients.
                    </p>
                    <p>[Study: Systematic review of 1,643 participants]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(5)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Reduce Inflammation</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909"
                  />
                </div>
                <div>
                  <h5>Burdock Root Powder (200mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(5) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      &nbsp;Breaks the inflammation-congestion cycle. RCT showed
                      significantly decreased inflammatory markers IL-6 and
                      C-reactive protein (p&lt;0.001). Also supports hormonal
                      balance.
                    </p>
                    <p>[Study: 42-day trial in osteoarthritis patients]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient"onClick={()=>toggleAccordion(6)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Boost Immune Clearance</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909"
                  />
                </div>
                <div>
                  <h5>Echinacea Purpurea Extract (500mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(6) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Enhances lymphocyte activity for better waste removal.
                      Meta-analysis of 30 trials with 5,600+ participants showed
                      40% reduction in recurrent infections.
                    </p>
                    <p>[Study: Increased NK cell cytotoxic activity]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(7)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Support Metabolism</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909"
                  />
                </div>
                <div>
                  <h5>Kelp Extract (30mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(7) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Provides iodine for thyroid function and healthy metabolic
                      rate. Sluggish thyroid = sluggish lymphatic drainage.
                      Contains fucoxanthin shown to reduce body fat in human
                      trials.
                    </p>
                    <p>[Study: Dose-dependent increase in TSH levels]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-lymph-ingredient" onClick={()=>toggleAccordion(8)}>
              <p className="product_lymph-ingr-subtitle">
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
                </span>
                <span>Antioxidant Protection</span>
              </p>
              <img
                className="d-none d-sm-block product_lymph-main-img"
                loading="lazy"
                src="//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910"
              />

              <div className="product_lymph-ingr-thumb">
                <div className="d-block d-sm-none">
                  <img
                    className="product_lymph-main-img"
                    loading="lazy"
                    src="//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910"
                  />
                </div>
                <div>
                  <h5>Lemon Powder (50mg)</h5>
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
                </div>
              </div>
              <div className={`accordion-content-wrapper ${activeIndices.includes(8) ? "is-active" : ""}`}>
                <div className="product_tab-content">
                  <div className="product_lymph-ingr-content">
                    <p>
                      Protects vessels from oxidative damage. RCT showed 145%
                      improvement in vascular function (p&lt;0.001). Supports
                      circulation and metabolic health.
                    </p>
                    <p>[Study: Triple-masked trial in 90 participants]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product_lymph-ingr-table-small">
            <img
              className="d-none d-sm-block"
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"
            />
            <img
              className="d-block d-sm-none"
              loading="lazy"
              src="//trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default whynothing;
