import { HeroSection, IdentificationSection, ProblemSection } from "./sections-top";
import { SolutionSection, ProductSection, BonusSection, TestimonialsSection } from "./sections-mid";
import { OfferSection, GuaranteeSection, FAQSection, FinalCTASection, Footer } from "./sections-bottom";

export default function App() {
  return (
    <>
      <HeroSection />
      <IdentificationSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
