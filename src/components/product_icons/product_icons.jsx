import React from "react";
import "./product_icons.scss";

const product_icons = () => {
  return (
    <div className="product_judge-outer pink">
      <div className="page-width">
        <div className="product_icons-grid">
          <div>
            <img src="//trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222" />
            <p className="h4title">Free Shipping from USA</p>
            <p>On all orders</p>
          </div>

          <div>
            <img src="//trysculptique.com/cdn/shop/files/support-min.png?v=1758713216" />
            <p className="h4title">Naturally Supports Your Body</p>
            <p>Promotes healthy immune cell functions</p>
          </div>

          <div>
            <img src="//trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216" />
            <p className="h4title">100% Natural Ingredients</p>
            <p>8 active, natural ingredients</p>
          </div>

          <div>
            <img src="//trysculptique.com/cdn/shop/files/60-min.png?v=1758713216" />
            <p className="h4title">Try it Risk Free for 60 Days</p>
            <p>60-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product_icons;
