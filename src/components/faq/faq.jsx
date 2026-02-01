import React, { useState } from "react";
import "./faq.scss";
import { motion, AnimatePresence } from "framer-motion";

const faqListData = [
  {
    question: "What is IM8?",
    answer: [
      "IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence.",
      "Combining cutting-edge science with nature's most potent ingredients, IM8 delivers a holistic, science-backed approach to health, empowering you to live your most vibrant life."
    ]
  },
  {
    question: "What is David Beckham's involvement in IM8?",
    answer: [
      "David Beckham is a co-founding partner of IM8, driven by his commitment to simplifying wellness. After years of working with top medical professionals and nutrition experts, David wanted to make core nutrition more accessible. In collaboration with the Prenetics team and world-class scientists, IM8 was developed to deliver essential nutrients in a simple and effective way. David's vision for IM8 is to provide best-in-class core nutrition for today and tomorrow, making it easy for everyone to prioritize their health."
    ]
  },
  {
    question: "Who is on the IM8 Scientific Advisory Board?",
    answer: [
      "The IM8 Scientific Advisory Board comprises distinguished professionals with impressive backgrounds:",
      "Dr. Dawn Mussallem, a renowned oncologist at the Mayo Clinic, brings her expertise in integrative and lifestyle medicine.",
      "Dr. James L. Green, the former Chief Scientist at NASA, has an extensive career in space and planetary science.",
      "Dr. David Katz,is a globally recognized preventive medicine specialist and the founding director of the Yale-Griffin Prevention Research Center.",
      "Prof. Suzanne Devkota serves as an Associate Professor and Director of the Microbiome Research Institute at Cedars-Sinai Medical Center, specializing in gut health and microbiome research.",
      "Prof. Stephen Anton is a Professor and Chief of the Division of Clinical Research at the University of Florida's Department of Aging and Geriatric Research, focusing on metabolism and healthy aging.",
      "Dr. James DiNicolantonio is a cardiovascular research scientist and Doctor of Pharmacy, known for his influential work in the field of heart health and evidence-based nutrition.",
      "Prof. Ock Chun is a distinguished expert in nutritional sciences at University of Connecticut with over 25 years of experience in the field.",
      "Their combined academic credentials and scientific expertise form the backbone of IM8's innovation and product development."
    ]
  },
  {
    question: "What are the main benefits of IM8 Daily Essentials + Hydration?",
    answer: [
      "IM8 Daily Essentials is your all-in-one solution, replacing the need for 16 supplements, targeting eight key areas of health: Energy, Immunity, Cognitive Function, Digestion, Cardiovascular Health, Hydration, Nourishment, and Cellular Renewal. With 92 carefully selected premium ingredients, including CoQ10 (100mg) for heart health and MSM (1,000mg) for joint support, IM8 Daily Essentials makes it easier to live a healthier, more vibrant life. Plus, it tastes great, so it's something you'll look forward to each day."
    ]
  },
  {
    question: "What does IM8 Daily Ultimate Essentials taste like?",
    answer: [
      "We've worked hard to make sure IM8 Daily Essentials is something you enjoy drinking every day. Experience a delightful blend of flavors with earthy undertones, complemented by a subtle tartness and a hint of chocolate. The flavor then culminates in a smooth finish of acai and mixed berries.",
      "For a more robust flavor, use less water, or add more water for a delicate, lighter taste. This balance of flavors makes IM8 Daily Essentials both refreshing and satisfying, turning your daily supplement into an enjoyable part of your routine."
    ]
  },
  {
    question: "What countries do you currently ship to?",
    answer: [
      "IM8 currently ships to 31 countries (with free shipping for all subscriptions to the United States, United Kingdom, Canada, Singapore and Hong Kong), including but not limited to the United States, Canada, United Kingdom, Australia, and many countries across Europe, Asia, and South America.",
      "Please note that international shipping rates vary by country and will be reflected during checkout. We do not add any margins to the shipping cost—what you see is the direct charge from our shipping provider."
    ]
  }
];

const faq = () => {
    const [activeIndices, setActiveIndices] = useState([]);
  const toggleAccordion = (index) => {
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove if exists (Close)
          : [...prev, index], // Add if not exists (Open)
    );
  };
  return (
    <div className="Index_faq_accordion_lists_main_new">
      <div className="Index_faq_accordion_lists_inner_new">
        <div className="Index_faq_accordion_lists_sides_new">
          <div className="Index_faq_accordion_lists_sides_mainleft_new">
            <div className="Index_faq_accordion_lists_sides_innerleft_new">
              <div className="Index_faq_accordion_lists_sides_innerleft_maintitle_new">
                <div className="Common_title_new Index_faq_accordion_lists_sides_innerleft_innertitle_new">
                  <h2>FAQs</h2>
                </div>
              </div>
 <div className="product_tab-block_out product_info_container meta_accordions_detail_mainloops_new">
              {faqListData.map((item, index) => (
                <div
                  key={index}
                  className={`product_tab-block px-0 ${
                    activeIndices.includes(index) ? "is-active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="product_tab-thumb d-flex align-items-center">
                    <p className="cpr-expand__trigger">{item.question}</p>
                    <motion.span
                      animate={{
                        rotate: activeIndices.includes(index) ? 180 : 0,
                      }}
                    >
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndices.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="product_tab-content">
                          {item.answer.map((text, i) => (
                            <p key={i} className="cpr-expand__text">
                              {text}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
              <div className="Index_faq_accordion_lists_sides_innerleft_mainloops_new">
                <div className="Index_faq_accordion_lists_sides_innerleft_innerloops_new"></div>
              </div>
              <div className="Index_faq_accordion_lists_sides_innerleft_mainbutton_new">
                <div className="Index_faq_accordion_lists_sides_innerleft_innerbutton_new">
                  <a
                    href="/pages/frequently-asked-questions"
                    className="button button_brown_new"
                  >
                    Explore All Faqs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Index_faq_accordion_lists_sides_mainright_new">
            <div className="Index_faq_accordion_lists_sides_innerright_new">
            
              <div className="Index_faq_accordion_lists_sides_innerright_videoimage_new">
                <img
                  src="//im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082"
                  alt=""
                  width="1286"
                  height="1302"
                  loading="lazy"
                  fetchpriority="auto"
                  className="desktop_image_new d-none d-md-block"
                />
                <img
                  src="//im8health.com/cdn/shop/files/Rectangle_3260-min_1.jpg?v=1731857660"
                  alt=""
                  width="1286"
                  height="1302"
                  loading="lazy"
                  fetchpriority="auto"
                  className="mobile_image_new d-block d-md-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
