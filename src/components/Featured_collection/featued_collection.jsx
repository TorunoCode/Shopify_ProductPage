import React from 'react'
import "./featured_collection.scss"

function featued_collection() {
  return (
    <div>

        <div className="premium-nutrition">
  <div className="align-items-baseline container d-flex flex-column page-width">
    <div className="section-header">
      <h2>Premium Core Nutrition</h2>
      <div className="trust-badges">
        <span><i className="icon-check"></i> 30-Day money back guarantee</span>
        <span><i className="icon-check"></i> Update or cancel anytime</span>
        <span><i className="icon-check"></i> Free shipping for all subscriptions</span>
      </div>
    </div>

    <div className="product-grid">
     <div className="product-card">
  <div className="image-wrapper">
    {/* Ảnh chính */}
    <img 
      className="main-img" 
      src="//im8health.com/cdn/shop/files/Frame_1171275435.png?v=1762225645" 
      alt="Daily Ultimate Essentials"
    />
    {/* Ảnh khi hover (Thay bằng link ảnh Beckham uống nước) */}
    <img 
      className="hover-img" 
      src="//im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129" 
      alt="Beckham Drinking"
    />
    
    <span className="badge-ribbon">BEST SELLER</span>
    <button className="add-to-cart">ADD TO CART</button>
  </div>
  
  <div className="product-info">
    <span className="tag tag-red">FEEL AMAZING TODAY</span>
    <h3>Daily Ultimate Essentials:<br/> All-in-One Supplement</h3>
    <p>Core nutrition with 92 nutrient-rich ingredients in one delicious drink.</p>
    <span className="price">From $89</span>
  </div>
</div>


      <div className="product-card">
        
         <div className="image-wrapper">
    {/* Ảnh chính */}
    <img 
      className="main-img" 
      src="http://im8health.com/cdn/shop/files/Frame_1171275436.png?v=1762225646" 
      alt="Daily Ultimate Essentials"
    />
    {/* Ảnh khi hover (Thay bằng link ảnh Beckham uống nước) */}
    <img 
      className="hover-img" 
      src="//im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129" 
      alt="Beckham Drinking"
    />
    
    <button className="add-to-cart">ADD TO CART</button>
  </div>
        <div className="product-info">
          <span className="tag tag-orange">STAY YOUNG TOMORROW</span>
          <h3>Daily Ultimate Longevity:<br/> Healthy Aging</h3>
          <p>The World's first supplement scientifically formulated to support all 12 hallmarks of aging.</p>
          <span className="price">From $119</span>
        </div>
      </div>

      <div className="product-card">
       <div className="image-wrapper">
    {/* Ảnh chính */}
    <img 
      className="main-img" 
      src="//im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129" 
      alt="Beckham Drinking"
    />
    
    {/* Ảnh khi hover (Thay bằng link ảnh Beckham uống nước) */}
    <img 
      className="hover-img" 
      src="//im8health.com/cdn/shop/files/Frame_1171275435.png?v=1762225645" 
      alt="Daily Ultimate Essentials"
    />
    
    <span className="badge-ribbon">BEST SELLER</span>
    <button className="add-to-cart">ADD TO CART</button>
  </div>
        <div className="product-info">
          <span className="tag tag-ritual">THE ULTIMATE DAILY RITUAL</span>
          <h3>The Beckham Stack:<br/> Essentials + Longevity Set</h3>
          <p>Daily Ultimate Essentials and Daily Ultimate Longevity.</p>
          <span className="price">From $196</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
   )

}

export default featued_collection