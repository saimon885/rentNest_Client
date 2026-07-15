import CallToAction from "@/components/Banner/CallToAction";
import FeaturedProperties from "@/components/Banner/FeaturedProperties";
import HeroBanner from "@/components/Banner/HeroBanner";
import HowItWorks from "@/components/Banner/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      {/* <FeaturedProperties></FeaturedProperties> */}
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
    </div>
  );
}
