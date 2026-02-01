import React, { useEffect, useState }from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-regular-svg-icons";

const headers = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra nếu vị trí cuộn > 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Đăng ký sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function để tránh rò rỉ bộ nhớ khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={`shop-now-bar ${isVisible ? "show" : ""}`}>
        <div className="page-width">
          <div className="main-grid w-100">
            <div className="shop_now_bar_left_new d-flex align-items-center">
              <a className="d-none d-md-block" href="/" aria-label="Go to homepage">
                <img
                  src="//im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481"
                  alt=""
                  srcset="//im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&amp;width=352 352w, //im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&amp;width=832 832w, //im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&amp;width=1200 1200w, //im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&amp;width=1328 1328w"
                  width="1328"
                  height="342"
                />
              </a>
              <div className="shop_now_bar_details_new">
                <strong>2026 STARTS NOW:</strong> 35% OFF — Feel Like Yourself
                Again
              </div>
            </div>
            <div className="shop_now_bar_right_new">
              <a href="/pages/newyearoffer" className="text-white align-items-center button d-flex justify-content-center text-center w-100">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="announcement-bar bg-dark-red text-white text-center py-2 px-3 small fw-bold d-block d-md-none">
        2026 STARTS NOW:<br/> 35% OFF – FEEL LIKE YOURSELF AGAIN
        <span className="float-right d-none d-md-block">
          USD <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
<div className="announcement-bar bg-dark-red text-white text-center py-2 px-3 small fw-bold d-none d-md-block">
        2026 STARTS NOW: 35% OFF – FEEL LIKE YOURSELF AGAIN
        <span className="float-right d-none d-md-block">
          USD <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <nav className="h-100 header navbar navbar-expand-lg navbar-light bg-white border-bottom py-0 py-md-3">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <svg class="icon icon-hamburger" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M2 16H30" stroke="#A40011" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
<path d="M2 7H30" stroke="#A40011" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
<path d="M2 25H30" stroke="#A40011" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
</svg>
          </button>

          <div
            className="collapse navbar-collapse header_left_new"
            id="mainNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  The Beckham Stack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Welcome from David
                </a>
              </li>
            </ul>
          </div>

          <a className="navbar-brand mx-auto" href="#">
            <img
              className="header__heading-logo"
              src="https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=190"
            />
          </a>

          <div className="collapse navbar-collapse justify-content-end header_right_new d-none d-md-block">
            <ul className="navbar-nav fw-medium align-items-center ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ingredients
                </a>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Discover
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="#" className="fs-5 d-flex header_icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </a>
              </li>
              <li className="nav-item px-2 position-relative">
                <a
                  href="#"
                  className="fs-5 d-flex align-items-center justify-content-center header_icon"
                >
                  <svg
                    className="icon icon-cart-empty"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z"
                      stroke="#50000B"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="cart-count">0</span>
                </a>
              </li>
            </ul>
          </div>
             <div className="collapse  justify-content-end header_right_new d-flex d-md-none">
            <ul className="navbar-nav fw-medium align-items-center flex-row">
            
              <li className="nav-item px-2">
                <a href="#" className="fs-5 d-flex header_icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </a>
              </li>
              <li className="nav-item px-2 position-relative">
                <a
                  href="#"
                  className="fs-5 d-flex align-items-center justify-content-center"
                >
                  <svg
                    className="icon icon-cart-empty header_icon"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z"
                      stroke="#50000B"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="cart-count">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default headers;
