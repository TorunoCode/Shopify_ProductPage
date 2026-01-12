import React, { useState } from "react";
import "./review_box.scss";
import {
  faArrowUpFromBracket,
  faChevronDown,
  faChevronRight,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function review_box() {
  const [activeIndices, setActiveIndices] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndices(!index);
  };
  const [rating, setRating] = useState(0); // Lưu điểm thật (1-5)
  const [hover, setHover] = useState(0); // Lưu điểm khi hover
  return (
    <div>
      <div className="product_judge-outer bg-white">
        <div className="page-width d-flex flex-column">
          <div className="product_judge-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
              className="product-reviews_trust"
            />
            <h2 className="product-section_title text-center">
              Real Women, Real Results: 93,000+ Transformations
            </h2>
            <p className="product-section_text text-center">
              All reviews verified from actual paying customers
            </p>
          </div>
          <div
            id="judgeme_product_reviews"
            className="jdgm-widget jdgm-review-widget jdgm--done-setup-widget"
          >
            <div className="jdgm-rev-widg">
              <div className="jdgm-rev-widg__header">
                <h2 className="jdgm-rev-widg__title">Customer Reviews</h2>
                <div className="jdgm-row-stars d-flex flex-column flex-lg-row">
                  <div className="jdgm-rev-widg__summary">
                    <div className="jdgm-rev-widg__summary-inner">
                      <div className="jdgm-rev-widg__summary-stars">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--half"></span>
                        <span className="jdgm-rev-widg__summary-average">
                          4.67 out of 5
                        </span>
                      </div>
                      <div className="jdgm-rev-widg__summary-text jdgm-all-reviews__summary-text--verified">
                        Based on 110 reviews
                        <img
                          className="jdgm-verified-checkmark"
                          src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                          alt="Verified Checkmark"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="jdgm-histogram">
                    <div className="jdgm-histogram__row">
                      <div className="jdgm-histogram__star">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                      </div>
                      <div className="jdgm-histogram__bar">
                        <div className="jdgm-histogram__bar-content w-76"></div>
                      </div>
                      <div className="jdgm-histogram__frequency">84</div>
                    </div>

                    <div className="jdgm-histogram__row">
                      <div className="jdgm-histogram__star">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--off"></span>
                      </div>
                      <div className="jdgm-histogram__bar">
                        <div className="jdgm-histogram__bar-content w-15"></div>
                      </div>
                      <div className="jdgm-histogram__frequency">17</div>
                    </div>
                    <div className="jdgm-histogram__row">
                      <div className="jdgm-histogram__star">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                      </div>
                      <div className="jdgm-histogram__bar">
                        <div className="jdgm-histogram__bar-content w-7"></div>
                      </div>
                      <div className="jdgm-histogram__frequency">8</div>
                    </div>
                    <div className="jdgm-histogram__row">
                      <div className="jdgm-histogram__star">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                      </div>
                      <div className="jdgm-histogram__bar">
                        <div className="jdgm-histogram__bar-content w-2"></div>
                      </div>
                      <div className="jdgm-histogram__frequency">3</div>
                    </div>
                    <div className="jdgm-histogram__row">
                      <div className="jdgm-histogram__star">
                        <span className="jdgm-star jdgm--on"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                        <span className="jdgm-star jdgm--off"></span>
                      </div>
                      <div className="jdgm-histogram__bar">
                        <div className="jdgm-histogram__bar-content  w-1"></div>
                      </div>
                      <div className="jdgm-histogram__frequency">1</div>
                    </div>
                    <div className="jdgm-histogram__row jdgm-histogram__clear-filter" >See all reviews</div>
                  </div>

                  <div className="jdgm-widget-actions-wrapper text-white">
                    <a
                      className="jdgm-write-rev-link"
                      onClick={() => toggleAccordion(activeIndices)}
                    >
                     {activeIndices ? 'Cancel review':'Write a review'}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndices
                    ? "jdgm-form-wrapper is-active"
                    : "jdgm-form-wrapper"
                }
              >
                <form className="jdgm-form">
                  <div className="jdgm-jdgm-write-rev-link text-decoration-none jdgm-form__title">
                    Write a review
                  </div>

                  <div className="jdgm-form__fieldset">
                    <label>Rating</label>
                    <span
                      className="jdgm-form__rating"
                      onMouseLeave={() => setHover(0)}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <a
                          key={star}
                          className={`jdgm-star ${
                            star <= (hover || rating) ? "jdgm--on" : "jdgm--off"
                          }`}
                          onMouseEnter={() => setHover(star)}
                          onClick={() => setRating(star)}
                          href="javascript:void(0)"
                        ></a>
                      ))}

                      {/* Input hidden tự động cập nhật value theo rating */}
                      <input name="score" type="hidden" value={rating} />
                    </span>
                  </div>

                  <div className="jdgm-form__fieldset">
                    <label className="jdgm-form__inline-label">
                      Review content
                    </label>
                    <span className="jdgm-countdown"></span>
                    <textarea
                      rows="5"
                      name="review_body"
                      placeholder="Start writing here..."
                    ></textarea>
                  </div>

                  <div className="jdgm-form__fieldset">
                    <label>Picture/Video (optional)</label>
                    <div className="jdgm-media-fieldset__container">
                      <div className="jdgm-picture-fieldset__box jdgm-picture-fieldset__box--input">
                        <div className="jdgm-picture-fieldset__box-wrapper">
                          <div className="jdgm-media-fieldset__icon">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                          </div>
                        </div>
                        <input
                          type="file"
                          name="media"
                          className="jdgm-media-fieldset__input"
                          multiple
                          accept="image/*,video/*"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="jdgm-form__fieldset ">
                    <div className="d-flex align-items-center">
                      <label className="jdgm-form__inline-label m-0">
                        Display name
                      </label>
                      <span className="jdgm-form__reviewer-name-format-container">
                        (displayed publicly like
                        <span className="jdgm-sort-dropdown-wrapper mx-1">
                          <select
                            name="reviewer_name_format"
                            className="jdgm-sort-dropdown"
                          >
                            <option value="" selected>
                              John Smith
                            </option>
                            <option value="last_initial">John S.</option>
                            <option value="first_name_only">John</option>
                            <option value="all_initials">J.S.</option>
                            <option value="anonymous">Anonymous</option>
                          </select>
                          <span className="jdgm-sort-dropdown-arrow">
                            <FontAwesomeIcon icon={faChevronDown} />
                          </span>
                        </span>
                        )
                      </span>
                    </div>
                    <input
                      name="reviewer_name"
                      type="text"
                      placeholder="Display name"
                    />
                  </div>

                  <div className="jdgm-form__fieldset jdgm-form__email-fieldset">
                    <label>Email address</label>
                    <input
                      name="reviewer_email"
                      type="email"
                      required
                      placeholder="Your email address"
                    />
                  </div>

                  <div class="jdgm-form__fieldset">
                    <p>
                      How we use your data: We'll only contact you about the
                      review you left, and only if necessary. By submitting your
                      review, you agree to Judge.me's
                      <a
                        href="https://judge.me/terms"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        terms
                      </a>
                      ,
                      <a
                        href="https://judge.me/privacy"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        privacy
                      </a>
                      and
                      <a
                        href="https://judge.me/content-policy"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        content
                      </a>
                      policies.
                    </p>
                  </div>

                  <div className="jdgm-form__fieldset jdgm-form__fieldset-actions d-flex flex-row justify-content-center">
                    <a className="jdgm-btn jdgm-btn--border jdgm-cancel-rev text-decoration-none">
                      Cancel review
                    </a>
                    <input
                      type="submit"
                      className="jdgm-btn jdgm-btn--solid jdgm-submit-rev"
                      value="Submit Review"
                    />
                  </div>
                </form>
              </div>
                 <div className="jdgm-row-media d-flex flex-column align-items-center justify-content-center">
                  <a
                    className="jdgm-medal"
                  >
                   
                    <div
                      className="jdgm-medal__image"
                    >
                      <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format" alt="" />
                    </div>
                    <div class="jdgm-medal__value text-center">100.0</div>
                  </a>
                </div>
              <div className="jdgm-row-actions">
                <div className="jdgm-rev-widg__sort-wrapper">
                  <div className="jdgm-sort-dropdown-wrapper">
                    <select className="jdgm-sort-dropdown">
                      <option value="most-recent">Most Recent</option>
                      <option value="highest-rating">Highest Rating</option>
                      <option value="lowest-rating">Lowest Rating</option>
                    </select>
                    <span className="jdgm-sort-dropdown-arrow">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="jdgm-rev-widg__body">
                <div className="jdgm-rev-widg__reviews">
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jdgm-rev jdgm-divider-top jdgm--done-setup">
                    <div className="jdgm-rev__header">
                      <div className="jdgm-row-rating">
                        <span className="jdgm-rev__rating">
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                          <span className="jdgm-star jdgm--on"></span>
                        </span>
                        <span className="jdgm-rev__timestamp">12/08/2025</span>
                      </div>
                      <div className="jdgm-row-profile">
                        <div className="jdgm-rev__icon"></div>
                        <span className="jdgm-rev__author-wrapper">
                          <span className="jdgm-rev__author">
                            Donabeth Houx
                          </span>
                          <span className="jdgm-rev__buyer-badge-wrapper">
                            <span className="jdgm-rev__buyer-badge"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="jdgm-rev__content">
                      <div className="jdgm-rev__body">
                        <p>
                          I LOVE THEM! My legs have gone from late stage 2 to
                          late one!!! Thank you so much!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="jdgm-paginate">
                  <a className="jdgm-paginate__page jdgm-curt">1</a>
                  <a className="jdgm-paginate__page">2</a>
                  <a className="jdgm-paginate__page">3</a>
                  <FontAwesomeIcon className="jdgm-paginate__page" icon={faChevronRight} />
                  <FontAwesomeIcon className="jdgm-paginate__page" icon={faForwardStep} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default review_box;
