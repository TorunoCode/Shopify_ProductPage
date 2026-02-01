import "./body.scss";
import Marquee from "../marquee/marquee";
import ProductJudge from "../product_judge/product_judge";
import WhyNothing from "../whynothing/whynothing";
import ProductIcons from "../product_icons/product_icons";
import MobileGrey from "../mobileGrey/mobileGrey";
import ProductTextImage from "../product_text_image/product_text_image";
import Faq from "../faq/faq";
import SlideShow from "../slideshow/slideshow";
import ReviewBox from "../review_box/review_box";
import NutiritionPopup from "../nutrition_popup/nutrition_popup";
import ProductInfo from "../Product_info/product_info";
import HeroBanner from "../Hero_banner/hero_banner";
import MarqueeReview from "../Marquee_review/marquee_review";
import InfoProduct from "../Info_product/info_product";
import WhatInside from "../Whatinside/what_inside";
import TableColumn from "../Table_column/table_column";
import ImageText from "../Image_text/image_text";
import FeaturedCollection from "../Featured_collection/featued_collection";
import ComparisonTable from "../Comparison_table/comparison_table";
import AdvisorList from "../Advisor_list/advisor_list";
import TrustedList from "../Trusted_list/trusted_list";
import ExpertList from "../Experts_list/experts_list"; 
import Footer from "../Footer/footer";
import StickyBottom from "../Sticky_bottom/sticky_bottom";
import OrganSystem from "../Organ_systems/organ_systems";
import RedSystems from "../Red_systems/red_systems";

const body = () => {
  return (
    <div>
      <ProductInfo />
      <HeroBanner />
      <MarqueeReview />
      <RedSystems/>
      <InfoProduct />
      <TableColumn />
      <OrganSystem/>
      <ExpertList/> 
      <WhatInside />
      <ImageText />
      <TrustedList />
      <AdvisorList/>
      <ComparisonTable />
      <FeaturedCollection />
      <Faq />
      <Footer/>
      <StickyBottom/>
      {/* <ProductDetail /> */}
      {/* <NutiritionPopup />
      <Marquee />
      <ProductJudge />
      <WhyNothing />
      <ReviewBox />
      <ProductIcons />
      <MobileGrey />
      <SlideShow />
      <Faq />
      <ProductTextImage /> */}
    </div>
  );
};

export default body;
