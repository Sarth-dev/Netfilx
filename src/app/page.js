import Image from "next/image";
import FisrtBanner from "./Component/FisrtBanner";
import TrendingSlider from "./Component/TrendingSlider";
import FeaturesSection from "./Component/FeatureSection";
import FaqSection from "./Component/CollapseText";
import Footer from "./Component/utils/Footer";

export default function Home() {
  return (
    <>
      <FisrtBanner/>
      <TrendingSlider/>
      <FeaturesSection/>
      <FaqSection/>
      <Footer/>
    </>
  );
}
