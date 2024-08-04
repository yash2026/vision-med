import Ourservices from "@/components/ourservices/our-services";
import Section2card from "@/components/section-card/section2-card";
import Section3card from "@/components/section-card/section3-card";
import Section4card from "@/components/section-card/section4-card";
import WelcomeSection from "@/components/section-card/welcome-section";

export default function Home() {
  return (
    <div className="pt-[80px]">
      <WelcomeSection />
      <Section2card />
      <Section3card />
      <Section4card />
      <Ourservices />
    </div>
  );
}
