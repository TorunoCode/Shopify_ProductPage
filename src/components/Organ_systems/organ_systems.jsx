import React, { useState } from 'react';
import './organ_systems.scss';

const productData = {
  essentials: {
    badge: "COMPREHENSIVE WELLNESS",
    title: "5 Pillars of Total Health",
    description: "A holistic approach to wellness, addressing every dimension of your health with precision-formulated ingredients.",
    pillars: [
      { id: 1, title: "Comprehensive Nutritional Foundation", subtitle: "Complete Vitamin & Mineral Profile", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="8" width="20" height="32" rx="10" stroke="currentColor" stroke-width="2"></rect>
      <path d="M14 24H34" stroke="currentColor" stroke-width="2"></path>
      <circle cx="20" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="28" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="24" cy="32" r="3" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="32" r="1" fill="currentColor"></circle>
    </svg>, ingredients: ["Vitamin A, C, D3, E, K2", "Complete B-Complex", "Essential Trace Minerals"] },
      { id: 2, title: "Superior Digestive Health Support", subtitle: "4-Tier Digestive System", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 8C18 8 14 8 14 12V14C14 18 18 20 18 24C18 28 14 30 14 34V36C14 40 18 40 18 40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M30 8C30 8 34 8 34 12V14C34 18 30 20 30 24C30 28 34 30 34 34V36C34 40 30 40 30 40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 16H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 24H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 32H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>, ingredients: ["Prebiotics", "Probiotics (10B CFU)", "Postbiotics", "Enzymes"] },
      { id: 3, title: "Powerful Superfood & Antioxidant Complex", subtitle: "4,100mg Raw Superfoods Blend", icon:<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 8C24 8 12 12 12 28C12 36 18 40 24 40C30 40 36 36 36 28C36 12 24 8 24 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M24 14V36" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 20L24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M30 20L24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M16 28L24 32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M32 28L24 32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>, ingredients: ["Organic Greens: Spinach, Beet Root, Carrot Root", "Antioxidant Fruits: Blueberry, Pomegranate", "Functional Herbs: Milk Thistle, Turmeric", "Specialty: Sea Moss, Grape Seed Extract"] },
      { id: 4, title: "Specialized Health Complexes", subtitle: "Targeted Support for Performance", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="3" fill="currentColor"></circle>
      <path d="M24 6V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 38V42" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M6 24H10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M38 24H42" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>, ingredients: ["Adaptogen Blend", "Metabolic Support", "Energy Co-factors"] },
      { id: 5, title: "Cell Rejuvenation Technology 8™", subtitle: "Proprietary Longevity Complex", icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="3" fill="currentColor"></circle>
      <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M24 32V40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M8 24H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
      <path d="M32 24H40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"></path>
    </svg>, ingredients: ["Cellular Repair Nutrients", "Mitochondrial Support", "Advanced Antioxidants"] }
    ],
    cards:[
  {
    "id": 1,
    "title": "Superior Ingredient Forms",
    "description": "Bioactive Vitamins & Organic Minerals for maximum absorption.",
    "icon": <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="16" r="8" stroke="currentColor" stroke-width="2"></circle>
      <path d="M16 24V36C16 38.2091 17.7909 40 20 40H28C30.2091 40 32 38.2091 32 36V24" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M20 28H28" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M20 34H28" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
  },
  {
    "id": 2,
    "title": "Clean Formulation",
    "description": "No Stevia (Uses Reb M, Allergen-Free, Non-GMO, Vegan-Friendly.",
    "icon": <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"></circle>
      <path d="M16 24L22 30L32 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  },
  {
    "id": 3,
    "title": "Branded Ingredients",
    "description": "Quatrefolic®, VegD3®, FloraSMART®, AstaPure®.",
    "icon": <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 8L28 16H38L30 22L34 32L24 26L14 32L18 22L10 16H20L24 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="24" cy="38" r="4" stroke="currentColor" stroke-width="2"></circle>
    </svg>
  }
]
  },
  longevity: {
    badge: "COMPREHENSIVE BODY SUPPORT",
    title: "9 Major Organ Systems",
    description: "One serving delivers comprehensive support for your entire body, replacing multiple supplements with a single, powerful formula.",
    pillars:  [
  {
    "id": 1,
    "title": "Cellular Foundation Builder",
    "subtitle": "Essential Amino Acid Support",
    "icon":
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28L24 22L36 28L24 34L12 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20L24 14L36 20L24 26L12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 26V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ,
    "description": "A precise blend of essential amino acids designed to support protein synthesis and maintain structural cellular integrity.",
    "benefit": "Provides therapeutic dosages of two critical longevity amino acids that naturally decline with age, supporting cellular protection and longevity pathways.",
    "ingredients": ["L-Glycine 3,000mg", "Taurine 2,000mg"]
  },
  {
    "id": 2,
    "title": "Cellular Protection Activator",
    "subtitle": "Senolytic Complex",
    "icon":
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8L36 14V24C36 32 30 38 24 40C18 38 12 32 12 24V14L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ,
    "description": "Advanced senolytic compounds that help the body identify and manage aging cells to maintain youthful tissue function.",
    "benefit": "Triple senolytic complex that targets cellular senescence—one of the primary hallmarks of aging—through complementary compounds that eliminate 'zombie cells'.",
    "ingredients": ["Trans-Resveratrol 250mg", "Quercetin Phytosome 250mg", "Fisetin 100mg"]
  },
  {
    "id": 3,
    "title": "NMN NAD+ Energy Booster",
    "subtitle": "Mitochondrial Support",
    "icon":
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 8L14 26H24L22 40L34 22H24L26 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ,
    "description": "Direct precursors and mitochondrial co-factors to optimize cellular energy production and ATP levels.",
    "benefit": "Combines the most direct NAD+ precursor with a mitochondrial biogenesis promoter for comprehensive cellular energy support and DNA repair.",
    "ingredients": ["NMN 300mg", "PQQ 10mg"]
  },
  {
    "id": 4,
    "title": "Metabolic AMPK/SIRT1 Activator",
    "subtitle": "Metabolic Switch",
    "icon":
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C15.163 8 8 15.163 8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 40C32.837 40 40 32.837 40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24C8 32.837 15.163 40 24 40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M40 24C40 15.163 32.837 8 24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <path d="M24 4L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8L24 4L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 44L24 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 40L24 44L20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ,
    "description": "Targets key metabolic pathways to improve insulin sensitivity and activate longevity genes.",
    "benefit": "Enhanced bioavailability and metabolic support combined with powerful antioxidant protection for optimal metabolic function and cellular stress resistance.",
    "ingredients": ["Dihydroberberine 100mg", "Astaxanthin 6mg"]
  },
  {
    "id": 5,
    "title": "Cellular Renewal Activator",
    "subtitle": "Autophagy Support",
    "icon":
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 10 24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10L30 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ,
    "description": "Triggers the natural cellular recycling process to clear out damaged proteins and cellular debris.",
    "benefit": "Promotes autophagy—the cellular ‘cleaning’ process essential for healthy aging—removing damaged proteins and organelles for optimal cellular function.",
    "ingredients": ["Spermidine 3mg"]
  }
],
    cards:[
  {
    "id": 1,
    "title": "Therapeutic Dosing",
    "description": "Clinically relevant doses of key longevity ingredients like NMN and Spermidine.",
    "icon":<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="8" width="20" height="32" rx="4" stroke="currentColor" stroke-width="2"></rect>
      <path d="M14 20H34" stroke="currentColor" stroke-width="2"></path>
      <path d="M20 14V20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M28 14V20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 26V34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M20 30H28" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
  },
  {
    "id": 2,
    "title": "Synergistic Formulation",
    "description": "Ingredients selected to work together to amplify cellular repair and renewal.",
    "icon":<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="32" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="14" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="34" r="6" stroke="currentColor" stroke-width="2"></circle>
      <path d="M20 20L28 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M28 20L20 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
  },
  {
    "id": 3,
    "title": "Premium Purity",
    "description": "Rigorous testing for purity and potency, free from fillers and artificial additives.",
    "icon": <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 8L8 16V28C8 36 14 42 24 44C34 42 40 36 40 28V16L24 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M18 24L22 28L30 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  }
]
  }
};

const OrganSystems = () => {
  const [mode, setMode] = useState('essentials');
  const [activeId, setActiveId] = useState(mode === 'essentials' ? 3 : 1);

  const current = productData[mode];
  const activePillar = current.pillars.find(p => p.id === activeId) || current.pillars[0];

  const toggleMode = (newMode) => {
    setMode(newMode);
    setActiveId(1); // Reset selection on switch
  };

  return (
    <div className={`Pillars_Section ${mode}`}>
      {/* THE SWITCH BUTTON (As seen in image 3) */}
      <div className="Switch_Container">
        <div className={`Slider_Bg ${mode}`} />
        <button 
          className={mode === 'essentials' ? 'active' : ''} 
          onClick={() => toggleMode('essentials')}
        >
          Daily Ultimate Essentials
        </button>
        <button 
          className={mode === 'longevity' ? 'active' : ''} 
          onClick={() => toggleMode('longevity')}
        >
          Daily Ultimate Longevity
        </button>
      </div>

      <div className="Pillars_Header">
        <div className={`Badge ${mode}`}>{current.badge}</div>
        <h2>{current.title}</h2>
        <p>{current.description}</p>
      </div>

      <div className="Pillars_Layout">
        {/* Sidebar Nav */}
        <div className="Pillars_Nav">
          {current.pillars.map((p) => (
            <button 
              key={p.id}
              className={`Nav_Card ${mode} ${activeId === p.id ? 'active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              <div className={`Card_Icon ${mode}`}>{p.icon}</div>
              <div className="Card_Text">
                <span className="T">{p.title}</span>
                <span className="S">{p.subtitle}</span>
              </div>
              <span class="pillars-health__nav-arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </span>
              <span class="pillars-health__nav-line" aria-hidden="true"></span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div className="Main_Display" key={`${mode}-${activeId}`}>
          
          <div class="pillars-health__panel-header align-items-start d-flex justify-content-between">
                    <div className={`Display_Icon_Box ${mode}`}>{activePillar.icon}</div>
                    <div class={`pillars-health__panel-badge ${mode}`}>
                      <span>Pillar {activePillar.id}</span>
                    </div>
                  </div>
          <h3>{activePillar.title}</h3>
          
          <div class="pillars-health__panel-meta">
                      <span class="pillars-health__panel-meta-line"></span>
                      <p className="Sub">{activePillar.subtitle}</p>
                    </div>
         
            {activePillar.benefit && (
                 <div className="Ingredients">
            <p className="Label">KEY BENEFITS</p>
              <div className="Ing_Item"> {activePillar.benefit}</div>
              </div>
            )}
          
          <div className="Divider" />

          <div className="Ingredients">
            <p className="Label">KEY INGREDIENTS</p>
            {activePillar.ingredients.map((ing, i) => (
              <div key={i} className="Ing_Item"><span className='d-flex'><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></span> {ing}</div>
            ))}
          </div>
          <div className="Watermark">{String(activePillar.id).padStart(2, '0')}</div>
        </div>
      </div>
      {current.cards && (
        <div className="Longevity_Quality_Section">
          <div className="Quality_Card_Container">
            {current.cards.map((item) => (
              <div key={item.id} className="Quality_Card">
                <div className="Icon_Wrapper">
                <div className={`Abstract_Icon ${mode}`}>{item.icon}
                </div></div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganSystems;