import React from 'react'
import './footer.scss'

function footer() {
  return (
    <div id="footer" className="Footer_main_new color-scheme-2 gradient" role="contentinfo">
      <div className="page-width d-flex justify-content-center flex-column">
        <div className="footer__content-top Footer_1_new">
          <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet grid--3-col-tablet Footer_1_loops_new">
            
            {/* Shop Block */}
            <div className="footer-block grid__item footer-block--menu footer-block--menu_1 Footer_1_loops_boxs_new">
              <h2 className="footer-block__heading inline-richtext active">Shop</h2>
              <div className="footer-block__details-content footer-menu-name-Shop" style={{ display: "block" }}>
                <ul className="list-unstyled">
                  <li><a href="/collections/premium-core-nutrition" className="link link--text list-menu__item list-menu__item--link">Premium Core Nutrition</a></li>
                  <li><a href="/products/beckhamstack" className="link link--text list-menu__item list-menu__item--link">The Beckham Stack</a></li>
                  <li><a href="/collections/merchandise" className="link link--text list-menu__item list-menu__item--link">Merchandise</a></li>
                  <li><a href="/collections/all" className="link link--text list-menu__item list-menu__item--link">Shop All</a></li>
                </ul>
              </div>
            </div>

            {/* Company Block */}
            <div className="footer-block grid__item footer-block--menu footer-block--menu_2 Footer_1_loops_boxs_new">
              <h2 className="footer-block__heading inline-richtext">Company</h2>
              <div className="footer-block__details-content footer-menu-name-Company">
                <ul className="list-unstyled">
                  <li><a href="/pages/about-us" className="link link--text list-menu__item list-menu__item--link">About Us</a></li>
                  <li><a href="/pages/science" className="link link--text list-menu__item list-menu__item--link">Science</a></li>
                  <li><a href="/pages/impact" className="link link--text list-menu__item list-menu__item--link">Impact</a></li>
                </ul>
              </div>
            </div>

            {/* Learn Block */}
            <div className="footer-block grid__item footer-block--menu footer-block--menu_3 Footer_1_loops_boxs_new">
              <h2 className="footer-block__heading inline-richtext">Learn</h2>
              <div className="footer-block__details-content footer-menu-name-Learn">
                <ul className="list-unstyled">
                  <li><a href="/pages/wall-of-health" className="link link--text list-menu__item list-menu__item--link">Reviews</a></li>
                  <li><a href="/pages/ingredients" className="link link--text list-menu__item list-menu__item--link">Ingredients</a></li>
                  <li><a href="https://im8health.com/pages/quality" className="link link--text list-menu__item list-menu__item--link">Quality and Standards</a></li>
                  <li><a href="/pages/im8-affiliate" className="link link--text list-menu__item list-menu__item--link">IM8 Inner Circle</a></li>
                  <li><a href="/pages/im8-vs-ag1-the-ultimate-foundational-supplement-showdown" className="link link--text list-menu__item list-menu__item--link">IM8 vs AG1 Next Gen</a></li>
                </ul>
              </div>
            </div>

            {/* Support Block */}
            <div className="footer-block grid__item footer-block--menu footer-block--menu_4 Footer_1_loops_boxs_new">
              <h2 className="footer-block__heading inline-richtext">Support</h2>
              <div className="footer-block__details-content footer-menu-name-Support">
                <ul className="list-unstyled">
                  <li><a href="/pages/frequently-asked-questions" className="link link--text list-menu__item list-menu__item--link">FAQs</a></li>
                  <li><a href="https://track.im8health.com/" className="link link--text list-menu__item list-menu__item--link">Track My Order</a></li>
                  <li><a href="/pages/contact-us" className="link link--text list-menu__item list-menu__item--link">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Community Block */}
            <div className="footer-block grid__item footer-block--menu footer-block--menu_5 Footer_1_loops_boxs_new">
              <h2 className="footer-block__heading inline-richtext">IM8 Community</h2>
              <div className="footer-block__details-content footer-menu-name-IM8 Community">
                <ul className="list-unstyled">
                  <li><a href="https://www.instagram.com/im8health/" className="link link--text list-menu__item list-menu__item--link" target="_blank" rel="noreferrer">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@im8health" className="link link--text list-menu__item list-menu__item--link" target="_blank" rel="noreferrer">TikTok</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Block */}
          <div className="footer-block--newsletter Footer_1_newsletter_main_new">
            <div className="Footer_1_newsletter_mainboth_new d-none">
              <div className="Footer_1_newsletter_innerboth_new">
                <div className="Footer_1_newsletter_innerboth_videoimage_new">
                  <video playsInline className="Custom_video_new" autoPlay loop muted preload="metadata" poster="//im8health.com/cdn/shop/files/preview_images/fbf49de132784b63b1209cf9f32ce77d.thumbnail.0000000000.jpg?v=1724177472">
                    <source src="//im8health.com/cdn/shop/videos/c/vp/fbf49de132784b63b1209cf9f32ce77d/fbf49de132784b63b1209cf9f32ce77d.HD-720p-2.1Mbps-33478040.mp4?v=0" type="video/mp4" />
                    <img src="//im8health.com/cdn/shop/files/preview_images/fbf49de132784b63b1209cf9f32ce77d.thumbnail.0000000000.jpg?v=1724177472" alt="fbfdebbcffced.thumbnail." />
                  </video>
                </div>
              </div>
            </div>
            <div className="footer-block__newsletter Footer_1_newsletter_inner_new">
              <div className="Footer_1_newsletter_title_new">
                <h4>Join the community for exclusive wellness insights</h4>
              </div>
              <form method="post" action="/contact#ContactFooter" id="ContactFooter" acceptCharset="UTF-8" className="footer__newsletter newsletter-form">
                <input type="hidden" name="form_type" value="customer" />
                <input type="hidden" name="utf8" value="✓" />
                <input type="hidden" name="contact[tags]" value="newsletter" />
                <div className="newsletter-form__field-wrapper">
                  <div className="field">
                    <input 
                      id="NewsletterForm--sections--17653237252263__footer" 
                      type="email" 
                      name="contact[email]" 
                      className="field__input" 
                      aria-required="true" 
                      autoCorrect="off" 
                      autoCapitalize="off" 
                      autoComplete="email" 
                      placeholder="Email Address" 
                      required 
                    />
                    <label className="field__label" htmlFor="NewsletterForm--sections--17653237252263__footer">
                      Email Address
                    </label>
                    <button type="submit" className="newsletter-form__button field__button" name="commit" id="Subscribe" aria-label="Join Now">
                      Join Now
                    </button>
                  </div>
                </div>
              </form>
              <div className="Footer_1_newsletter_texts_new">
                <p>*By joining, you'll receive our wellness insights and can unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="Footer_2_new">
          <div className="Footer_2_sides_new">
            <div className="Footer_2_sides_mainlogos_new">
              <div className="Footer_2_sides_innerlogos_new">
                <img 
                  src="//im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155" 
                  alt="IM8 Logo" 
                  width="1052" 
                  height="272" 
                  className="Logo_image_new" 
                />
              </div>
            </div>
            <div className="Footer_2_sides_mainbottom_new">
              <div className="Footer_2_sides_innerbottom_new">
                <div className="Footer_2_sides_innerbottom_copyright_new">
                  © 2026 IM8<sup>®</sup>
                </div>
                <div className="Footer_2_sides_innerbottom_menulists_new Desktop_only_new d-none d-md-block">
                  <ul className="menu">
                    <li className="menu-link"><a href="/pages/privacy-policy">Privacy Policy</a></li>
                    <li className="menu-link"><a href="/pages/terms-of-service">Terms of Service</a></li>
                  </ul>
                </div>
                <div class="Footer_2_sides_innerbottom_menulists_new Mobile_only_new d-block d-md-none">
                        <ul class="menu"><li class="menu-link">
                              <a href="/pages/privacy-policy">Privacy Policy</a>
                            </li><li class="menu-link">
                              <a href="/pages/terms-of-service">Terms of Service</a>
                            </li></ul>
                      </div>
              </div>
            </div>
            <div className="Footer_2_sides_banner_claim_container">
              <div className="Footer_2_sides_banner_claim_content">
                <p>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p>
              </div>
              <div className="Footer_2_sides_banner_claim_content_2">
                **Free Welcome Kit available for new subscribers only.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;
