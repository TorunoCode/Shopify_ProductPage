import "./body.scss";
import ProductDetail from "../product_detail/Product_detail";
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

const body = () => {
  return (
    <div>
      <ProductDetail />
      <NutiritionPopup />
      <Marquee />
      <ProductJudge />
      <WhyNothing />
      <ReviewBox />
      <ProductIcons />
      <MobileGrey />
      <SlideShow />
      <Faq />
      <ProductTextImage />
    </div>
  );
};

export default body;
