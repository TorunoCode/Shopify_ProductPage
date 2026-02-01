import React, { useState } from 'react';
import './red_systems.scss';

const DATA = {
  essentials: {
    badge: "COMPREHENSIVE BODY SUPPORT",
    title: "9 Major Organ Systems",
    description: "One serving delivers comprehensive support for your entire body, replacing multiple supplements.",
    theme: "burgundy",
    items: [
  {
    id: "01",
    label: "Digestive",
    sub: "PREBIOTICS, PROBIOTICS, ENZYMES",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 8C18 8 14 8 14 12V14C14 18 18 20 18 24C18 28 14 30 14 34V36C14 40 18 40 18 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M30 8C30 8 34 8 34 12V14C34 18 30 20 30 24C30 28 34 30 34 34V36C34 40 30 40 30 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M18 16H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M18 24H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M18 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    ),
    desc: "A complete 4-tier digestive system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health."
  },
  {
    id: "02",
    label: "Immune",
    sub: "Vit C, D, Zinc, Mushrooms",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 6L38 12V24C38 34 31 40 24 42C17 40 10 34 10 24V12L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M24 18V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M18 24H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    ),
    desc: "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga."
  },
  {
    id: "03",
    label: "Cardiovascular",
    sub: "COQ10, NITRATES, POTASSIUM",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 38C24 38 10 28 10 18C10 12 14 8 20 8C23 8 24 10 24 10C24 10 25 8 28 8C34 8 38 12 38 18C38 28 24 38 24 38Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 22H20L22 18L24 26L26 20L28 22H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    desc: "Supports heart health and circulation with natural nitrates from beetroot, CoQ10 for cellular energy, and potassium for healthy blood pressure levels."
  },
  {
    id: "04",
    label: "Muscular",
    sub: "Aminos, MSM, Electrolytes",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 16C12 16 14 20 18 20C22 20 24 16 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M24 16C24 16 26 20 30 20C34 20 36 16 36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M12 24C12 24 14 28 18 28C22 28 24 24 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M24 24C24 24 26 28 30 28C34 28 36 24 36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M12 32C12 32 14 36 18 36C22 36 24 32 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M24 32C24 32 26 36 30 36C34 36 36 32 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M18 12V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M24 12V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M30 12V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
      </svg>
    ),
    desc: "Aids in muscle protein synthesis."
  },
  {
    id: "05",
    label: "Skeletal",
    sub: "Calcium, Vit D, K2, Boron",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 12C16 12 18 16 20 18C22 20 24 20 24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M24 20C24 20 26 20 28 18C30 16 32 12 32 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 36C16 36 18 32 20 30C22 28 24 28 24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M24 28C24 28 26 28 28 30C30 32 32 36 32 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M20 18L20 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M28 18L28 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="30" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="18" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="30" cy="36" r="2.5" stroke="currentColor" strokeWidth="1.5"></circle>
      </svg>
    ),
    desc: "Builds and maintains strong bones with bioavailable Calcium, Vitamin D3 from vegan lichen, and Vitamin K2 to direct calcium to where it's needed."
  },
  {
    id: "06",
    label: "Integumentary",
    sub: "MSM, Vit C, E, Biotin, Silica",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 16C12 14 16 14 24 14C32 14 36 14 40 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 24C12 22 16 22 24 22C32 22 36 22 40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 32C12 30 16 30 24 30C32 30 36 30 40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="32" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
      </svg>
    ),
    desc: "Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress."
  },
  {
    id: "07",
    label: "Nervous",
    sub: "B-Vitamins, Magnesium, Adaptogens",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2"></circle>
        <circle cx="24" cy="20" r="3" fill="currentColor"></circle>
        <path d="M16 20L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M16 20L8 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M16 20L8 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M32 20L40 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M32 20L40 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M32 20L40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M20 12L24 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M24 12L28 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M24 28L20 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M24 28L28 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        <circle cx="8" cy="16" r="1.5" fill="currentColor"></circle>
        <circle cx="8" cy="24" r="1.5" fill="currentColor"></circle>
        <circle cx="8" cy="28" r="1.5" fill="currentColor"></circle>
        <circle cx="40" cy="16" r="1.5" fill="currentColor"></circle>
        <circle cx="40" cy="24" r="1.5" fill="currentColor"></circle>
        <circle cx="40" cy="28" r="1.5" fill="currentColor"></circle>
        <circle cx="24" cy="8" r="1.5" fill="currentColor"></circle>
        <circle cx="20" cy="36" r="1.5" fill="currentColor"></circle>
        <circle cx="28" cy="36" r="1.5" fill="currentColor"></circle>
      </svg>
    ),
    desc: "Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha."
  },
  {
    id: "08",
    label: "Endocrine",
    sub: "Adaptogens, Vit D, Chromium",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"></circle>
        <circle cx="24" cy="24" r="2" fill="currentColor"></circle>
        <path d="M24 8V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M24 30V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 24H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M30 24H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
        <circle cx="38" cy="24" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
      </svg>
    ),
    desc: "Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range."
  },
  {
    id: "09",
    label: "Urinary",
    sub: "Hydra Electrolytes Complex",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 12C10 12 8 16 8 22C8 28 10 32 14 32C16 32 18 30 18 26C18 22 16 20 16 18C16 16 18 14 18 14C18 14 16 12 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M34 12C38 12 40 16 40 22C40 28 38 32 34 32C32 32 30 30 30 26C30 22 32 20 32 18C32 16 30 14 30 14C30 14 32 12 34 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M18 26V34C18 36 20 38 24 38C28 38 30 36 30 34V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M24 38V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    ),
    desc: "Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate."
  }
]
  },
  longevity: {
    badge: "ADVANCED CELLULAR SCIENCE",
    title: "Cellular Health Redefined",
    description: "A breakthrough formula targeting the 12 hallmarks of aging to help you live better, longer.",
    theme: "bronze",
    items: [
      { id: "01", label: "Activates Cellular Cleansing", sub: "AUTOPHAGY ACTIVATION", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="2" fill="currentColor"></circle>
      <path d="M24 10V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M24 30V38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M10 24H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M30 24H38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
    </svg>, desc: "Activates the body's natural cellular cleanup process to remove damaged components." },
      { id: "02", label: "Promotes Cellular Renewal", sub: "REGENERATION", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="2" fill="currentColor"></circle>
      <path d="M24 10V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M24 30V38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M10 24H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M30 24H38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
    </svg>, desc: "Supports the birth of new, healthy cells." },
      { id: "03", label: "Slows Cellular Aging", sub: "TELOMERE SUPPORT", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 8H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M16 40H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M16 8C16 8 16 18 24 24C32 30 32 40 32 40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M32 8C32 8 32 18 24 24C16 30 16 40 16 40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="2"></circle>
      <path d="M20 34H28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>, desc: "Protects against the biological clock." },
      { id: "04", label: "Aids Youthful Aging", sub: "SIRT ACTIVATION", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="2" fill="currentColor"></circle>
      <path d="M24 10V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M24 30V38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M10 24H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M30 24H38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
    </svg>, desc: "Promotes longevity genes and metabolic efficiency." },
    ]
  }
};

