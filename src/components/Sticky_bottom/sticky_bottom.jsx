import React, { useState } from 'react'
import './sticky_bottom.scss'

function sticky_bottom() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <div className="product-buy-sticky-container initialized">
  <div className="page-width product-buy-sticky__inner">
  <div className="product-details d-none d-md-block">
    <div className="product-image-container"><img src="https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&amp;width=500" alt="Daily Ultimate Essentials: All-in-One Supplement" srcset="https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&amp;width=500" width="500" height="500" className="product-image" id="sticky-product-image"/>
<div className="image-glow"></div>
    </div>
    <div className="product-title" data-title="Daily Ultimate Essentials: All-in-One Supplement">
      Daily Ultimate Essentials: All-in-One Supplement
      
        <div className="product-title__variant" data-title="Daily Ultimate Essentials: All-in-One Supplement">(Forever Jar)</div>
      
    </div>
  </div>

  <div className="right-aligned">
    
<div className="custom-dropdown" id="sticky-buy-dropdown" onClick={() => setIsOpen(!isOpen)}>
  <div className="dropdown-selected" id="sticky-buy-selected">
    <div className="dropdown-selected__title">90-Day Supply
                  
(Save 30%)</div>
    <div className="dropdown-selected__price-per-serving">$2.61 USD / serving</div>
    <span className="dropdown-arrow"></span>
  </div>

  <ul className={`dropdown-options dropdown-up ${isOpen ? '' : 'd-none'}`} id="sticky-buy-options" ><li className="dropdown-option dropdown-option--quarterly" data-option-value-id="5658043252903" data-variant-id="47315076022439" data-title="Quarterly Subscription" data-alt-name="90-Day Supply" data-quarterly="true">
        90-Day Supply
      </li><li className="dropdown-option dropdown-option--double-sub" data-option-value-id="5316462870695" data-variant-id="46954316955815" data-title="Double Subscription" data-alt-name="60-Day Supply" data-double-subscription="true">
        60-Day Supply
      </li><li className="dropdown-option" data-option-value-id="4599807738023" data-variant-id="46073779257511" data-title="Subscription" data-alt-name="30-Day Supply">
        30-Day Supply
      </li></ul>
</div>

    
    
    
    
    
    <button className="product-buy-sticky__button" data-preorder="false" fdprocessedid="fkuo8l">
      <span className="text-desktop d-none d-md-block">Add to cart <span className="button-text-price"> - $78.33 USD/mo</span></span>
      <span className="text-mobile d-block d-md-none">Add</span>
    </button>
  </div>
  </div>
</div>
  )
}

export default sticky_bottom
