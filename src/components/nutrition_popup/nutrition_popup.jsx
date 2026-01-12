import React, { useState, useEffect } from "react";
import { globalConfig } from "../common";
import "./nutrition_popup.scss";

function nutrition_popup() {
  const [config, setConfig] = useState(globalConfig);

  useEffect(() => {
    // ĐĂNG KÝ: Lắng nghe tin nhắn từ common.jsx
    const handleUpdate = (updatedConfig) => {
      // Khi có tin mới, ta tạo một bản copy mới để React thấy sự thay đổi và re-render
      setConfig({ ...updatedConfig });
    };

    globalConfig.subscribe(handleUpdate);
  }, []);
  const togglePopup = (status) => {
    // Quan trọng: Phải gửi đúng tên thuộc tính là 'isActivePopup' 
    // thay vì 'activeOption' nếu bạn muốn đóng/mở
    globalConfig.publish({ isActivePopup: status });
  };
  return (
    <div
      className={`nutrition_popup-outer ${
        config.isActivePopup ? "d-flex" : "d-none"
      }`}
      onClick={() => togglePopup(false)}
    >
      <div className="nutrition_popup-inner">
        <img
          loading="lazy"
          className="nutrition_popup-close"
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
        />
        <h2 className="main_product-title text-center">Nutritional Information</h2>
        <img
          className="d-none d-md-block nutrition_image"
          src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
        />
        <img
          className="d-block d-md-none nutrition_image"
          src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
        />

        <div className="main_product-btn">Try Lymphatic Drainage Risk-Free</div>

        <div className="main_product-points d-flex flex-wrap justify-content-flex-start">
          <div className="main_product-point-line">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
            </div>
            <div>
              <p>Made &amp; produced in the USA</p>
            </div>
          </div>

          <div className="main_product-point-line">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
            </div>
            <div>
              <p>100% Natural Ingredients</p>
            </div>
          </div>

          <div className="main_product-point-line">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
            </div>
            <div>
              <p>60-Day Money-Back Guarantee</p>
            </div>
          </div>

          <div className="main_product-point-line">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285" />
            </div>
            <div>
              <p>Free Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nutrition_popup;
