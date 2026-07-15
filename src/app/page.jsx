import CallToAction from "@/components/Banner/CallToAction";
import HeroBanner from "@/components/Banner/HeroBanner";
import HowItWorks from "@/components/Banner/HowItWorks";
// import Properties from "./properties/page";

export default async function Home() {
  return (
    <div>
      <HeroBanner />
      {/* <Properties></Properties> */}
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
    </div>
  );
}
