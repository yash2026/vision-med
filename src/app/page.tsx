import Carousel from "@/components/carosuel/Carousel";
import Enquiry from "@/components/enquiry";
import HeroCard from "@/components/hero-card";
import Howhelp from "@/components/how-we-help";
import Ourservices from "@/components/ourservices/our-services";
import Section2card from "@/components/section-card/section2-card";
import Section4card from "@/components/section-card/section4-card";
import WelcomeSection from "@/components/section-card/welcome-section";
import Testimonials from "@/components/testimonial/testimonials";
import Whychooseus from "@/components/whyus/why-choose-us";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 max-[400px]:gap-0">
      <Carousel />
      <HeroCard />
      <WelcomeSection />
      <Section2card />
      <Section4card />
      <Ourservices />
      <Howhelp />
      <Whychooseus />
      <Enquiry />
      <Testimonials />
    </div>
  );
}