const red_systems = () => {
  const [mode, setMode] = useState('essentials'); // 'essentials' or 'longevity'
  const [activeIndex, setActiveIndex] = useState(0);

  const currentData = DATA[mode];
  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  const handleSwitch = (newMode) => {
    setMode(newMode);
    setActiveIndex(0); // Reset to first item
  };

  return (
    <div className={`TotalHealth_Wrapper ${mode}`}>
      {/* 1. TOP SWITCHER */}
      <div className="Product_Toggle">
        <div className={`Slider_Pill ${mode}`} />
        <button className={mode === 'essentials' ? 'active' : ''} onClick={() => handleSwitch('essentials')}>
          Daily Ultimate Essentials
        </button>
        <button className={mode === 'longevity' ? 'active' : ''} onClick={() => handleSwitch('longevity')}>
          Daily Ultimate Longevity
        </button>
      </div>

      <div className="Content_Header">
        <div className={`Badge ${mode}`}>{currentData.badge}</div>
        <h2>{currentData.title}</h2>
        <p>{currentData.description}</p>
      </div>

      <div className="Main_Grid_Layout d-flex flex-column-reverse flex-md-row">
        {/* 2. DYNAMIC GRID (9 for Essentials, 4 for Longevity) */}
        <div className={`Side_Grid ${mode === 'longevity' ? 'grid-4' : 'grid-9'}`}>
          {currentData.items.map((item, index) => (
            <button 
              key={item.id} 
              className={`Grid_Block ${mode} ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="Number">{item.id}</span>
              <div className={`Icon ${mode}`}>{item.icon}</div>
              <span className="Label">{item.label}</span>
              {activeIndex === index && <span className="Arrow">→</span>}
            </button>
          ))}
        </div>

        {/* 3. CONTENT DISPLAY CARD */}
        <div className="Display_Card" key={`${mode}-${activeIndex}`}>
          <div className="Card_Header flex-column flex-md-row">
            <div className={`Icon_Circle ${mode}`}>
               <span className="Top_ID">{activeItem.id}</span>
               {activeItem.icon}
            </div>
            <div className="Title_Area">
              <h3>{activeItem.label} {mode === 'essentials' ? 'Support' : ''}</h3>
              <div class="pillars-health__panel-meta"><span class="pillars-health__panel-meta-line"></span><p class="Sub_Label">{activeItem.sub}</p></div>
            </div>
          </div>
          <div className="Card_Body">
            <p>{activeItem.desc}</p>
            <div className="Check_Badge"><span className='d-flex mr-2'><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                        <path d="M7 12l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg></span> Clinically Dosed Ingredients</div>
          </div>
          <div className="Watermark">{activeItem.icon}</div>
        </div>
      </div>
    </div>
  );
};

export default red_systems;