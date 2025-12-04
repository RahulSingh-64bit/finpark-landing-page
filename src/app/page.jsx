

import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import FAQSection from "@/components/landing/FaqSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import IndustrySection from "@/components/landing/IndustrySection";
import ProcessSection from "@/components/landing/ProcessSection";
import ResourceHubSection from "@/components/landing/ResourceHubSection";
import ServicesSection from "@/components/landing/ServicesSection";
import SuccessStoriesSection from "@/components/landing/SuccessStoriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";


export default function Home() {
  return (
    <>
    
      <HeroSection />
      <FeaturesSection/>
      <AboutSection/>
      <ServicesSection/>
      <IndustrySection/>
      <ProcessSection/>
      <SuccessStoriesSection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
      <ResourceHubSection/>
      <FAQSection/>
      <ContactSection/>
    </>
  );
}